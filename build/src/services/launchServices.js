"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaunchService = void 0;
const repositories_1 = require("../repositories");
const genericService_1 = require("./genericService");
class LaunchService extends genericService_1.CrudService {
    create(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id: rocketId } = payload.rocket;
            const foundRocket = yield repositories_1.rocketRepository.get({ id: rocketId });
            if (!foundRocket.length)
                throw new Error("Rocket not found");
            const launch = yield repositories_1.launchRepository.create(payload);
            return launch;
        });
    }
    update(id, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id: rocketId } = payload.rocket;
            const foundRocket = yield repositories_1.rocketRepository.get({ id: rocketId });
            if (!foundRocket.length)
                throw new Error("Rocket not found");
            const launch = yield repositories_1.launchRepository.update(id, payload);
            return launch;
        });
    }
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            const launches = yield repositories_1.launchRepository.get({
                relations: ["rocket"],
            });
            return launches;
        });
    }
}
exports.LaunchService = LaunchService;
