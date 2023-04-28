"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.launchRoutes = void 0;
const express_1 = require("express");
const launchValidator_1 = require("../validators/launchValidator");
const genericController_1 = require("../controllers/genericController");
const services_1 = require("../services");
const launchController = new genericController_1.CrudController(services_1.launchService);
const launchRoutes = (0, express_1.Router)();
exports.launchRoutes = launchRoutes;
launchRoutes
    .route("/launch")
    .get(launchController.get)
    .post(launchValidator_1.createLaunchValidator, launchController.create);
launchRoutes
    .route("/launch/:id")
    .put(launchValidator_1.updateLaunchValidator, launchController.update)
    .delete(launchController.delete);
