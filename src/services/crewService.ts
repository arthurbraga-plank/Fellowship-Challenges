import { CreateCrewDTO, CrewDTO } from "../interfaces/crew";
import { crewManRepository } from "../repositories";
import { CrudService } from "./CrudService";
export class CrewService extends CrudService<CrewDTO, CreateCrewDTO> {
  async create(payload: CreateCrewDTO): Promise<CrewDTO> {
    const elements = await crewManRepository.findByIds(payload.crewManIds);
    
    if(elements.length !== payload.crewManIds.length) 
      throw new Error("Invalid crewManIds");
    
    const entity = await this.repository.create(payload);
    return entity;
  }
  async get(filter?: Partial<CrewDTO>): Promise<CrewDTO[]> {
    return await this.repository.findByField(filter, {
      relations: ["crewmen"],
    });
  }
}
