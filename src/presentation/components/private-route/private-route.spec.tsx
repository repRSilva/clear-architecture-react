import React from 'react'
import { render } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory, MemoryHistory } from 'history'
import PrivateRoute from './private-route'
import { mockAccountModel } from '@/domain/test'
import { RecoilRoot } from 'recoil'
import { CurrentAccountState } from '../atoms/atoms'

type SutTypes = {
  history: MemoryHistory
}

const makeSut = (account = mockAccountModel()): SutTypes => {
  const history = createMemoryHistory({ initialEntries: ['/'] })
  const mockedState = { setCurrentAccount: jest.fn(), getCurrentAccount: () => account }
  render(
    <RecoilRoot initializeState={({ set }) => set(CurrentAccountState, mockedState)}>
      <Router history={history}>
        <PrivateRoute />
      </Router>
    </RecoilRoot>
  )

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
