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
exports.ChangeNullable1682010335570 = void 0;
class ChangeNullable1682010335570 {
    constructor() {
        this.name = 'ChangeNullable1682010335570';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "crew_crew_mans_crew_man" DROP CONSTRAINT "FK_0a18a3a98cd5667e0480aa26e68"`);
            yield queryRunner.query(`ALTER TABLE "launch" DROP CONSTRAINT "FK_b01b01e9029a8e3c1a928511998"`);
            yield queryRunner.query(`ALTER TABLE "launch" ALTER COLUMN "rocketId" SET NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "launch" ADD CONSTRAINT "FK_b01b01e9029a8e3c1a928511998" FOREIGN KEY ("rocketId") REFERENCES "rocket"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "crew_crew_mans_crew_man" ADD CONSTRAINT "FK_0a18a3a98cd5667e0480aa26e68" FOREIGN KEY ("crewManId") REFERENCES "crew_man"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "crew_crew_mans_crew_man" DROP CONSTRAINT "FK_0a18a3a98cd5667e0480aa26e68"`);
            yield queryRunner.query(`ALTER TABLE "launch" DROP CONSTRAINT "FK_b01b01e9029a8e3c1a928511998"`);
            yield queryRunner.query(`ALTER TABLE "launch" ALTER COLUMN "rocketId" DROP NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "launch" ADD CONSTRAINT "FK_b01b01e9029a8e3c1a928511998" FOREIGN KEY ("rocketId") REFERENCES "rocket"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "crew_crew_mans_crew_man" ADD CONSTRAINT "FK_0a18a3a98cd5667e0480aa26e68" FOREIGN KEY ("crewManId") REFERENCES "crew_man"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        });
    }
}
exports.ChangeNullable1682010335570 = ChangeNullable1682010335570;
