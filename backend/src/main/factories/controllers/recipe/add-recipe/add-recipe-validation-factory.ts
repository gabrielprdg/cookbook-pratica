import { Validation } from '../../../../../presentation/protocols'
import { RequiredFieldsValidation, ValidationComposite } from '../../../../../validation/validators'

export const makeAddRecipeValidation = (): ValidationComposite => {
  const validations: Validation[] = []

  for (const field of ['name', 'weight', 'assemblyIngradients', 'operatingInstructions', 'entryTemperature']) {
    validations.push(new RequiredFieldsValidation(field))
  }
  return new ValidationComposite(validations)
}
