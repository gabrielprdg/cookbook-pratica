import { ImageModel } from 'domain/model/image'

// removing the image property, as it will not be used in this context.
export type AddRecipeRepositoryData = {
  name: string
  weight: number
  assemblyIngradients: string
  operatingInstructions: string
  image: ImageModel
  entryTemperature: string
}

export interface AddRecipeRepository {
  add: (recipeData: AddRecipeRepositoryData) => Promise<void>
}
