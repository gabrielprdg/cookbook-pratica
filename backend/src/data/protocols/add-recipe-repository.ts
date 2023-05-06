import { AddRecipeParams } from 'domain/use-cases/add-recipe/add-recipe'

export interface AddRecipeRepository {
  add: (recipeData: AddRecipeParams) => Promise<void>
}
