import clsx from 'clsx'

import styles from './textarea.module.css'

export default function TextArea({placeholder, className, bindings}) {
  return (<textarea
    {...bindings}
    className={clsx(styles.textarea, className)}
    placeholder={placeholder}
  />)
}
