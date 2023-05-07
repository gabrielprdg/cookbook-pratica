"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddRecipeController = void 0;
const db_add_recipe_factory_1 = require("../../../../../main/factories/use-cases/add-recipe/db-add-recipe-factory");
const add_recipe_controller_1 = require("../../../../../presentation/controllers/recipe/add-recipe/add-recipe-controller");
const add_recipe_validation_factory_1 = require("./add-recipe-validation-factory");
const makeAddRecipeController = () => {
    return new add_recipe_controller_1.AddRecipeController((0, db_add_recipe_factory_1.makeDbAddRecipe)(), (0, add_recipe_validation_factory_1.makeAddRecipeValidation)());
};
exports.makeAddRecipeController = makeAddRecipeController;
//# sourceMappingURL=add-recipe-controller-factory.js.map