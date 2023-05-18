'use client';

import styles from './menu.module.css'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import {usePathname} from 'next/navigation'


export default function Menu() {
  const pathname = usePathname()
  const navLinks = [
    {href: '/gestion', name: 'Gestion'},
    {href: '/location', name: 'Location'},
    {href: '/vente', name: 'Vente'},
  ]
  return <nav className={styles.container}>
    <Image className={styles.logo} src="/via-humanis-immobilier.png" alt="logo" aria-hidden={true} width="48" height="44"/>
    <div className={styles.brand}>
      <div className={styles.title}>Via Humanis</div>
      <div className={styles.subtitle}>Immobilier</div>
    </div>
    <ul className={styles.navLinks}>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href)
        return (
          <li key={link.name} className={clsx(styles.navLink, isActive && styles.active)} >
            <Link href={link.href}>{link.name}</Link>
          </li>
        )
      })}
    </ul>
    <div className={styles.end}>
      <div className={clsx(styles.navLink, pathname.startsWith("/recherche") && styles.active)}>
        <Link className={styles.search} href="/recherche">Trouver un bien</Link>
      </div>
      <div>
        <ul className={styles.navButtons}>
          <li><a className={clsx(styles.button, styles.buttonPrimary)} href="#">Nos actualités</a></li>
          <li><a className={clsx(styles.button, styles.buttonSecondary)} href="#">Qui sommes-nous ?</a></li>
        </ul>
      </div>
    </div>
  </nav>
}
