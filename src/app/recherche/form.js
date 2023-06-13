'use client'

import {useCallback, useEffect, useState} from 'react'
import clsx from 'clsx'

import styles from './form.module.css'
import {useSearchParams} from 'next/navigation'
import {getCategories, getCities} from '@/app/data.js'

export default function SearchForm({onSearch}) {
  const searchParams = useSearchParams()
  const [categories, setCategories] = useState([])
  const [cities, setCities] = useState([])
  const [searchContext, setSearchContext] = useState({
    offer: searchParams.get('offer') || 'rental',
    rooms: searchParams.get('rooms') || '',
    category: searchParams.get('category') || '',
    location: searchParams.get('location') || '',
    maxPrice: searchParams.get('maxPrice') || '',
    minArea: searchParams.get('minArea') || '',
  })
  const [maxPriceEditing, setMaxPriceEditing] = useState(false)
  const [minAreaEditing, setMinAreaEditing] = useState(false)

  useEffect(() => {
    (async () => {
      setCategories(await getCategories())
      setCities(await getCities())
    })()
  }, [setCategories, setCities])

  const handleSearch = useCallback(() => {
    onSearch(searchContext)
  }, [onSearch, searchContext])

  return (<div className={styles.form}>
      <h4 className={styles.title}>Nos biens disponibles :</h4>
      <div className={styles.toggleButton} onClick={() => setSearchContext({ ...searchContext, offer: searchContext.offer === 'rental' ? 'sale' : 'rental' })}>
        <div className={styles.toggleOptions}>
        <span
          className={clsx(styles.toggleOption, searchContext.offer === 'rental' && styles.toggleOptionActive)}>Location</span>
          <span className={clsx(styles.toggleOption, searchContext.offer === 'sale' && styles.toggleOptionActive)}>Achat</span>
        </div>
      </div>
      <div className={clsx(styles.select, searchContext.location !== '' ? styles.active : styles.inactive)}>
        <label className={styles.label}>Localisation</label>
        <select
          value={searchContext.location}
          onChange={(event) => setSearchContext({...searchContext, location: event.target.value})}
        >
          <option value=""></option>
          {cities.map((city) => (<option className={styles.city} key={city} value={city}>{city}</option>))}
        </select>
      </div>
      <hr className={styles.separator}/>
      <div className={clsx(styles.select, searchContext.category !== '' ? styles.active : styles.inactive)}>
        <label className={styles.label}>Type</label>
        <select
          value={searchContext.category}
          onChange={(event) => setSearchContext({...searchContext, category: event.target.value})}
        >
          <option value=""></option>
          {categories.map((category) => (<option key={category} value={category}>{category}</option>))}
        </select>
      </div>
      <div className={clsx(styles.select, searchContext.rooms !== '' ? styles.active : styles.inactive)}>
        <label className={styles.label}>Pièce(s)</label>
        <select
          value={searchContext.rooms}
          onChange={(event) => setSearchContext({...searchContext, rooms: event.target.value})}
        >
          <option value=""></option>
          <option value="1">T1</option>
          <option value="2">T2</option>
          <option value="3">T3</option>
          <option value="4">T4</option>
          <option value="5">T5+</option>
        </select>
      </div>
      <div className={clsx(styles.input, (searchContext.maxPrice !== '' || maxPriceEditing) ? styles.active : styles.inactive)}>
        <label className={styles.label}>Prix maximum</label>
        <input
          type="number"
          pattern="[0-9]*"
          value={searchContext.maxPrice}
          onBlur={() => setMaxPriceEditing(false)}
          onFocus={() => setMaxPriceEditing(true)}
          onChange={(event) => setSearchContext({...searchContext, maxPrice: event.target.value})}
        />
      </div>
      <div className={clsx(styles.input, (searchContext.minArea !== '' || minAreaEditing) ? styles.active : styles.inactive)}>
        <label className={styles.label}>Surface minimum</label>
        <input
          type="number"
          pattern="[0-9]*"
          value={searchContext.minArea}
          onBlur={() => setMinAreaEditing(false)}
          onFocus={() => setMinAreaEditing(true)}
          onChange={(event) => setSearchContext({...searchContext, minArea: event.target.value})}
        />
      </div>
      <a className={styles.searchButton} onClick={handleSearch}>
        <svg width="17" height="17" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
            fill="currentColor"/>
        </svg>
        <span className={styles.searchText}>Rechercher</span>
      </a>
    </div>
  )
}
