import { DbDeleteRecipeById } from '../../../../data/use-cases/delete-recipe-by-id/db-delete-recipe-by-id'
import { TypeOrmRecipeRepository } from '../../../../infra/db/typeorm/repositories/typeorm-recipe-repository'

export const makeDbDeleteRecipeById = (): DbDeleteRecipeById => {
  const typeOrmRecipeRepository = new TypeOrmRecipeRepository()
  return new DbDeleteRecipeById(typeOrmRecipeRepository)
}
