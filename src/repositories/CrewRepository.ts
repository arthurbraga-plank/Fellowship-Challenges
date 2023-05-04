import { Repository as TypeOrmRepository } from "typeorm";
import { CreateCrewDTO, CrewDTO } from "../interfaces/crew";
import { ICrudRepository, makeCrudRepository } from "./CrudRepository";

export function makeCrewRepository(
  repository: TypeOrmRepository<CrewDTO>
): ICrudRepository<CrewDTO, CreateCrewDTO> {
  return {
    ...makeCrudRepository(repository),
    create: (payload) => {
      const { crewManIds, ...rest } = payload;
      const crew = {
        ...rest,
        crewMans: crewManIds.map((id) => ({ id })),
      };

      const created = this.repository.create(crew);
      return this.repository.save(created);
    },
  };
}
