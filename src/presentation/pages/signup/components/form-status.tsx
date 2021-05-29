import React from 'react'
import { FormStatusBase } from '@/presentation/components'
import { SignUpState } from '@/presentation/pages/signup/components'
import { useRecoilState } from 'recoil'

const FormStatus: React.FC = () => {
  const [state] = useRecoilState(SignUpState)

  return (
    <FormStatusBase state={state} />
  )
}

export default FormStatus
