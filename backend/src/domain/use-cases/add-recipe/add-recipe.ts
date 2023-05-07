import { ImageModel } from '../../../domain/model/image'

export type ImageData = Omit<ImageModel, 'id'>

export type AddRecipeParams = {
  name: string
  weight: number
  assemblyIngradients: string
  operatingInstructions: string
  image: ImageData
  entryTemperature: string
}

export interface AddRecipe {
  add: (addRecipeParams: AddRecipeParams) => Promise<void>
}
