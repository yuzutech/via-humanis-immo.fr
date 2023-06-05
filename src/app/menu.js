'use client'

import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {useEffect, useState} from 'react'

import MobileMenu from '@/app/mobileMenu'

import styles from './menu.module.css'
import logoStyles from './menuLogo.module.css'

export default function Menu({variation = "primary"}) {
  const pathname = usePathname()

  const [width, setWidth] = useState()

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

  const isMobile = width && width < 1024
  if (isMobile) {
    return <MobileMenu/>
  }

  const navLinks = variation === 'home'
    ? []
    : [
      {href: '/gestion', name: 'Gestion'},
      {href: '/location', name: 'Location'},
      {href: '/vente', name: 'Vente'},
    ]

  return (<nav className={styles.container} data-variation={variation}>
    <Link href="/" className={clsx(logoStyles.brand, styles.brand)}>
      <Image
        className={logoStyles.logo}
        src="/via-humanis-immobilier.png"
        alt="logo"
        aria-hidden={true}
        width="48"
        height="44"/>
      <div className={logoStyles.wordmark}>
        <div className={logoStyles.title}>Via Humanis</div>
        <div className={logoStyles.subtitle}>Immobilier</div>
      </div>
    </Link>
    <div className={styles.navLinks}>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href)
        return (
          <Link
            key={link.name}
            className={clsx(styles.navLink, isActive && styles.active)}
            href={link.href}
          >{link.name}</Link>
        )
      })}
    </div>
    <div className={styles.end}>
      <Link
        className={clsx(styles.search, styles.navLink, pathname.startsWith('/recherche') && styles.active)}
        href="/recherche"
      >Trouver un bien</Link>
      <div className={clsx(styles.buttons, styles.navButtons)}>
        <Link
          className={clsx(styles.navLink, styles.button, styles.buttonPrimary, pathname.startsWith('/actualites') && styles.active)}
          href="/actualites"
        >Nos actualités</Link>
        <Link
          className={clsx(styles.navLink, styles.button, styles.buttonSecondary, pathname.startsWith('/qui-sommes-nous') && styles.active)}
          href="/qui-sommes-nous"
        >Qui sommes-nous ?</Link>
      </div>
    </div>
  </nav>)
}
