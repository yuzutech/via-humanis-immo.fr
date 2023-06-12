import clsx from 'clsx'
import styles from './input.module.css'
import {useState} from 'react'


export default function Input({placeholder, label, type, pattern, className, state, bindings}) {
  const [isActive, setActive] = useState(false)

  return (<div className={clsx(styles.input, (isActive || state !== '') ? styles.active : styles.inactive, label && label !== '' && styles.withLabel, className)}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        {...bindings}
        placeholder={placeholder}
        type={type}
        pattern={pattern}
        onBlur={() => setActive(false)}
        onFocus={() => setActive(true)}
      />
    </div>
  )
}
