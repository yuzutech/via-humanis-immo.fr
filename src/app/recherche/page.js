'use client'

import {useCallback, useEffect, useState} from 'react'
import styles from './search.module.css'
import SearchForm from '@/app/recherche/form'
import Ad from '@/app/recherche/ad'
import {usePathname, useRouter, useSearchParams} from 'next/navigation'

async function getProperties() {
  const res = await fetch('/data/pericles/properties.json')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
  const {top, left, bottom, right} = el.getBoundingClientRect()
  const {innerHeight, innerWidth} = window
  return partiallyVisible
    ? ((top > 0 && top < innerHeight) ||
      (bottom > 0 && bottom < innerHeight)) &&
    ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth
}

export default function SearchPage() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [properties, setProperties] = useState([])
  const [matchingProperties, setMatchingProperties] = useState([])

  useEffect(() => {
    ;(async () => {
      const properties = await getProperties()
      setProperties(properties)
    })()
  }, [])

  const updateMatchingProperties = useCallback((search) => {
    setMatchingProperties(properties.filter((property) => {
      let matching = true
      if (search.category) {
        matching = matching && property.category === search.category
      }
      if (search.maxPrice) {
        matching = matching && property.price <= search.maxPrice
      }
      if (search.category !== 'parking' && search.minArea) {
        matching = matching && property.floorArea >= search.minArea
      }
      if (search.offer) {
        matching = matching && property.offer === search.offer
      }
      if (search.category === 'appartement' && search.rooms) {
        matching = matching && property.rooms >= search.rooms
      }
      if (search.location) {
        matching = matching && property.city.toLowerCase() === search.location
      }
      if (search.rooms) {
        matching = matching && property.rooms >= search.rooms
      }
      return matching
    }))
  }, [properties, setMatchingProperties])

  useEffect(() => {
    const initialSearchContext = {
      offer: searchParams.get('offer') || 'rental',
      rooms: searchParams.get('rooms') || '',
      category: searchParams.get('category') || '',
      location: searchParams.get('location') || '',
      maxPrice: searchParams.get('maxPrice') || '',
      minArea: searchParams.get('minArea') || ''
    }
    updateMatchingProperties(initialSearchContext)
  }, [searchParams, updateMatchingProperties])

  useEffect(() => {
    if (searchParams && searchParams.has('slug') && matchingProperties.length > 0) {
      const slug = searchParams.get('slug')
      const element = window.document.getElementById(slug)
      if (element && !elementIsVisibleInViewport(element)) {
        element.scrollIntoView()
      }
    }
  }, [matchingProperties, searchParams])

  const updateSearchParams = useCallback((search) => {
    const params = new URLSearchParams(searchParams)
    params.delete('slug')
    if (search.category) {
      params.set('category', search.category)
    } else {
      params.delete('category')
    }
    if (search.maxPrice) {
      params.set('maxPrice', search.maxPrice)
    } else {
      params.delete('maxPrice')
    }
    if (search.minArea) {
      params.set('minArea', search.minArea)
    } else {
      params.delete('minArea')
    }
    if (search.offer) {
      params.set('offer', search.offer)
    } else {
      params.delete('offer')
    }
    if (search.rooms) {
      params.set('rooms', search.rooms)
    } else {
      params.delete('rooms')
    }
    if (search.location) {
      params.set('location', search.location)
    } else {
      params.delete('location')
    }
    router.push(pathname + '?' + params.toString())
  }, [pathname, router, searchParams])

  const handleSearch = useCallback((search) => {
    updateSearchParams(search)
    updateMatchingProperties(search)
  }, [updateSearchParams, updateMatchingProperties])

  const plural = matchingProperties.length >= 2 ? 's' : ''
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h1 className={styles.title}>Vous souhaitez louer ou acheter votre futur logement ?</h1>
        <main className={styles.main}>
          <SearchForm onSearch={handleSearch}/>
          <div className={styles.result}>
            <header className={styles.resultHeader}>
              {matchingProperties.length === 0 && <>Aucune annonce trouvée</>}
              {matchingProperties.length > 0 && <>{matchingProperties.length} annonce{plural} trouvée{plural}</>}
            </header>
            <div className={styles.resultList}>
              {matchingProperties.map((property) => {
                return <Ad key={property.id} data={property}/>
              })}
            </div>
          </div>
        </main>
      </div>
    </section>
  )
}
