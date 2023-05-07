import { Router } from 'express'
import { adaptRoute } from '../../main/adapters/express-route-adapter'
import { makeAddRecipeController } from '../../main/factories/controllers/recipe/add-recipe/add-recipe-controller-factory'
import { makeDeleteRecipeByIdController } from '../../main/factories/controllers/recipe/delete-recipe-by-id/delete-recipe-controller'
import { makeLoadRecipesController } from '../../main/factories/controllers/recipe/load-recipes/load-recipes-controller'

export default (router: Router): void => {
  router.post('/recipe', adaptRoute(makeAddRecipeController()))
  router.delete('/recipe/:id', adaptRoute(makeDeleteRecipeByIdController()))
  router.get('/recipes', adaptRoute(makeLoadRecipesController()))
}
