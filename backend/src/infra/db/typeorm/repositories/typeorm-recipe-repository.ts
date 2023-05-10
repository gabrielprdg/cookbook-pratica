import { LoadRecipeByIdRepository } from '../../../../data/protocols/recipe/load-recipe-by-id-repository'
import { AddRecipeRepository, AddRecipeRepositoryData } from '../../../../data/protocols/recipe/add-recipe-repository'
import { DeleteRecipeByIdRepository } from '../../../../data/protocols/recipe/delete-recipe-by-id'
import { LoadRecipesRepository } from '../../../../data/protocols/recipe/load-recipes-repository'
import { UpdateRecipeByIdRepository } from '../../../../data/protocols/recipe/update-recipe-by-id-repository'
import { RecipeModel } from '../../../../domain/model/recipe'
import { TypeOrmRecipe } from '../entities/typeorm-recipe'
import { AppDataSource } from '../helper/app-data-source'
import { Mapper } from '../mappers/recipe-mapper'
import { RecipeRequest } from 'domain/use-cases/update-recipe-by-id/update-recipe-by-id'

export class TypeOrmRecipeRepository implements AddRecipeRepository, LoadRecipesRepository, DeleteRecipeByIdRepository, LoadRecipeByIdRepository, UpdateRecipeByIdRepository {
  async add (recipeData: AddRecipeRepositoryData): Promise<void> {
    const recipe = new TypeOrmRecipe()

    recipe.name = recipeData.name
    recipe.weight = recipeData.weight
    recipe.assemblyIngradients = recipeData.assemblyIngradients
    recipe.operatingInstructions = recipeData.operatingInstructions
    recipe.image = recipeData.image
    recipe.entryTemperature = recipeData.entryTemperature

    await AppDataSource.getInstance()
      .getRepository(TypeOrmRecipe)
      .save(recipe)
  }

  async loadAll (): Promise<RecipeModel[]> {
    const recipes = await AppDataSource.getInstance()
    .getRepository(TypeOrmRecipe)
    .createQueryBuilder('recipe')
    .leftJoinAndSelect('recipe.image', 'image')
    .select(['recipe', 'image'])
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

  async loadById (id: string): Promise<RecipeModel> {
    const recipe = await AppDataSource.getInstance()
    .getRepository(TypeOrmRecipe)
    .createQueryBuilder('recipe')
    .leftJoinAndSelect('recipe.image', 'image')
    .select(['recipe', 'image'])
    .where('recipe.id = :id', { id })
    .getOne()

    const domainRecipe = Mapper.toDomainEntity(recipe)

    return domainRecipe
  }

  async updateById (id: string, recipeData: RecipeRequest): Promise<void> {
    await AppDataSource.getInstance()
    .createQueryBuilder()
    .update(TypeOrmRecipe)
    .set(recipeData)
    .where('id = :id', { id })
    .execute()
  }
}
