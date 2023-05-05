import { RecipeModel } from '../../../../domain/model/recipe'
import { TypeOrmRecipe } from '../entities/typeorm-recipe'

export class Mapper {
  public static toDomainEntity (typeOrmRecipe: TypeOrmRecipe): RecipeModel {
    const domain: RecipeModel = {
      id: typeOrmRecipe.id,
      name: typeOrmRecipe.name,
      weight: typeOrmRecipe.weight,
      assemblyIngradients: typeOrmRecipe.assemblyIngradients,
      operatingInstructions: typeOrmRecipe.operatingInstructions,
      entryTemperature: typeOrmRecipe.entryTemperature
    }

    return domain
}

  public static toDomainEntities (typeOrmRecipe: TypeOrmRecipe[]): RecipeModel[] {
      return typeOrmRecipe.map(typeOrmRecipe => this.toDomainEntity(typeOrmRecipe))
  }
}
