'use client'

import clsx from 'clsx'
import styles from '@/app/carousel.module.css'
import {useCallback, useEffect, useState} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/navigation'


export default function CarouselItem({id, title, description, shortTitleMain, shortTitleSub, itemActive, onActiveItemChanged, style}) {
  const router = useRouter()
  const [width, setWidth] = useState(0)
  const [learnMore, setLearnMore] = useState(false)

  function handleWindowSizeChange() {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])
  useEffect(() => {
    if (itemActive !== id) {
      setLearnMore(false)
    }
  }, [id, itemActive])

  const isMobile = width <= 768
  const handleOpen = useCallback(() => {
    if (!isMobile) {
      onActiveItemChanged(id)
    }
  }, [isMobile, id, onActiveItemChanged])

  const handleShowLearnMore = useCallback(() => {
    if (!isMobile) {
      setLearnMore(true)
    }
  }, [isMobile])

  return (<div onClick={() => router.push(`/${id}`)} onMouseEnter={handleOpen} className={clsx(styles.item, style, itemActive === id && styles.active)}>
    <div className={clsx(styles.close, isMobile && styles.mobile)}>
      <h3><><span>{shortTitleMain}<wbr/></span> {shortTitleSub}</></h3>
    </div>
    <div className={styles.open} onMouseEnter={handleShowLearnMore}>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link className={clsx(styles.learnMore, learnMore && itemActive === id && styles.active)} href={`/${id}`}>En savoir plus</Link>
    </div>
  </div>)
}
