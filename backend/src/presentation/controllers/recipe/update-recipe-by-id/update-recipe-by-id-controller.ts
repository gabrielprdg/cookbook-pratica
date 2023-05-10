import { UpdateRecipeById } from '../../../../domain/use-cases/update-recipe-by-id/update-recipe-by-id'
import { noContent, serverError } from '../../../helpers/http/http-helper'
import { Controller } from '../../../protocols/controller'
import { HttpRequest, HttpResponse } from '../../../protocols/http'

export class UpdateRecipeByIdController implements Controller {
  private readonly updateRecipe: UpdateRecipeById

  constructor (updateRecipe: UpdateRecipeById) {
    this.updateRecipe = updateRecipe
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const {
        id
      } = httpRequest.params

      const recipeRequest = httpRequest.body

      await this.updateRecipe.updateById(id, recipeRequest)

      return noContent()
    } catch (err) {
      return serverError(err)
    }
  }
}
