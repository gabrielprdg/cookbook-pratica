import { RecipeModel } from '../../../domain/model/recipe'

export interface LoadRecipes {
  loadAll: () => Promise<RecipeModel[]>
}
