import { Joi, Segments, celebrate } from "celebrate";
import { CreateLaunchDTO } from "../interfaces/launch";

export const createLaunchValidator = celebrate({
  [Segments.BODY]: Joi.object<CreateLaunchDTO>().keys({
    launchCode: Joi.string().required(),
    date: Joi.string().required(),
    success: Joi.boolean().required(),
    rocketId: Joi.number().required(),
    crewId: Joi.number(),
  }),
});

export const updateLaunchValidator = celebrate({
  [Segments.BODY]: Joi.object<CreateLaunchDTO>().keys({
    launchCode: Joi.string(),
    date: Joi.string(),
    success: Joi.boolean(),
    rocketId: Joi.number(),
    crewId: Joi.number(),
  }),
});
