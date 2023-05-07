import { makeDbLoadRecipes } from '../../../../../main/factories/use-cases/load-recipes/db-load-recipes-factory'
import { LoadRecipesController } from '../../../../../presentation/controllers/recipe/load-recipes/load-recipes-controller'
import { Controller } from '../../../../../presentation/protocols'

export const makeLoadRecipesController = (): Controller => {
  return new LoadRecipesController(makeDbLoadRecipes())
}
