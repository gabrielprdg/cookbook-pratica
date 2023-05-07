"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbDeleteRecipeById = void 0;
class DbDeleteRecipeById {
    constructor(deleteRecipeByIdRepository) {
        this.deleteRecipeByIdRepository = deleteRecipeByIdRepository;
    }
    async delete(id) {
        await this.deleteRecipeByIdRepository.deleteById(id);
    }
}
exports.DbDeleteRecipeById = DbDeleteRecipeById;
//# sourceMappingURL=db-delete-recipe-by-id.js.map