"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const typeorm_recipe_1 = require("../entities/typeorm-recipe");
const typeorm_image_1 = require("../entities/typeorm-image");
class AppDataSource {
    static getInstance() {
        if (this.instance)
            return this.instance;
        this.instance = new typeorm_1.DataSource({
            type: 'mysql',
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            synchronize: true,
            logging: true,
            entities: [typeorm_recipe_1.TypeOrmRecipe, typeorm_image_1.TypeOrmImage],
            subscribers: [],
            migrations: []
        });
        return this.instance;
    }
}
exports.AppDataSource = AppDataSource;
//# sourceMappingURL=app-data-source.js.map