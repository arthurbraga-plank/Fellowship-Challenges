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
exports.CrewLaunch1681990300821 = void 0;
class CrewLaunch1681990300821 {
    constructor() {
        this.name = 'CrewLaunch1681990300821';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "launch" ADD "crewId" integer`);
            yield queryRunner.query(`ALTER TABLE "launch" ADD CONSTRAINT "FK_0f1c4f512003ae87bb8df983d49" FOREIGN KEY ("crewId") REFERENCES "crew"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "launch" DROP CONSTRAINT "FK_0f1c4f512003ae87bb8df983d49"`);
            yield queryRunner.query(`ALTER TABLE "launch" DROP COLUMN "crewId"`);
        });
    }
}
exports.CrewLaunch1681990300821 = CrewLaunch1681990300821;
