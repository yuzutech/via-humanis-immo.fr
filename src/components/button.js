import clsx from 'clsx'

import styles from './button.module.css'

export default function Button({text, className, disabled, handleClick}) {
  return (<button onClick={handleClick} className={clsx(styles.button, className)} disabled={disabled}>{text}</button>)
}
