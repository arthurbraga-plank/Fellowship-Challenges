import { Crew } from "../models/crew";
import { CrudService } from "./CrudService";

export class CrewService extends CrudService<Crew> {
  async get(filter?: Partial<Crew>): Promise<Crew[]> {
    return await this.repository.findByField({
      ...filter,
      relations: ["crewmen"],
    } as any);
  }
}
