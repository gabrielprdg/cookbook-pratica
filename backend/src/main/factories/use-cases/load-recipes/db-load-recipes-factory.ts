import { DbLoadRecipes } from '../../../../data/use-cases/load-recipes/db-load-recipes'
import { TypeOrmRecipeRepository } from '../../../../infra/db/typeorm/repositories/typeorm-car-repository'

export const makeDbLoadRecipes = (): DbLoadRecipes => {
  const typeOrmRecipeRepository = new TypeOrmRecipeRepository()
  return new DbLoadRecipes(typeOrmRecipeRepository)
}
