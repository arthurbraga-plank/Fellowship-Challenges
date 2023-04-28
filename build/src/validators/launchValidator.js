"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateLaunchValidator = exports.createLaunchValidator = void 0;
const celebrate_1 = require("celebrate");
exports.createLaunchValidator = (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: celebrate_1.Joi.object().keys({
        launchCode: celebrate_1.Joi.string().required(),
        date: celebrate_1.Joi.string().required(),
        success: celebrate_1.Joi.boolean().required(),
        rocket: celebrate_1.Joi.number().required(),
    }),
});
exports.updateLaunchValidator = (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: celebrate_1.Joi.object().keys({
        launchCode: celebrate_1.Joi.string(),
        date: celebrate_1.Joi.string(),
        success: celebrate_1.Joi.boolean(),
        rocket: celebrate_1.Joi.number().required(),
    }),
});
