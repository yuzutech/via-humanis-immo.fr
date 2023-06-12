import clsx from 'clsx'

import styles from './rating.module.css'


/**
 * @param {{[key: string]: string}} values
 * @param {string} value
 * @returns {JSX.Element}
 * @constructor
 */
export default function Rating({ values, value }) {
  return (
    <div className={styles.container}>
      {Object.entries(values).map(([key, color])=> <div className={clsx(styles.item, key === value && styles.active)} key={key} style={{backgroundColor: color}} data-rating={key}></div>)}
    </div>
  )
}
