import { createMemoryHistory, MemoryHistory } from 'history'
import { fireEvent, screen } from '@testing-library/react'

import { AccountModel } from '@/domain/models'
import { mockAccountModel } from '@/domain/test'
import { Header } from '@/presentation/components'
import { renderWithHistory } from '@/presentation/test'

type SutTypes = {
  history: MemoryHistory
  setCurrentAccountMock: (account: AccountModel) => void
}
const makeSut = (account = mockAccountModel()): SutTypes => {
  const history = createMemoryHistory({ initialEntries: ['/'] })

  const { setCurrentAccountMock } = renderWithHistory({ Page: Header, history, account })
  return {
    history,
    setCurrentAccountMock
  }
}

describe('Header Component', () => {
  test('Should call setCurrentAccount with null', async () => {
    const { history, setCurrentAccountMock } = makeSut()
    fireEvent.click(screen.getByTestId('logout'))
    expect(setCurrentAccountMock).toHaveBeenCalledWith(undefined)
    expect(history.location.pathname).toBe('/login')
  })

  test('Should render username correctly', async () => {
    const account = mockAccountModel()
    makeSut(account)
    expect(screen.getByTestId('username')).toHaveTextContent(account.name)
  })
})
