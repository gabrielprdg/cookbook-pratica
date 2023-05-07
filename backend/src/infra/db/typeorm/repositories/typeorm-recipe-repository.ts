import { RecipeModel } from 'domain/model/recipe'
import { AddRecipeRepository } from '../../../../data/protocols/recipe/add-recipe-repository'
import { DeleteRecipeByIdRepository } from '../../../../data/protocols/recipe/delete-recipe-by-id'
import { LoadRecipesRepository } from '../../../../data/protocols/recipe/load-recipes-repository'
import { AddRecipeParams } from '../../../../domain/use-cases/add-recipe/add-recipe'
import { TypeOrmRecipe } from '../entities/typeorm-recipe'
import { AppDataSource } from '../helper/app-data-source'
import { Mapper } from '../mappers/recipe-mapper'

export class TypeOrmRecipeRepository implements AddRecipeRepository, LoadRecipesRepository, DeleteRecipeByIdRepository {
  async add (recipeData: AddRecipeParams): Promise<void> {
    const recipe = new TypeOrmRecipe()

    recipe.name = recipeData.name
    recipe.weight = recipeData.weight
    recipe.assemblyIngradients = recipeData.assemblyIngradients
    recipe.operatingInstructions = recipeData.operatingInstructions
    recipe.entryTemperature = recipeData.entryTemperature

    await AppDataSource.getInstance()
      .getRepository(TypeOrmRecipe)
      .save(recipe)
  }

  async loadAll (): Promise<RecipeModel[]> {
    const recipes = await AppDataSource.getInstance()
    .getRepository(TypeOrmRecipe)
    .createQueryBuilder('recipe')
    .getMany()

    const domainRecipe = Mapper.toDomainEntities(recipes)

    return domainRecipe
  }

  async deleteById (id: string): Promise<void> {
    await AppDataSource.getInstance()
    .createQueryBuilder()
    .delete()
    .from(TypeOrmRecipe)
    .where('id = :id', { id })
    .execute()
  }
}
