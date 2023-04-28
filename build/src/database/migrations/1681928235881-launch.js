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
exports.Launch1681928235881 = void 0;
class Launch1681928235881 {
    constructor() {
        this.name = 'Launch1681928235881';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "launch" ("id" SERIAL NOT NULL, "launchCode" character varying NOT NULL, "date" character varying NOT NULL, "success" boolean NOT NULL, "rocketId" integer NOT NULL, CONSTRAINT "PK_0efd83695074312cab129ff59f0" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`ALTER TABLE "launch" ADD CONSTRAINT "FK_b01b01e9029a8e3c1a928511998" FOREIGN KEY ("rocketId") REFERENCES "rocket"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "launch" DROP CONSTRAINT "FK_b01b01e9029a8e3c1a928511998"`);
            yield queryRunner.query(`DROP TABLE "launch"`);
        });
    }
}
exports.Launch1681928235881 = Launch1681928235881;
