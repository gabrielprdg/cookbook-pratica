import { DbAddRecipe } from '../../../../data/use-cases/add-recipe/db-add-recipe'
import { TypeOrmRecipeRepository } from '../../../../infra/db/typeorm/repositories/typeorm-car-repository'

export const makeDbAddRecipe = (): DbAddRecipe => {
  const typeOrmRecipeRepository = new TypeOrmRecipeRepository()
  return new DbAddRecipe(typeOrmRecipeRepository)
}
