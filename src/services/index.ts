import { crewManRepository, crewRepository, launchRepository, rocketRepository } from "../repositories";
import { CrewService } from "./CrewService";
import { CrudService } from "./CrudService";
import { LaunchService } from "./LaunchServices";

export const rocketService = new CrudService(rocketRepository);
export const launchService = new LaunchService(launchRepository);
export const crewService = new CrewService(crewRepository);
export const crewManService = new CrudService(crewManRepository);
