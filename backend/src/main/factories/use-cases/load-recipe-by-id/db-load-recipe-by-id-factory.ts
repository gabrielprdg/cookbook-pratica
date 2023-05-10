import { DbLoadRecipeById } from '../../../../data/use-cases/load-recipe-by-id/db-load-recipe-by-id'
import { TypeOrmRecipeRepository } from '../../../../infra/db/typeorm/repositories/typeorm-recipe-repository'

export const makeDbLoadRecipeById = (): DbLoadRecipeById => {
  const typeOrmRecipeRepository = new TypeOrmRecipeRepository()
  return new DbLoadRecipeById(typeOrmRecipeRepository)
}
