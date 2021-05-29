import { AccountModel } from '@/domain/models'
import { atom } from 'recoil'

export const CurrentAccountState = atom({
  key: 'currentAccountState',
  default: {
    getCurrentAccount: null as () => AccountModel,
    setCurrentAccount: null as (account: AccountModel) => void
  }
})
