import { Router } from 'express'
import multer from 'multer'
import multerConfig from '../config/multer'
import { adaptRoute } from '../../main/adapters/express-route-adapter'
import { makeAddRecipeController } from '../../main/factories/controllers/recipe/add-recipe/add-recipe-controller-factory'
import { makeDeleteRecipeByIdController } from '../../main/factories/controllers/recipe/delete-recipe-by-id/delete-recipe-controller'
import { makeLoadRecipesController } from '../../main/factories/controllers/recipe/load-recipes/load-recipes-controller'
import { makeLoadRecipeByIdController } from '../../main/factories/controllers/recipe/load-recipe-by-id/load-recipe-by-id-controller-factory'
import { makeUpdateRecipeByIdController } from '../../main/factories/controllers/recipe/update-recipe-by-id/update-recipe-by-id-controller-factory'

export default (router: Router): void => {
  router.post('/recipe', multer(multerConfig).single('file'), adaptRoute(makeAddRecipeController()))
  router.delete('/recipe/:id', adaptRoute(makeDeleteRecipeByIdController()))
  router.get('/recipe/:id', adaptRoute(makeLoadRecipeByIdController()))
  router.get('/recipes', adaptRoute(makeLoadRecipesController()))
  router.patch('/recipe/:id', adaptRoute(makeUpdateRecipeByIdController()))
}
