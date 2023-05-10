import { RecipeModel } from '../../../domain/model/recipe'

export interface LoadRecipeByIdRepository {
  loadById: (id: string) => Promise<RecipeModel>
}
