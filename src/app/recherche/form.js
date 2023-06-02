'use client'

import {useEffect, useRef, useState} from 'react'
import clsx from 'clsx'

import styles from './form.module.css'

export default function SearchForm() {
  const [typeValue, setTypeValue] = useState('location')
  const [rooms, setRooms] = useState('')
  const [type, setType] = useState('')
  const [localisation, setLocalisation] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [minArea, setMinArea] = useState('')

  const [maxPriceEditing, setMaxPriceEditing] = useState(false)
  const [minAreaEditing, setMinAreaEditing] = useState(false)

  return (<div className={styles.form}>
      <h4 className={styles.title}>Nos biens disponibles :</h4>
      <div className={styles.toggleButton}
           onClick={() => setTypeValue(typeValue === 'location' ? 'achat' : 'location')}>
        <div className={styles.toggleOptions}>
        <span
          className={clsx(styles.toggleOption, typeValue === 'location' && styles.toggleOptionActive)}>Location</span>
          <span className={clsx(styles.toggleOption, typeValue === 'achat' && styles.toggleOptionActive)}>Achat</span>
        </div>
      </div>
      <div className={clsx(styles.select, localisation !== '' ? styles.active : styles.inactive)}>
        <label className={styles.label}>Localisation</label>
        <select
          value={localisation}
          onChange={(event) => setLocalisation(event.target.value)}
        >
          <option value=""></option>
          <option value="lyon">Lyon</option>
        </select>
      </div>
      <hr className={styles.separator}/>
      <div className={clsx(styles.select, type !== '' ? styles.active : styles.inactive)}>
        <label className={styles.label}>Type</label>
        <select
          value={type}
          onChange={(event) => setType(event.target.value)}
        >
          <option value=""></option>
          <option value="appartement">Appartement</option>
          <option value="maison">Maison</option>
        </select>
      </div>
      <div className={clsx(styles.select, rooms !== '' ? styles.active : styles.inactive)}>
        <label className={styles.label}>Pièce(s)</label>
        <select
          value={rooms}
          onChange={(event) => setRooms(event.target.value)}
        >
          <option value=""></option>
          <option value="t1">T1</option>
          <option value="t2">T2</option>
          <option value="t3">T3</option>
          <option value="t4">T4</option>
          <option value="t5">T5+</option>
        </select>
      </div>
      <div className={clsx(styles.input, (maxPrice !== '' || maxPriceEditing) ? styles.active : styles.inactive)}>
        <label className={styles.label}>Prix maximum</label>
        <input
          type="number"
          pattern="[0-9]*"
          value={maxPrice}
          onBlur={() => setMaxPriceEditing(false)}
          onFocus={() => setMaxPriceEditing(true)}
          onChange={(event) => setMaxPrice(event.target.value)}
        />
      </div>
      <div className={clsx(styles.input, (minArea !== '' || minAreaEditing) ? styles.active : styles.inactive)}>
        <label className={styles.label}>Surface minimum</label>
        <input
          type="number"
          pattern="[0-9]*"
          value={minArea}
          onBlur={() => setMinAreaEditing(false)}
          onFocus={() => setMinAreaEditing(true)}
          onChange={(event) => setMinArea(event.target.value)}
        />
      </div>
      <a className={styles.searchButton}>
        <svg width="17" height="17" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
            fill="currentColor"/>
        </svg>
        Rechercher
      </a>
    </div>
  )
}
