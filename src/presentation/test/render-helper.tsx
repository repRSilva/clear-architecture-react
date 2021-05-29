import React from 'react'
import { Router } from 'react-router-dom'
import { MemoryHistory } from 'history'
import { RecoilRoot } from 'recoil'
import { render } from '@testing-library/react'

import { mockAccountModel } from '@/domain/test'
import { AccountModel } from '@/domain/models'
import { CurrentAccountState } from '@/presentation/components'

type Params = {
  Page: React.FC
  history: MemoryHistory
  account?: AccountModel
}

type Result = {
  setCurrentAccountMock: (account: AccountModel) => void
}

export const renderWithHistory = ({ Page, history, account = mockAccountModel() }: Params): Result => {
  const setCurrentAccountMock = jest.fn()
  const mockedState = {
    setCurrentAccount: setCurrentAccountMock,
    getCurrentAccount: () => account
  }

  render(
    <RecoilRoot initializeState={({ set }) => set(CurrentAccountState, mockedState)}>
      <Router history={history}>
        <Page />
      </Router>
    </RecoilRoot>
  )

  return {
    setCurrentAccountMock
  }
}
