import { RecipeModel } from '../../../domain/model/recipe'

export interface LoadRecipesRepository {
  loadAll: () => Promise<RecipeModel[]>
}
