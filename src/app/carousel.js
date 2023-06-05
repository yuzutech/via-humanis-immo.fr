'use client'

import styles from './carousel.module.css'
import {useCallback, useEffect, useState} from 'react'
import CarouselItem from '@/app/carouselItem'
import clsx from 'clsx'

export default function Carousel() {
  const [itemActive, setItemActive] = useState('')
  const [untouchedItems, setUntouchedItems] = useState([])
  const [width, setWidth] = useState(0)
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
  const isMobile = width <= 768
  const isDesktop = width >= 1024

  useEffect(() => {
    if (isMobile) {
      setItemActive('')
    }
    if (isDesktop && itemActive === '') {
      setItemActive('gestion')
    }
  }, [isMobile, isDesktop, itemActive])

  const handleActiveItemChanged = useCallback((id) => {
    if (id !== itemActive) {
      const items = [
        'gestion',
        'location',
        'vente'
      ]
      const untouchedItems = items.filter((item) => item !== id && item !== itemActive)
      setItemActive(id)
      // reduce visual motion
      setUntouchedItems(untouchedItems)
    }
  }, [setUntouchedItems, itemActive, setItemActive])

  return (<section className={styles.container}>
    <div className={styles.items}>
      <CarouselItem
        itemActive={itemActive}
        title="Gestion locative"
        description="Simplifiez votre quotidien ! Confiez-nous la gestion de votre bien, en toute sécurité"
        shortTitleMain="Gestion"
        shortTitleSub="locative"
        id="gestion"
        onActiveItemChanged={handleActiveItemChanged}
        style={clsx(styles.gestion, untouchedItems.includes('gestion') && styles.untouched)}/>
      <CarouselItem
        itemActive={itemActive}
        title="Mise en location"
        shortTitleMain="Mise en"
        shortTitleSub="location"
        description="Une commercialisation inédite."
        shortTitle={<><span>Mise en<wbr/></span> location</>}
        id="location"
        onActiveItemChanged={handleActiveItemChanged}
        style={styles.location}/>
      <CarouselItem
        itemActive={itemActive}
        title="Mise en vente"
        shortTitleMain="Mise en"
        shortTitleSub="vente"
        description="Vendre votre bien au meilleur prix - Nos experts vous offrent leur expérience du marché immobilier local."
        shortTitle={<><span>Mise en<wbr/></span> vente</>}
        id="vente"
        onActiveItemChanged={handleActiveItemChanged}
        style={styles.vente}/>
    </div>
  </section>)
}
