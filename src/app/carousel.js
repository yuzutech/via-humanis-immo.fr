'use client'

import clsx from 'clsx'
import styles from './carousel.module.css'
import {useEffect, useState} from 'react'
import {useRouter} from 'next/navigation'

export default function Carousel() {
  const router = useRouter()
  const [itemActive, setItemActive] = useState('gestion')
  const [learnMore, setLearnMore] = useState('')
  const [width, setWidth] = useState(1024)

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);
  const isMobile = width <= 768;
  const isDesktop = width >= 1024;
  useEffect(() => {
    if (isMobile) {
      setItemActive('')
      setLearnMore('')
    }
    if (isDesktop && itemActive === '') {
      setItemActive('gestion')
    }
  }, [isMobile, isDesktop, itemActive])

  return (<section className={styles.container}>
    <div className={styles.items}>
      <div onClick={() => router.push('/gestion')} onMouseEnter={() => !isMobile && setItemActive('gestion')} className={clsx(styles.item, styles.gestion, itemActive === 'gestion' && styles.active)}>
        <div className={styles.close}>
          <h3><span>Gestion<wbr/></span> locative</h3>
        </div>
        <div className={styles.open} onMouseEnter={() => setLearnMore('gestion')}>
          <h3>Gestion locative</h3>
          <p>Simplifiez votre quotidien ! Confiez-nous la gestion de votre bien, en toute sécurité.</p>
          <a href="#" className={clsx(styles.learnMore, learnMore === 'gestion' && styles.active)}>En savoir plus</a>
        </div>
      </div>
      <div onClick={() => router.push('/location')} onMouseEnter={() => !isMobile && setItemActive('location')} className={clsx(styles.item, styles.location, itemActive === 'location' && styles.active)}>
        <div className={styles.close}>
          <h3><span>Mise en<wbr/></span> location</h3>
        </div>
        <div className={styles.open} onMouseEnter={() => setLearnMore('location')}>
          <h3>Mise en location</h3>
          <p>Une commercialisation inédite.</p>
          <a href="#" className={clsx(styles.learnMore, learnMore === 'location' && styles.active)}>En savoir plus</a>
        </div>
      </div>
      <div onClick={() => router.push('/vente')} onMouseEnter={() => !isMobile && setItemActive('vente')} className={clsx(styles.item, styles.vente, itemActive === 'vente' && styles.active)}>
        <div className={styles.close}>
          <h3><span>Mise en<wbr/></span> vente</h3>
        </div>
        <div className={styles.open} onMouseEnter={() => setLearnMore('vente')}>
          <h3>Mise en vente</h3>
          <p>Vendre votre bien au meilleur prix - Nos experts vous offrent leur expérience du marché immobilier local.</p>
          <a href="#" className={clsx(styles.learnMore, learnMore === 'vente' && styles.active)}>En savoir plus</a>
        </div>
      </div>
    </div>
  </section>)
}
