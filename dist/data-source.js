"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const user_1 = require("./entities/user");
const todo_1 = require("./entities/todo");
const task_1 = require("./entities/task");
const AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL,
    synchronize: true,
    logging: false,
    entities: [user_1.User, todo_1.Todo, task_1.Task],
    migrations: [],
    subscribers: [],
});
exports.default = AppDataSource;
//# sourceMappingURL=data-source.js.map