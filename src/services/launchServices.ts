import { CreateLaunchDTO, LaunchDTO } from "../interfaces/launch";
import { Launch } from "../models/launch";
import {
  crewRepository,
  launchRepository,
  rocketRepository,
} from "../repositories";
import { CrudService } from "./CrudService";

export class LaunchService extends CrudService<LaunchDTO, CreateLaunchDTO> {
  async create(payload: CreateLaunchDTO): Promise<LaunchDTO> {
    const { rocketId, crewId } = payload;

    const foundRocket = await rocketRepository.findByField({ id: rocketId });
    if (!foundRocket.length) throw new Error("Rocket not found");

    if (crewId) {
      const foundCrew = await crewRepository.findByField({ id: crewId });
      if (!foundCrew.length) throw new Error("Crew not found");
    }


    return await launchRepository.create(payload);
  }

  async update(
    id: string,
    payload: Partial<Omit<Launch, "id">>
  ): Promise<LaunchDTO> {
    const { id: rocketId } = payload.rocket;
    const foundRocket = await rocketRepository.findByField({ id: rocketId });

    if (!foundRocket.length) throw new Error("Rocket not found");

    const launch = await launchRepository.updateById(id, payload);
    return launch;
  }

  async get(): Promise<LaunchDTO[]> {
    const launches = await launchRepository.findAll({
      relations: ["rocket"],
    });
    return launches;
  }
}
