import { RequiredFieldValidation } from '@/validation/validators'
import { EmailValidation } from '../email/email-validation'
import { MinLengthValidation } from '../min-length/min-length-validation'
import { ValidationBuilder as sut } from './validation-builder'

describe('ValidationBuilder', () => {
  test('Should return RequiredFieldValidation', async () => {
    const validations = sut.field('any_field').required().build()
    expect(validations).toEqual([new RequiredFieldValidation('any_field')])
  })

  test('Should return EmailValidation', async () => {
    const validations = sut.field('any_field').email().build()
    expect(validations).toEqual([new EmailValidation('any_field')])
  })

  test('Should return MinLengthValidation', async () => {
    const validations = sut.field('any_field').min(5).build()
    expect(validations).toEqual([new MinLengthValidation('any_field', 5)])
  })
})
