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
exports.Crew1681990001982 = void 0;
class Crew1681990001982 {
    constructor() {
        this.name = 'Crew1681990001982';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "crew" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_cc72b429996b3476dbaac59f1c2" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "crew_crew_mans_crew_man" ("crewId" integer NOT NULL, "crewManId" integer NOT NULL, CONSTRAINT "PK_0c8592769ed29e3a1ff2cea0766" PRIMARY KEY ("crewId", "crewManId"))`);
            yield queryRunner.query(`CREATE INDEX "IDX_0522ab65381ffc7ddebddc5900" ON "crew_crew_mans_crew_man" ("crewId") `);
            yield queryRunner.query(`CREATE INDEX "IDX_0a18a3a98cd5667e0480aa26e6" ON "crew_crew_mans_crew_man" ("crewManId") `);
            yield queryRunner.query(`ALTER TABLE "launch" DROP COLUMN "success"`);
            yield queryRunner.query(`ALTER TABLE "launch" DROP CONSTRAINT "FK_b01b01e9029a8e3c1a928511998"`);
            yield queryRunner.query(`ALTER TABLE "launch" ALTER COLUMN "rocketId" DROP NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "launch" ADD CONSTRAINT "FK_b01b01e9029a8e3c1a928511998" FOREIGN KEY ("rocketId") REFERENCES "rocket"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "crew_crew_mans_crew_man" ADD CONSTRAINT "FK_0522ab65381ffc7ddebddc59007" FOREIGN KEY ("crewId") REFERENCES "crew"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
            yield queryRunner.query(`ALTER TABLE "crew_crew_mans_crew_man" ADD CONSTRAINT "FK_0a18a3a98cd5667e0480aa26e68" FOREIGN KEY ("crewManId") REFERENCES "crew_man"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "crew_crew_mans_crew_man" DROP CONSTRAINT "FK_0a18a3a98cd5667e0480aa26e68"`);
            yield queryRunner.query(`ALTER TABLE "crew_crew_mans_crew_man" DROP CONSTRAINT "FK_0522ab65381ffc7ddebddc59007"`);
            yield queryRunner.query(`ALTER TABLE "launch" DROP CONSTRAINT "FK_b01b01e9029a8e3c1a928511998"`);
            yield queryRunner.query(`ALTER TABLE "launch" ALTER COLUMN "rocketId" SET NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "launch" ADD CONSTRAINT "FK_b01b01e9029a8e3c1a928511998" FOREIGN KEY ("rocketId") REFERENCES "rocket"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "launch" ADD "success" boolean NOT NULL`);
            yield queryRunner.query(`DROP INDEX "public"."IDX_0a18a3a98cd5667e0480aa26e6"`);
            yield queryRunner.query(`DROP INDEX "public"."IDX_0522ab65381ffc7ddebddc5900"`);
            yield queryRunner.query(`DROP TABLE "crew_crew_mans_crew_man"`);
            yield queryRunner.query(`DROP TABLE "crew"`);
        });
    }
}
exports.Crew1681990001982 = Crew1681990001982;
