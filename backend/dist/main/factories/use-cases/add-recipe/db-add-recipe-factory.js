"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbAddRecipe = void 0;
const db_add_recipe_1 = require("../../../../data/use-cases/add-recipe/db-add-recipe");
const typeorm_car_repository_1 = require("../../../../infra/db/typeorm/repositories/typeorm-car-repository");
const makeDbAddRecipe = () => {
    const typeOrmRecipeRepository = new typeorm_car_repository_1.TypeOrmRecipeRepository();
    return new db_add_recipe_1.DbAddRecipe(typeOrmRecipeRepository);
};
exports.makeDbAddRecipe = makeDbAddRecipe;
//# sourceMappingURL=db-add-recipe-factory.js.map