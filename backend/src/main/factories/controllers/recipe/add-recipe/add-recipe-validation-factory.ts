import { Validation } from '../../../../../presentation/protocols'
import { RequiredFieldsValidation, ValidationComposite } from '../../../../../validation/validators'

export const makeAddCarValidation = (): ValidationComposite => {
  const validations: Validation[] = []

  for (const field of ['name', 'weight', 'assemblyIngradients', 'operatingInstruction', 'entryTemperature']) {
    validations.push(new RequiredFieldsValidation(field))
  }
  return new ValidationComposite(validations)
}
