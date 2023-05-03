import { Router } from "express";
import { crewController, crewManController, rocketController } from "../controllers";
import { CrudController } from "../controllers/CrudController";
import { launchRoutes } from "./launchRoutes";

const createRoute = <T, U>(path: string, controller: CrudController<T, U>) => {
  const crudRouter = Router();

  crudRouter
    .route(`/${path}`)
    .get(controller.get)
    .post(controller.create);

  crudRouter
    .route(`/${path}/:id`)
    .put(controller.update)
    .delete(controller.delete);

  return crudRouter;
};

const router = Router();

router.use(createRoute("rocket", rocketController));
router.use(createRoute("crewman", crewManController));
router.use(createRoute("crew", crewController));
router.use(launchRoutes);

export { router };
