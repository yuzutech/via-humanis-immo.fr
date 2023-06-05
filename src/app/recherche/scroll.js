'use client'

import {useSearchParams} from 'next/navigation'
import {useEffect} from 'react'

export default function Scroll() {
  const searchParams = useSearchParams()
  useEffect(() => {
    if (searchParams.has('slug')) {
      const slug = searchParams.get('slug')
      const element = window.document.getElementById(slug)
      if (element) {
        element.scrollIntoView()
      }
    }
  }, [searchParams])
  return (<></>)
}
