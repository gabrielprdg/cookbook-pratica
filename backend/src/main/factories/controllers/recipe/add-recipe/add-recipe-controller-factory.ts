import { makeDbAddRecipe } from '../../../../../main/factories/use-cases/add-recipe/db-add-recipe-factory'
import { AddRecipeController } from '../../../../../presentation/controllers/recipe/add-recipe/add-recipe-controller'
import { Controller } from '../../../../../presentation/protocols'
import { makeAddRecipeValidation } from './add-recipe-validation-factory'

export const makeAddRecipeController = (): Controller => {
  return new AddRecipeController(makeDbAddRecipe(), makeAddRecipeValidation())
}
