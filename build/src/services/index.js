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
exports.crewManService = exports.crewService = exports.launchService = exports.rocketService = void 0;
const repositories = __importStar(require("../repositories"));
const crewmanService_1 = require("./crewmanService");
const crewServices_1 = require("./crewServices");
const genericService_1 = require("./genericService");
const launchServices_1 = require("./launchServices");
exports.rocketService = new genericService_1.CrudService(repositories.rocketRepository);
exports.launchService = new launchServices_1.LaunchService(repositories.launchRepository);
exports.crewService = new crewServices_1.CrewService(repositories.crewRepository);
exports.crewManService = new crewmanService_1.CrewManService(repositories.crewManRepository);
