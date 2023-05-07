import { AddRecipeRepository } from '../../protocols/recipe/add-recipe-repository'
import { AddRecipe, AddRecipeParams } from '../../../domain/use-cases/add-recipe/add-recipe'
import { AddImageRepository } from 'data/protocols/image/add-image-repository'

export class DbAddRecipe implements AddRecipe {
  private readonly addRecipeRepository: AddRecipeRepository
  private readonly addImageRepository: AddImageRepository

  constructor (addRecipeRepository: AddRecipeRepository, addImageRepository: AddImageRepository) {
    this.addRecipeRepository = addRecipeRepository
    this.addImageRepository = addImageRepository
  }

  async add (recipeData: AddRecipeParams): Promise<void> {
    const {
      name,
      weight,
      assemblyIngradients,
      operatingInstructions,
      image,
      entryTemperature
     } = recipeData
    // add recipe image
    await this.addImageRepository.add(image)

    await this.addRecipeRepository.add({
      name,
      weight,
      assemblyIngradients,
      operatingInstructions,
      entryTemperature
    })
  }
}
