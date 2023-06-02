'use client'

import {useEffect, useRef, useState} from 'react'
import clsx from 'clsx'

import styles from './form.module.css'

export default function SearchForm() {
  const [typeValue, setTypeValue] = useState('location')
  const [rooms, setRooms] = useState('')
  const [isRoomsDefined, setRoomsDefined] = useState(false)
  const roomsRef = useRef()

  useEffect(() => {
    const current = roomsRef.current
    setRoomsDefined(current && current.value !== '')
  }, [roomsRef, rooms])

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
      <div className={clsx(styles.select, styles.localisation)}>
        <select defaultValue="">
          <option value="" disabled hidden>Localisation</option>
          <option value="lyon">Lyon</option>
        </select>
      </div>
      <hr className={styles.separator}/>
      <div className={clsx(styles.select, styles.type)}>
        <select defaultValue="">
          <option value="" disabled hidden>Type</option>
          <option value="appartement">Appartement</option>
          <option value="maison">Maison</option>
        </select>
      </div>
      <div className={clsx(styles.select, styles.rooms, isRoomsDefined ? styles.active : styles.inactive)}>
        <label className={styles.label}>Pièce(s)</label>
        <select
          value={rooms}
          onChange={(event) => {
            const value = event.target.value
            if (value === 'none') {
              setRooms('')
            } else {
              setRooms(value)
            }
          }}
          ref={roomsRef}
        >
          <option value="" disabled hidden></option>
          <option value="none"></option>
          <option value="t1">T1</option>
          <option value="t2">T2</option>
          <option value="t3">T3</option>
          <option value="t4">T4</option>
          <option value="t5">T5+</option>
        </select>
      </div>
      <div>
        <input type="text" placeholder="Prix maximum"/>
      </div>
      <div>
        <input type="text" placeholder="Surface minimum"/>
      </div>
      <a className={styles.searchButton}>
        <svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
            fill="currentColor"/>
        </svg>
        Rechercher
      </a>
    </div>
  )
}
