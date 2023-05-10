import { LoadRecipeById } from 'domain/use-cases/load-recipe-by-id/load-recipe-by-id'
import { ok, serverError } from '../../../helpers/http/http-helper'
import { Controller } from '../../../protocols/controller'
import { HttpRequest, HttpResponse } from '../../../protocols/http'

export class LoadRecipeByIdController implements Controller {
  private readonly loadRecipeById: LoadRecipeById

  constructor (loadRecipeById: LoadRecipeById) {
    this.loadRecipeById = loadRecipeById
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params
      const recipe = await this.loadRecipeById.loadById(id)

      return ok(recipe)
    } catch (err) {
      return serverError(err)
    }
  }
}
