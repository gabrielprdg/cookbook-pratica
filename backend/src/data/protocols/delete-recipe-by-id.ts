export interface DeleteRecipeByIdRepository {
  deleteById: (id: string) => Promise<void>
}
