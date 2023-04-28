"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Crew = void 0;
const typeorm_1 = require("typeorm");
const launch_1 = require("./launch");
const crewMan_1 = require("./crewMan");
let Crew = class Crew {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Crew.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Crew.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => launch_1.Launch, (launch) => launch.rocket),
    __metadata("design:type", Array)
], Crew.prototype, "launches", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => crewMan_1.CrewMan, (crewMan) => crewMan.crews),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Crew.prototype, "crewMans", void 0);
Crew = __decorate([
    (0, typeorm_1.Entity)()
], Crew);
exports.Crew = Crew;
