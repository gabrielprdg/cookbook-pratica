"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmRecipeRepository = void 0;
const typeorm_recipe_1 = require("../entities/typeorm-recipe");
const app_data_source_1 = require("../helper/app-data-source");
const recipe_mapper_1 = require("../mappers/recipe-mapper");
class TypeOrmRecipeRepository {
    async add(recipeData) {
        const recipe = new typeorm_recipe_1.TypeOrmRecipe();
        recipe.name = recipeData.name;
        recipe.weight = recipeData.weight;
        recipe.assemblyIngradients = recipeData.assemblyIngradients;
        recipe.operatingInstructions = recipeData.operatingInstructions;
        recipe.entryTemperature = recipeData.entryTemperature;
        await app_data_source_1.AppDataSource.getInstance()
            .getRepository(typeorm_recipe_1.TypeOrmRecipe)
            .save(recipe);
    }
    async loadAll() {
        const recipes = await app_data_source_1.AppDataSource.getInstance()
            .getRepository(typeorm_recipe_1.TypeOrmRecipe)
            .createQueryBuilder('recipe')
            .getMany();
        const domainRecipe = recipe_mapper_1.Mapper.toDomainEntities(recipes);
        return domainRecipe;
    }
    async deleteById(id) {
        await app_data_source_1.AppDataSource.getInstance()
            .createQueryBuilder()
            .delete()
            .from(typeorm_recipe_1.TypeOrmRecipe)
            .where('id = :id', { id })
            .execute();
    }
}
exports.TypeOrmRecipeRepository = TypeOrmRecipeRepository;
//# sourceMappingURL=typeorm-car-repository.js.map