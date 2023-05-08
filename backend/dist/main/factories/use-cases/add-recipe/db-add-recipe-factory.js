"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbAddRecipe = void 0;
const typeorm_image_repository_1 = require("../../../../infra/db/typeorm/repositories/typeorm-image-repository");
const db_add_recipe_1 = require("../../../../data/use-cases/add-recipe/db-add-recipe");
const typeorm_recipe_repository_1 = require("../../../../infra/db/typeorm/repositories/typeorm-recipe-repository");
const makeDbAddRecipe = () => {
    const typeOrmRecipeRepository = new typeorm_recipe_repository_1.TypeOrmRecipeRepository();
    const typeOrmImageRepository = new typeorm_image_repository_1.TypeOrmImageRepository();
    return new db_add_recipe_1.DbAddRecipe(typeOrmRecipeRepository, typeOrmImageRepository);
};
exports.makeDbAddRecipe = makeDbAddRecipe;
//# sourceMappingURL=db-add-recipe-factory.js.map