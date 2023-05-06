import { DeleteRecipeById } from 'domain/use-cases/delete-recipe/delete-recipe'
import { noContent, serverError } from '../../../helpers/http/http-helper'
import { Controller } from '../../../protocols/controller'
import { HttpRequest, HttpResponse } from '../../../protocols/http'

export class DeleteRecipeByIdController implements Controller {
  private readonly deleteRecipe: DeleteRecipeById

  constructor (deleteRecipe: DeleteRecipeById) {
    this.deleteRecipe = deleteRecipe
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const {
        id
      } = httpRequest.params

      await this.deleteRecipe.delete(id)

      return noContent()
    } catch (err) {
      return serverError(err)
    }
  }
}
