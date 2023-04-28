"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const genericController_1 = require("../controllers/genericController");
const launchRoutes_1 = require("./launchRoutes");
const services = __importStar(require("../services"));
const createRoute = (path, service) => {
    const crudRouter = (0, express_1.Router)();
    const entityController = new genericController_1.CrudController(service);
    crudRouter
        .route(`/${path}`)
        .get(entityController.get)
        .post(entityController.create);
    crudRouter
        .route(`/${path}/:id`)
        .put(entityController.update)
        .delete(entityController.delete);
    return crudRouter;
};
const router = (0, express_1.Router)();
exports.router = router;
router.use(createRoute("rocket", services.rocketService));
router.use(createRoute("crewman", services.crewManService));
router.use(createRoute("crew", services.crewService));
router.use(launchRoutes_1.launchRoutes);
