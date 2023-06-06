import clsx from 'clsx'
import styles from './input.module.css'
import {useState} from 'react'


export default function Input({label, type, pattern}) {
  const [isActive, setActive] = useState(false)
  const [value, setValue] = useState('')

  return (<div className={clsx(styles.input, (isActive || value !== '') ? styles.active : styles.inactive)}>
      <label className={styles.label}>{label}</label>
      <input
        type={type}
        pattern={pattern}
        value={value}
        onBlur={() => setActive(false)}
        onFocus={() => setActive(true)}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  )
}
