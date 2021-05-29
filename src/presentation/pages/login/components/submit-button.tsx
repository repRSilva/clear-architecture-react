import React from 'react'
import { SubmitButtonBase } from '@/presentation/components'
import { LoginState } from '@/presentation/pages/login/components'
import { useRecoilState } from 'recoil'

type Props = {
  text: string
}

const SubmitButton: React.FC<Props> = ({ text }: Props) => {
  const [state] = useRecoilState(LoginState)

  return (
    <SubmitButtonBase text={text} state={state} />
  )
}

export default SubmitButton
