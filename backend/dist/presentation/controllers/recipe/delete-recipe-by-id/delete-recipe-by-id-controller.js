"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteRecipeByIdController = void 0;
const http_helper_1 = require("../../../helpers/http/http-helper");
class DeleteRecipeByIdController {
    constructor(deleteRecipe) {
        this.deleteRecipe = deleteRecipe;
    }
    async handle(httpRequest) {
        try {
            const { id } = httpRequest.params;
            await this.deleteRecipe.delete(id);
            return (0, http_helper_1.noContent)();
        }
        catch (err) {
            return (0, http_helper_1.serverError)(err);
        }
    }
}
exports.DeleteRecipeByIdController = DeleteRecipeByIdController;
//# sourceMappingURL=delete-recipe-by-id-controller.js.map