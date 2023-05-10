import { UpdateRecipeByIdRepository } from 'data/protocols/recipe/update-recipe-by-id-repository'
import { RecipeRequest, UpdateRecipeById } from '../../../domain/use-cases/update-recipe-by-id/update-recipe-by-id'

export class DbUpdateRecipeById implements UpdateRecipeById {
  private readonly updateRecipeByIdRepository: UpdateRecipeByIdRepository

  constructor (updateRecipeByIdRepository: UpdateRecipeByIdRepository) {
    this.updateRecipeByIdRepository = updateRecipeByIdRepository
  }

  async updateById (id: string, recipeData: RecipeRequest): Promise<void> {
    await this.updateRecipeByIdRepository.updateById(id, recipeData)
  }
}
