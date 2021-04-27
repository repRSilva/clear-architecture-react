import React, { useContext } from 'react'
import Context from '@/presentation/contexts/form/form-context'

type Props = {
  text: string
}
const SubmitButton: React.FC<Props> = ({ text }: Props) => {
  const { state } = useContext(Context)
  return (
    <button data-testid="submit" disabled={!!state.emailError || !!state.passwordError} type="submit">{text}</button>
  )
}

export default SubmitButton
