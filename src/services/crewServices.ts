import { CrewDTO } from "../interfaces/crew";
import { CrudService } from "./CrudService";

export class CrewService extends CrudService<CrewDTO> {
  async get(): Promise<CrewDTO[]> {
    return await this.repository.findByField({
      relations: ["crewMans"],
    } as any);
  }
}
