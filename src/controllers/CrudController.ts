import { Request, Response } from "express";
import { CrudService } from "../services/CrudService";

export class CrudController<BaseEntity, CreateDTO = BaseEntity> {
  protected service: CrudService<BaseEntity, CreateDTO>;

  constructor(service: CrudService<BaseEntity, CreateDTO>) {
    this.service = service;
  }

  get = async (req: Request, res: Response) => {
    try {
      const entities = await this.service.get();
      res.json(entities);
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .json({ message: "Error while getting entities from database" });
    }
  }

  create = async (req: Request, res: Response) => {
    try {
      const payload = req.body;
      const entity = await this.service.create(payload);

      res.json(entity);
    } catch (err: any) {
      if (err?.message === "Rocket not found")
        res.status(400).json({ message: err.message });

      console.error(err);
      res
        .status(500)
        .json({ message: "Error while storing entity in database" });
    }
  }

  update = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const entity = await this.service.update(Number(id), req.body);
      res.json(entity);
    } catch (err: any) {
      if (err?.response?.status === 404) {
        res.status(404).json({ message: "No object with passed id" });
      } else {
        res
          .status(500)
          .json({ message: "Error while updating entity in database" });
      }
    }
  }

  delete = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const success = await this.service.delete(Number(id));
      res.json(success);
    } catch (err: any) {
      if (err?.response?.status === 404) {
        res.status(404).json({ message: "No object with passed id" });
      } else {
        console.error(err);
        res
          .status(500)
          .json({ message: "Error while deleting entity from database" });
      }
    }
  }
}
