import { AppDataSource } from "../database";
import { CrewDTO } from "../interfaces/crew";
import { CrewManDTO } from "../interfaces/crewMan";
import { RocketDTO } from "../interfaces/rocket";
import { CrudRepository } from "./CrudRepository";
import { LaunchRepository } from "./LaunchRepository";

export const rocketRepository = new CrudRepository<RocketDTO>(
  AppDataSource.getRepository("Rocket")
);
export const launchRepository = new LaunchRepository(
  AppDataSource.getRepository("Launch")
);

export const crewRepository = new CrudRepository<CrewDTO>(
  AppDataSource.getRepository("Crew")
);
export const crewManRepository = new CrudRepository<CrewManDTO>(
  AppDataSource.getRepository("CrewMan")
);
