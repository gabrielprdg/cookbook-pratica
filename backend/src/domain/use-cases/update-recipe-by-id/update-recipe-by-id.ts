export type RecipeRequest = {
  name?: string
  weight?: number
  assemblyIngradients?: string
  operatingInstructions?: string
  entryTemperature?: string
}

export interface UpdateRecipeById {
  updateById: (id: string, recipeData: RecipeRequest) => Promise<void>
}
