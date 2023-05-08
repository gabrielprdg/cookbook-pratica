"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbDeleteRecipeById = void 0;
const db_delete_recipe_by_id_1 = require("../../../../data/use-cases/delete-recipe-by-id/db-delete-recipe-by-id");
const typeorm_recipe_repository_1 = require("../../../../infra/db/typeorm/repositories/typeorm-recipe-repository");
const makeDbDeleteRecipeById = () => {
    const typeOrmRecipeRepository = new typeorm_recipe_repository_1.TypeOrmRecipeRepository();
    return new db_delete_recipe_by_id_1.DbDeleteRecipeById(typeOrmRecipeRepository);
};
exports.makeDbDeleteRecipeById = makeDbDeleteRecipeById;
//# sourceMappingURL=db-delete-recipe-by-id-factory.js.map