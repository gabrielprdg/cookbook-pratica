import { TypeOrmImageRepository } from '../../../../infra/db/typeorm/repositories/typeorm-image-repository'
import { DbAddRecipe } from '../../../../data/use-cases/add-recipe/db-add-recipe'
import { TypeOrmRecipeRepository } from '../../../../infra/db/typeorm/repositories/typeorm-recipe-repository'

export const makeDbAddRecipe = (): DbAddRecipe => {
  const typeOrmRecipeRepository = new TypeOrmRecipeRepository()
  const typeOrmImageRepository = new TypeOrmImageRepository()
  return new DbAddRecipe(typeOrmRecipeRepository, typeOrmImageRepository)
}
