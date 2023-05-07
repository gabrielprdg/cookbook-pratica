"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDeleteRecipeByIdController = void 0;
const delete_recipe_by_id_controller_1 = require("../../../../../presentation/controllers/recipe/delete-recipe-by-id/delete-recipe-by-id-controller");
const db_delete_recipe_by_id_factory_1 = require("../../../../../main/factories/use-cases/delete-recipe-by-id/db-delete-recipe-by-id-factory");
const makeDeleteRecipeByIdController = () => {
    return new delete_recipe_by_id_controller_1.DeleteRecipeByIdController((0, db_delete_recipe_by_id_factory_1.makeDbDeleteRecipeById)());
};
exports.makeDeleteRecipeByIdController = makeDeleteRecipeByIdController;
//# sourceMappingURL=delete-recipe-controller.js.map