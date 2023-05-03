import { CrewManDTO } from "../interfaces/crewMan";
import { CrudService } from "./CrudService";

export class CrewManService extends CrudService<CrewManDTO> {
  async get(): Promise<CrewManDTO[]> {
    return await this.repository.findByField({
      relations: ["crews"],
    } as any);
  }
}
