"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    url: (_a = process.env.DB_URL) !== null && _a !== void 0 ? _a : "postgres://postgres@localhost:5432/rocket-launch",
    entities: ["./src/models/*{.ts,.js}"],
    migrations: ["./src/database/migrations/*{.ts,.js}"],
});
