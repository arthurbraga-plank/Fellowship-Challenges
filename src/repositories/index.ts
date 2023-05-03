import { AppDataSource } from "../database";
import { CrewDTO } from "../interfaces/crew";
import { CrewManDTO } from "../interfaces/crewMan";
import { RocketDTO } from "../interfaces/rocket";
import { makeCrudRepository } from "./CrudRepository";
import { makeLaunchRepository } from "./LaunchRepository";

export const rocketRepository = makeCrudRepository<RocketDTO>(
  AppDataSource.getRepository("Rocket")
);
export const launchRepository = makeLaunchRepository(
  AppDataSource.getRepository("Launch")
);

export const crewRepository = makeCrudRepository<CrewDTO>(
  AppDataSource.getRepository("Crew")
);
export const crewManRepository = makeCrudRepository<CrewManDTO>(
  AppDataSource.getRepository("CrewMan")
);
