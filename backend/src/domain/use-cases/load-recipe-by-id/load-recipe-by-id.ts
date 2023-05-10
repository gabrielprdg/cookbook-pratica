import { RecipeModel } from '../../../domain/model/recipe'

export interface LoadRecipeById {
  loadById: (id: string) => Promise<RecipeModel>
}
