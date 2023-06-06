'use client'

import styles from './search.module.css'
import {useCallback, useEffect, useState} from 'react'
import clsx from 'clsx'
import {useRouter, useSearchParams} from 'next/navigation'

async function getCategories() {
  const res = await fetch('/data/pericles/categories.json', {})
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

async function getCities() {
  const res = await fetch('/data/pericles/cities.json', {})
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default function Search() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [offer, setOffer] = useState('rental')
  const [category, setCategory] = useState('')
  const [location, setLocation] = useState('')
  const [categories, setCategories] = useState([])
  const [cities, setCities] = useState([])
  useEffect(() => {
    (async () => {
      const categories = await getCategories()
      setCategories(categories)
      const cities = await getCities()
      setCities(cities)
    })()
  }, [setCategories, setCities])
  const handleSearch = useCallback(() => {
    const params = new URLSearchParams(searchParams)
    params.set('category',  category || 'appartement')
    if (offer) {
      params.set('offer', offer)
    }
    if (location) {
      params.set('location', location)
    }
    router.push('/recherche?' + params.toString())
  }, [router, searchParams, offer, category, location])
  return (<section className={styles.container}>
    <div className={styles.content}>
      <h2 className={styles.title}>Trouver un bien</h2>
      <div className={styles.form}>
        <div className={styles.toggleButton}
             onClick={() => setOffer(offer === 'rental' ? 'sale' : 'rental')}>
          <div className={styles.toggleOptions}>
            <span className={clsx(offer === 'rental' && styles.toggleOptionActive)}>Location</span>
            <span className={clsx(offer === 'sale' && styles.toggleOptionActive)}>Achat</span>
          </div>
        </div>
        <label></label>
        <div className={clsx(styles.select, styles.categories)}>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="" disabled hidden>Appartement</option>
            {categories.map((category) => (<option className={styles.category} key={category} value={category}>{category}</option>))}
          </select>
        </div>
        <div className={styles.row}>
          <div className={clsx(styles.select, styles.locations, location !== '' && styles.active)}>
            <select
              value={location}
              onChange={(event) => setLocation(event.target.value)}
            >
              <option value="" disabled hidden>Localisation</option>
              {cities.map((city) => (<option className={styles.city} key={city} value={city}>{city}</option>))}
            </select>
          </div>
          <button className={styles.searchButton} onClick={handleSearch}>
            <svg width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
                fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>)
}
