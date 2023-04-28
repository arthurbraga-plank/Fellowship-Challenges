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
exports.CrudController = void 0;
class CrudController {
    constructor(repository) {
        this.get = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const entities = yield this.service.get();
                res.json(entities);
            }
            catch (err) {
                console.error(err);
                res
                    .status(500)
                    .json({ message: "Error while getting entities from database" });
            }
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const entity = yield this.service.create(req.body);
                res.json(entity);
            }
            catch (err) {
                if ((err === null || err === void 0 ? void 0 : err.message) === "Rocket not found")
                    res.status(400).json({ message: err.message });
                console.error(err);
                res
                    .status(500)
                    .json({ message: "Error while storing entity in database" });
            }
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const { id } = req.params;
                const entity = yield this.service.update(id, req.body);
                res.json(entity);
            }
            catch (err) {
                if (((_a = err === null || err === void 0 ? void 0 : err.response) === null || _a === void 0 ? void 0 : _a.status) === 404) {
                    res.status(404).json({ message: "No object with passed id" });
                }
                else {
                    res
                        .status(500)
                        .json({ message: "Error while updating entity in database" });
                }
            }
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            var _b;
            try {
                const { id } = req.params;
                const success = yield this.service.delete(id);
                res.json(success);
            }
            catch (err) {
                if (((_b = err === null || err === void 0 ? void 0 : err.response) === null || _b === void 0 ? void 0 : _b.status) === 404) {
                    res.status(404).json({ message: "No object with passed id" });
                }
                else {
                    console.error(err);
                    res
                        .status(500)
                        .json({ message: "Error while deleting entity from database" });
                }
            }
        });
        this.service = repository;
    }
}
exports.CrudController = CrudController;
