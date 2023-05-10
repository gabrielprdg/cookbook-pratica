import { LoadRecipeByIdRepository } from '../../../data/protocols/recipe/load-recipe-by-id-repository'
import { RecipeModel } from '../../../domain/model/recipe'
import { LoadRecipeById } from '../../../domain/use-cases/load-recipe-by-id/load-recipe-by-id'

export class DbLoadRecipeById implements LoadRecipeById {
  private readonly loadRecipeByIdRepository: LoadRecipeByIdRepository

  constructor (loadRecipeByIdRepository: LoadRecipeByIdRepository) {
    this.loadRecipeByIdRepository = loadRecipeByIdRepository
  }

  async loadById (id: string): Promise<RecipeModel> {
    const recipe = await this.loadRecipeByIdRepository.loadById(id)
    return recipe
  }
}
