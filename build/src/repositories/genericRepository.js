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
exports.CrudRepository = void 0;
const database_1 = require("../database");
class CrudRepository {
    constructor(model) {
        this.repository = database_1.AppDataSource.getRepository(model);
    }
    get(filter) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.find(filter);
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const created = this.repository.create(data);
            return this.repository.save(created);
        });
    }
    update(id, entity) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.repository.findOneBy({
                id,
            });
            if (!data)
                throw new Error("Entity not found");
            const updatedData = Object.assign(Object.assign({}, data), entity);
            return yield this.repository.save(updatedData);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const entity = yield this.repository.findOneBy({ id });
            if (!entity)
                return false;
            yield this.repository.delete(id);
            return true;
        });
    }
}
exports.CrudRepository = CrudRepository;
