import { ICrudRepository } from "../repositories/CrudRepository";

export interface ICrudService<BaseEntity, CreateDTO> {
  get(filter?: Partial<BaseEntity>): Promise<BaseEntity[]>;
  delete(id: number): Promise<boolean>;
  create(payload: CreateDTO): Promise<BaseEntity>;
  update(
    id: number,
    payload: Partial<Omit<BaseEntity, "id">>
  ): Promise<BaseEntity>;
}

export class CrudService<BaseEntity, CreateDTO = BaseEntity>
  implements ICrudService<BaseEntity, CreateDTO>
{
  protected repository: ICrudRepository<BaseEntity, CreateDTO>;

  constructor(repository: ICrudRepository<BaseEntity, CreateDTO>) {
    this.repository = repository;
  }

  async get(filter?: Partial<BaseEntity>): Promise<BaseEntity[]> {
    const entities = await this.repository.findByField(filter);
    return entities;
  }

  async delete(id: number): Promise<boolean> {
    const entity = await this.repository.deleteById(id);
    return entity;
  }

  async create(payload: CreateDTO): Promise<BaseEntity> {
    const entity = await this.repository.create(payload);
    return entity;
  }

  async update(
    id: number,
    payload: Partial<Omit<BaseEntity, "id">>
  ): Promise<BaseEntity> {
    const entity = await this.repository.updateById(id, payload);
    return entity;
  }
}
