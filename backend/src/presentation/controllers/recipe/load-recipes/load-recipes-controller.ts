import { LoadRecipes } from '../../../../domain/use-cases/load-recipes/load-recipes'
import { ok, serverError } from '../../../helpers/http/http-helper'
import { Controller } from '../../../protocols/controller'
import { HttpRequest, HttpResponse } from '../../../protocols/http'

export class LoadRecipesController implements Controller {
  private readonly loadRecipes: LoadRecipes

  constructor (loadRecipes: LoadRecipes) {
    this.loadRecipes = loadRecipes
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const recipes = await this.loadRecipes.loadAll()

      return ok(recipes)
    } catch (err) {
      return serverError(err)
    }
  }
}
