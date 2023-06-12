import clsx from 'clsx'

import styles from './button.module.css'

export default function Button({text, className, handleClick}) {
  return (<a onClick={handleClick} className={clsx(styles.button, className)}>{text}</a>)
}
