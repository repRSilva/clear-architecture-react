import React, { useState } from 'react'
import Context from '@/presentation/contexts/form/form-context'
import Styles from './signup-styles.scss'
import { Header, Input, FormStatus, Footer } from '@/presentation/components'

const SignUp: React.FC = () => {
  const [state] = useState({
    isLoading: false,
    nameError: 'Campo obrigatório',
    emailError: 'Campo obrigatório',
    passwordError: 'Campo obrigatório',
    passwordConfirmationError: 'Campo obrigatório',
    mainError: ''
  })

  return (
    <div className={Styles.signup}>
      <Header />
      <Context.Provider value={{ state }}>
        <form className={Styles.form}>
          <h2>Criar Conta</h2>
          <Input type="text" name="name" placeholder="Digite seu nome" />
          <Input type="email" name="email" placeholder="Digite seu e-mail" />
          <Input type="password" name="password" placeholder="Digite sua senha" />
          <Input type="password" name="passwordConfirmation" placeholder="Repita sua senha" />
          <button data-testid="submit" disabled className={Styles.submit} type="submit">Criar Conta</button>
          <span className={Styles.link}>Voltar Para Login</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div >
  )
}

export default SignUp
