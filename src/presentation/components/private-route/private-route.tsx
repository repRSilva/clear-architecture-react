import React from 'react'
import { RouteProps, Route, Redirect } from 'react-router-dom'
import { CurrentAccountState } from '@/presentation/components'
import { useRecoilValue } from 'recoil'

const PrivateRoute: React.FC<RouteProps> = (props: RouteProps) => {
  const { getCurrentAccount } = useRecoilValue(CurrentAccountState)

  return getCurrentAccount()?.accessToken
    ? <Route {...props} />
    : <Route {...props} component={() => <Redirect to="/login" />
    } />
}

export default PrivateRoute
