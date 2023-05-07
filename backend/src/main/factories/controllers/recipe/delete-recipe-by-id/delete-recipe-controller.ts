import { DeleteRecipeByIdController } from '../../../../../presentation/controllers/recipe/delete-recipe-by-id/delete-recipe-by-id-controller'
import { Controller } from '../../../../../presentation/protocols'
import { makeDbDeleteRecipeById } from '../../../../../main/factories/use-cases/delete-recipe-by-id/db-delete-recipe-by-id-factory'

export const makeDeleteRecipeByIdController = (): Controller => {
  return new DeleteRecipeByIdController(makeDbDeleteRecipeById())
}
