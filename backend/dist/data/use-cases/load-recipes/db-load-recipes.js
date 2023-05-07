"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadRecipes = void 0;
class DbLoadRecipes {
    constructor(loadRecipesRepository) {
        this.loadRecipesRepository = loadRecipesRepository;
    }
    async loadAll() {
        const recipes = await this.loadRecipesRepository.loadAll();
        return recipes;
    }
}
exports.DbLoadRecipes = DbLoadRecipes;
//# sourceMappingURL=db-load-recipes.js.map