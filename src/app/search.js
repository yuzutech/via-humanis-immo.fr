'use client'

import styles from './search.module.css'
import {useState} from 'react'
import clsx from 'clsx'


export default function Search() {
  const [typeValue, setTypeValue] = useState('location')
  return (<section className={styles.container}>
    <div className={styles.content}>
      <h2 className={styles.title}>Trouver un bien</h2>
      <div className={styles.form}>
        <div className={styles.toggleButton}
             onClick={() => setTypeValue(typeValue === 'location' ? 'achat' : 'location')}>
          <div className={styles.toggleOptions}>
            <span className={clsx(typeValue === 'location' && styles.toggleOptionActive)}>Location</span>
            <span className={clsx(typeValue === 'achat' && styles.toggleOptionActive)}>Achat</span>
          </div>
        </div>
        <label></label>
        <div className={styles.select}>
          <select>
            <option value="appartement">Appartement</option>
            <option value="maison">Maison</option>
          </select>
        </div>
        <div className={clsx(styles.select, styles.localisation)}>
          <select required>
            <option value="" disabled selected hidden>Localisation</option>
            <option value="lyon">Lyon</option>
          </select>
        </div>
        <button className={styles.searchButton}>
          <svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="currentColor"/>
          </svg>
        </button>
      </div>
    </div>
  </section>)
}
