import clsx from 'clsx'

import styles from './select.module.css'

/**
 * @param {{[key: string]: string}} values
 * @param {string} state
 * @param bindings
 * @param className
 * @param {string} label
 * @returns {JSX.Element}
 * @constructor
 */
export default function Select({values, state, bindings, className, label}) {
  return (<div className={clsx(
    styles.select,
    state !== '' ? styles.active : styles.inactive,
    label && label !== '' && styles.withLabel,
    className)}>
    <select {...bindings}>
      {label && <label className={styles.label}>{label}</label>}
      {Object.entries(values).map(([key, value]) => (<option key={key} value={key}>{value}</option>))}
    </select>
  </div>)
}
