import React from 'react'
import { FormStatusBase } from '@/presentation/components'
import { LoginState } from '@/presentation/pages/login/components'
import { useRecoilValue } from 'recoil'

const FormStatus: React.FC = () => {
  const state = useRecoilValue(LoginState)

  return (
    <FormStatusBase state={state} />
  )
}

export default FormStatus
