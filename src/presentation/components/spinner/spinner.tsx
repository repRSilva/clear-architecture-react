import React from 'react'
import Styles from './spinner-styles.scss'

type Props = React.HtmlHTMLAttributes<HTMLElement> & {
  isnegative?: boolean
}

const Spinner: React.FC<Props> = (props: Props) => {
  const negativeClass = props.isnegative ? Styles.negative : ''
  return (
    <div {...props} data-testid="spinner" className={[Styles.spinner, negativeClass].join(' ')}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Spinner
