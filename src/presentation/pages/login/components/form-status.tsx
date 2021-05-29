import React from 'react'
import { FormStatusBase } from '@/presentation/components'
import { LoginState } from '@/presentation/pages/login/components'
import { useRecoilState } from 'recoil'

const FormStatus: React.FC = () => {
  const [state] = useRecoilState(LoginState)

  return (
    <FormStatusBase state={state} />
  )
}

export default FormStatus
