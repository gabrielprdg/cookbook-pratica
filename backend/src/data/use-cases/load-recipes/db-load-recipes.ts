import { LoadRecipesRepository } from '../../../data/protocols/recipe/load-recipes-repository'
import { RecipeModel } from '../../../domain/model/recipe'
import { LoadRecipes } from '../../../domain/use-cases/load-recipes/load-recipes'

export class DbLoadRecipes implements LoadRecipes {
  private readonly loadRecipesRepository: LoadRecipesRepository

  constructor (loadRecipesRepository: LoadRecipesRepository) {
    this.loadRecipesRepository = loadRecipesRepository
  }

  async loadAll (): Promise<RecipeModel[]> {
    const recipes = await this.loadRecipesRepository.loadAll()
    return recipes
  }
}
