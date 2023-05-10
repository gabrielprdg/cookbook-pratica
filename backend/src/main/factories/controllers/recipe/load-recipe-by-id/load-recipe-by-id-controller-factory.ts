import { makeDbLoadRecipeById } from '../../../../../main/factories/use-cases/load-recipe-by-id/db-load-recipe-by-id-factory'
import { LoadRecipeByIdController } from '../../../../../presentation/controllers/recipe/load-recipe-by-id/load-recipe-by-id-controller'
import { Controller } from '../../../../../presentation/protocols'

export const makeLoadRecipeByIdController = (): Controller => {
  return new LoadRecipeByIdController(makeDbLoadRecipeById())
}
