import { DeleteRecipeByIdRepository } from '../../../data/protocols/delete-recipe-by-id'
import { DeleteRecipeById } from '../../../domain/use-cases/delete-recipe/delete-recipe'

export class DbDeleteRecipeById implements DeleteRecipeById {
  private readonly deleteRecipeByIdRepository: DeleteRecipeByIdRepository

  constructor (deleteRecipeByIdRepository: DeleteRecipeByIdRepository) {
    this.deleteRecipeByIdRepository = deleteRecipeByIdRepository
  }

  async delete (id: string): Promise<void> {
    await this.deleteRecipeByIdRepository.deleteById(id)
  }
}
