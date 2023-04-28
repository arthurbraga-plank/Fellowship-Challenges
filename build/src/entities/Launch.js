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
exports.Launch = void 0;
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const Rocket_1 = require("./Rocket");
const Crew_1 = require("./Crew");
let Launch = class Launch {
    constructor() {
        if (!this.id) {
            this.id = (0, uuid_1.v4)();
        }
    }
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Launch.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Launch.prototype, "launch_code", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Launch.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Launch.prototype, "success", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Rocket_1.Rocket, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'rocket_id' }),
    __metadata("design:type", Rocket_1.Rocket)
], Launch.prototype, "rocket", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Crew_1.Crew),
    (0, typeorm_1.JoinColumn)({ name: 'crew_id' }),
    __metadata("design:type", Crew_1.Crew)
], Launch.prototype, "crew", void 0);
Launch = __decorate([
    (0, typeorm_1.Entity)('launches'),
    __metadata("design:paramtypes", [])
], Launch);
exports.Launch = Launch;
