'use client'

import Link from 'next/link'
import {useSearchParams} from 'next/navigation'

import styles from './back.module.css'

export default function BackSearch({slug}) {
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  params.set('slug', slug)
  return (<Link href={`/recherche?${params.toString()}`} className={styles.back}>Résultats de recherche</Link>)
}
