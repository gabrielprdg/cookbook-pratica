"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddRecipeController = void 0;
const http_helper_1 = require("../../../helpers/http/http-helper");
class AddRecipeController {
    constructor(addRecipe, validation) {
        this.addRecipe = addRecipe;
        this.validation = validation;
    }
    async handle(httpRequest) {
        try {
            const error = await this.validation.validate(httpRequest.body);
            if (error) {
                return (0, http_helper_1.badRequest)(error);
            }
            const { name, weight, assemblyIngradients, operatingInstructions, entryTemperature } = httpRequest.body;
            await this.addRecipe.add({
                name,
                weight,
                assemblyIngradients,
                operatingInstructions,
                entryTemperature
            });
            return (0, http_helper_1.noContent)();
        }
        catch (err) {
            return (0, http_helper_1.serverError)(err);
        }
    }
}
exports.AddRecipeController = AddRecipeController;
//# sourceMappingURL=add-recipe-controller.js.map