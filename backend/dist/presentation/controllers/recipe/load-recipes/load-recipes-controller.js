"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadRecipesController = void 0;
const http_helper_1 = require("../../../helpers/http/http-helper");
class LoadRecipesController {
    constructor(loadRecipes) {
        this.loadRecipes = loadRecipes;
    }
    async handle(httpRequest) {
        try {
            const recipes = await this.loadRecipes.loadAll();
            return (0, http_helper_1.ok)(recipes);
        }
        catch (err) {
            return (0, http_helper_1.serverError)(err);
        }
    }
}
exports.LoadRecipesController = LoadRecipesController;
//# sourceMappingURL=load-recipes-controller.js.map