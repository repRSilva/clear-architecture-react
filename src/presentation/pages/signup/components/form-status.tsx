import React from 'react'
import { FormStatusBase } from '@/presentation/components'
import { SignUpState } from '@/presentation/pages/signup/components'
import { useRecoilValue } from 'recoil'

const FormStatus: React.FC = () => {
  const state = useRecoilValue(SignUpState)

  return (
    <FormStatusBase state={state} />
  )
}

export default FormStatus
