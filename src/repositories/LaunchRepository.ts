import { Repository as TypeOrmRepository } from "typeorm";
import { CreateLaunchDTO, LaunchDTO } from "../interfaces/launch";
import { ICrudRepository, makeCrudRepository } from "./CrudRepository";

export function makeLaunchRepository(
  repository: TypeOrmRepository<LaunchDTO>
): ICrudRepository<LaunchDTO, CreateLaunchDTO> {
  return {
    ...makeCrudRepository(repository),
    create: (payload) => {
      const { rocketId, crewId, ...rest } = payload;
      const launch = {
        ...rest,
        rocket: rocketId,
        crew: crewId,
      };

      const created = repository.create(launch);
      return repository.save(created);
    },
  };
}
