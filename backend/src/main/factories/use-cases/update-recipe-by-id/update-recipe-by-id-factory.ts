import { DbUpdateRecipeById } from '../../../../data/use-cases/update-recipe-by-id/db-update-recipe-by-id'
import { TypeOrmRecipeRepository } from '../../../../infra/db/typeorm/repositories/typeorm-recipe-repository'

export const makeDbUpdateRecipeById = (): DbUpdateRecipeById => {
  const typeOrmRecipeRepository = new TypeOrmRecipeRepository()
  return new DbUpdateRecipeById(typeOrmRecipeRepository)
}
