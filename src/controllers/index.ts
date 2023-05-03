import { crewManService, crewService, launchService, rocketService } from "../services";
import { CrudController } from "./CrudController";

export const rocketController = new CrudController(rocketService);
export const launchController = new CrudController(launchService);
export const crewController = new CrudController(crewService);
export const crewManController = new CrudController(crewManService);