import { mockGetRequest, GetStorageSpy } from '@/data/test'
import { AuthorizeHttpGetClientDecorator } from '@/main/decorators'

describe('AuthorizeHttpGetClientDecorator', () => {
  type SutTypes = {
    sut: AuthorizeHttpGetClientDecorator
    getStorageSpy: GetStorageSpy
  }
  const makeSut = (): SutTypes => {
    const getStorageSpy = new GetStorageSpy()
    const sut = new AuthorizeHttpGetClientDecorator(getStorageSpy)

    return {
      sut,
      getStorageSpy
    }
  }
  test('Should call GetStorage with correct value ', async () => {
    const { sut, getStorageSpy } = makeSut()
    sut.get(mockGetRequest())
    expect(getStorageSpy.key).toBe('account')
  })
})
