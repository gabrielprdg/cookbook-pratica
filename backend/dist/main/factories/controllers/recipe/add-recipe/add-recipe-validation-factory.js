"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAddRecipeValidation = void 0;
const validators_1 = require("../../../../../validation/validators");
const makeAddRecipeValidation = () => {
    const validations = [];
    for (const field of ['name', 'weight', 'assemblyIngradients', 'operatingInstructions', 'entryTemperature']) {
        validations.push(new validators_1.RequiredFieldsValidation(field));
    }
    return new validators_1.ValidationComposite(validations);
};
exports.makeAddRecipeValidation = makeAddRecipeValidation;
//# sourceMappingURL=add-recipe-validation-factory.js.map