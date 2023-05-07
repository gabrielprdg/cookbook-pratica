import { AddRecipeParams } from '../../../domain/use-cases/add-recipe/add-recipe'

// removing the image property, as it will not be used in this context.
export type AddRecipeRepositoryData = Omit<AddRecipeParams, 'image'>

export interface AddRecipeRepository {
  add: (recipeData: AddRecipeRepositoryData) => Promise<void>
}
