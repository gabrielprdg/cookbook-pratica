"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbAddRecipe = void 0;
class DbAddRecipe {
    constructor(addRecipeRepository, addImageRepository) {
        this.addRecipeRepository = addRecipeRepository;
        this.addImageRepository = addImageRepository;
    }
    async add(recipeData) {
        const { name, weight, assemblyIngradients, operatingInstructions, image, entryTemperature } = recipeData;
        // add recipe image
        const imageData = await this.addImageRepository.add(image);
        await this.addRecipeRepository.add({
            name,
            weight: Number(weight),
            assemblyIngradients,
            operatingInstructions,
            image: imageData,
            entryTemperature
        });
    }
}
exports.DbAddRecipe = DbAddRecipe;
//# sourceMappingURL=db-add-recipe.js.map