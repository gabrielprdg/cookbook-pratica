import { RecipeRequest } from '../../../domain/use-cases/update-recipe-by-id/update-recipe-by-id'

export interface UpdateRecipeByIdRepository {
  updateById: (id: string, recipeData: RecipeRequest) => Promise<void>
}
