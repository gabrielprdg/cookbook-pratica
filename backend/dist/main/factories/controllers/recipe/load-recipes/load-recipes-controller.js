"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadRecipesController = void 0;
const db_load_recipes_factory_1 = require("../../../../../main/factories/use-cases/load-recipes/db-load-recipes-factory");
const load_recipes_controller_1 = require("../../../../../presentation/controllers/recipe/load-recipes/load-recipes-controller");
const makeLoadRecipesController = () => {
    return new load_recipes_controller_1.LoadRecipesController((0, db_load_recipes_factory_1.makeDbLoadRecipes)());
};
exports.makeLoadRecipesController = makeLoadRecipesController;
//# sourceMappingURL=load-recipes-controller.js.map