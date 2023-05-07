"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbAddRecipe = void 0;
class DbAddRecipe {
    constructor(addRecipeRepository) {
        this.addRecipeRepository = addRecipeRepository;
    }
    async add(recipeData) {
        await this.addRecipeRepository.add(recipeData);
    }
}
exports.DbAddRecipe = DbAddRecipe;
//# sourceMappingURL=db-add-recipe.js.map