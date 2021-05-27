import { HttpRequest, HttpResponse, HttpStatusCode, HttpClient } from '@/data/protocols/http'
import faker from 'faker'

export const mockHttpRequest = (): HttpRequest => ({
  url: faker.internet.url(),
  method: faker.random.arrayElement(['get', 'post', 'put', 'delete']),
  body: faker.random.objectElement(),
  headers: faker.random.objectElement()
})

export class HttpClientSpy<ResponseType = any> implements HttpClient<ResponseType> {
  url?: string
  method?: string
  body?: any
  headers?: any
  response: HttpResponse<ResponseType> = {
    statusCode: HttpStatusCode.ok
  }

  async request(data: HttpRequest): Promise<HttpResponse<ResponseType>> {
    this.url = data.url
    this.method = data.method
    this.headers = data.headers
    this.body = data.body

    return this.response
  }
}
