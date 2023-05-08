import { AddRecipe } from '../../../../domain/use-cases/add-recipe/add-recipe'
import { noContent, badRequest, serverError } from '../../../helpers/http/http-helper'
import { Controller } from '../../../protocols/controller'
import { HttpRequest, HttpResponse } from '../../../protocols/http'
import { Validation } from '../../../protocols/validation'

export class AddRecipeController implements Controller {
  private readonly addRecipe: AddRecipe
  private readonly validation: Validation

  constructor (addRecipe: AddRecipe, validation: Validation) {
    this.addRecipe = addRecipe
    this.validation = validation
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = await this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }

      const {
        name,
        weight,
        assemblyIngradients,
        operatingInstructions,
        entryTemperature
      } = httpRequest.body

      const file = httpRequest.file

      const image = {
        name: file.originalname,
        size: file.size,
        key: file.key,
        url: file.location
      }

      await this.addRecipe.add({
        name,
        weight,
        assemblyIngradients,
        operatingInstructions,
        image,
        entryTemperature
      })

      return noContent()
    } catch (err) {
      return serverError(err)
    }
  }
}
