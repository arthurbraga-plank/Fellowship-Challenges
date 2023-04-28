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
exports.CrudService = void 0;
class CrudService {
    constructor(repository) {
        this.repository = repository;
    }
    get(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            const entities = yield this.repository.get(filter);
            return entities;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const entity = yield this.repository.delete(id);
            return entity;
        });
    }
    create(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const entity = yield this.repository.create(payload);
            return entity;
        });
    }
    update(id, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const entity = yield this.repository.update(id, payload);
            return entity;
        });
    }
}
exports.CrudService = CrudService;
