import React from 'react'

type Props = {
  text: string
  state: any
}
const SubmitButton: React.FC<Props> = ({ text, state }: Props) => {
  return (
    <button data-testid="submit" disabled={!!state.emailError || !!state.passwordError} type="submit">{text}</button>
  )
}

export default SubmitButton
