import React from 'react'
import Styles from './form-status-styles.scss'
import { Spinner } from '@/presentation/components'

type Props = {
  state: any
}
const FormStatus: React.FC<Props> = ({ state }: Props) => {
  const { isLoading, mainError } = state

  return (
    <div className={Styles.errorWrap} data-testid="error-wrap">
      {isLoading && <Spinner />}
      {mainError && <span data-testid="main-error" className={Styles.error}>{mainError}</span>}
    </div>
  )
}

export default FormStatus
