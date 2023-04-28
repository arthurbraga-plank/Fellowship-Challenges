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
exports.RocketSuccess1681997644472 = void 0;
class RocketSuccess1681997644472 {
    constructor() {
        this.name = 'RocketSuccess1681997644472';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "crew_crew_mans_crew_man" DROP CONSTRAINT "FK_0a18a3a98cd5667e0480aa26e68"`);
            yield queryRunner.query(`ALTER TABLE "launch" ADD "success" boolean NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "crew_crew_mans_crew_man" ADD CONSTRAINT "FK_0a18a3a98cd5667e0480aa26e68" FOREIGN KEY ("crewManId") REFERENCES "crew_man"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "crew_crew_mans_crew_man" DROP CONSTRAINT "FK_0a18a3a98cd5667e0480aa26e68"`);
            yield queryRunner.query(`ALTER TABLE "launch" DROP COLUMN "success"`);
            yield queryRunner.query(`ALTER TABLE "crew_crew_mans_crew_man" ADD CONSTRAINT "FK_0a18a3a98cd5667e0480aa26e68" FOREIGN KEY ("crewManId") REFERENCES "crew_man"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
}
exports.RocketSuccess1681997644472 = RocketSuccess1681997644472;
