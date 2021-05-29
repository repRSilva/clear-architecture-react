import React from 'react'
import { SubmitButtonBase } from '@/presentation/components'
import { SignUpState } from '@/presentation/pages/signup/components'
import { useRecoilState } from 'recoil'

type Props = {
  text: string
}

const SubmitButton: React.FC<Props> = ({ text }: Props) => {
  const [state] = useRecoilState(SignUpState)

  return (
    <SubmitButtonBase text={text} state={state} />
  )
}

export default SubmitButton
