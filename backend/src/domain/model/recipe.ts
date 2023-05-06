import { ImageModel } from './image'

export interface RecipeModel {
  id: string
  name: string
  weight: number
  assemblyIngradients: string
  operatingInstructions: string
  image: ImageModel
  entryTemperature: string
}
