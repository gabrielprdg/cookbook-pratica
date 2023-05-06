import { AddRecipeRepository } from '../../../data/protocols/add-recipe-repository'
import { AddRecipe, AddRecipeParams } from '../../../domain/use-cases/add-recipe/add-recipe'

export class DbAddRecipe implements AddRecipe {
  private readonly addRecipeRepository: AddRecipeRepository

  constructor (addRecipeRepository: AddRecipeRepository) {
    this.addRecipeRepository = addRecipeRepository
  }

  async add (recipeData: AddRecipeParams): Promise<void> {
    await this.addRecipeRepository.add(recipeData)
  }
}
