export interface DeleteRecipeById {
  delete: (id: string) => Promise<void>
}
