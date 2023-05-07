"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbLoadRecipes = void 0;
const db_load_recipes_1 = require("../../../../data/use-cases/load-recipes/db-load-recipes");
const typeorm_car_repository_1 = require("../../../../infra/db/typeorm/repositories/typeorm-car-repository");
const makeDbLoadRecipes = () => {
    const typeOrmRecipeRepository = new typeorm_car_repository_1.TypeOrmRecipeRepository();
    return new db_load_recipes_1.DbLoadRecipes(typeOrmRecipeRepository);
};
exports.makeDbLoadRecipes = makeDbLoadRecipes;
//# sourceMappingURL=db-load-recipes-factory.js.map