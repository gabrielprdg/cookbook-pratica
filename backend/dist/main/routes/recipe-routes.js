"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_route_adapter_1 = require("../../main/adapters/express-route-adapter");
const add_recipe_controller_factory_1 = require("../../main/factories/controllers/recipe/add-recipe/add-recipe-controller-factory");
const delete_recipe_controller_1 = require("../../main/factories/controllers/recipe/delete-recipe-by-id/delete-recipe-controller");
const load_recipes_controller_1 = require("../../main/factories/controllers/recipe/load-recipes/load-recipes-controller");
const multer_1 = __importDefault(require("multer"));
const multer_2 = __importDefault(require("../config/multer"));
exports.default = (router) => {
    router.post('/recipe', (0, multer_1.default)(multer_2.default).single('file'), (0, express_route_adapter_1.adaptRoute)((0, add_recipe_controller_factory_1.makeAddRecipeController)()));
    router.delete('/recipe/:id', (0, express_route_adapter_1.adaptRoute)((0, delete_recipe_controller_1.makeDeleteRecipeByIdController)()));
    router.get('/recipes', (0, express_route_adapter_1.adaptRoute)((0, load_recipes_controller_1.makeLoadRecipesController)()));
};
//# sourceMappingURL=recipe-routes.js.map