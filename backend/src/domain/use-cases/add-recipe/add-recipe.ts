export type AddRecipeParams = {
  name: string
  weight: number
  assemblyIngradients: string
  operatingInstructions: string
  entryTemperature: string
}

export interface AddRecipe {
  add: (addRecipeParams: AddRecipeParams) => Promise<void>
}
