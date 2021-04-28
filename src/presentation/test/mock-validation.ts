import { Validation } from '@/presentation/protocols/validation'

export class ValidationStub implements Validation {
  errorMessage: string
  input: object
  fieldName: string
  fieldValue: string

  validate(fieldName: string, input: object): string {
    this.fieldName = fieldName
    this.fieldValue = input[fieldName]
    return this.errorMessage
  }
}
