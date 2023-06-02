'use client'

import styles from './menu.module.css'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import {usePathname, useRouter} from 'next/navigation'


export default function Menu() {
  const pathname = usePathname()
  const router = useRouter()
  const navLinks = [
    {href: '/gestion', name: 'Gestion'},
    {href: '/location', name: 'Location'},
    {href: '/vente', name: 'Vente'},
  ]
  return <nav className={styles.container}>
    <Image className={styles.logo} src="/via-humanis-immobilier.png" alt="logo" aria-hidden={true} width="48"
           height="44"/>
    <div onClick={() => router.push('/')} className={styles.brand}>
      <div className={styles.title}>Via Humanis</div>
      <div className={styles.subtitle}>Immobilier</div>
    </div>
    <div className={styles.navLinks}>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href)
        return (
          <Link key={link.name} className={clsx(styles.navLink, isActive && styles.active)}
                href={link.href}>{link.name}</Link>
        )
      })}
    </div>
    <div className={styles.end}>
      <Link className={clsx(styles.search, styles.navLink, pathname.startsWith('/recherche') && styles.active)}
            href="/recherche">Trouver un bien</Link>
      <div className={clsx(styles.buttons, styles.navButtons)}>
        <Link
          className={clsx(styles.navLink, styles.button, styles.buttonPrimary, pathname.startsWith('/actualites') && styles.active)}
          href="/actualites">Nos actualités</Link>
        <Link
          className={clsx(styles.navLink, styles.button, styles.buttonSecondary, pathname.startsWith('/qui-sommes-nous') && styles.active)}
          href="/qui-sommes-nous">Qui sommes-nous ?</Link>
      </div>
    </div>
  </nav>
}
