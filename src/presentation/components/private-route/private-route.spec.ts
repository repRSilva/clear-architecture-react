import { createMemoryHistory, MemoryHistory } from 'history'

import { mockAccountModel } from '@/domain/test'
import { PrivateRoute } from '@/presentation/components'
import { renderWithHistory } from '@/presentation/test'

type SutTypes = {
  history: MemoryHistory
}

const makeSut = (account = mockAccountModel()): SutTypes => {
  const history = createMemoryHistory({ initialEntries: ['/'] })
  renderWithHistory({ Page: PrivateRoute, history, account })
  return { history }
}

describe('PrivateRoute', () => {
  test('Should redirect to /login if token is empty', async () => {
    const { history } = makeSut(null)
    expect(history.location.pathname).toBe('/login')
  })

  test('Should render current component if token is not empty', async () => {
    const { history } = makeSut()
    expect(history.location.pathname).toBe('/')
  })
})
