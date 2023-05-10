import { makeDbUpdateRecipeById } from '../../../../../main/factories/use-cases/update-recipe-by-id/update-recipe-by-id-factory'
import { UpdateRecipeByIdController } from '../../../../../presentation/controllers/recipe/update-recipe-by-id/update-recipe-by-id-controller'
import { Controller } from '../../../../../presentation/protocols'

export const makeUpdateRecipeByIdController = (): Controller => {
  return new UpdateRecipeByIdController(makeDbUpdateRecipeById())
}
