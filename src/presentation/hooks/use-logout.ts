import { useHistory } from 'react-router-dom'
import { CurrentAccountState } from '@/presentation/components'
import { useRecoilValue } from 'recoil'

type ResultType = () => void

export const useLogout = (): ResultType => {
  const history = useHistory()
  const { setCurrentAccount } = useRecoilValue(CurrentAccountState)

  return (): void => {
    setCurrentAccount(undefined)
    history.replace('/login')
  }
}
