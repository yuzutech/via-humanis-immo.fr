'use client'

import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import { useCallback, useEffect, useState } from "react";

import MobileMenu from '@/app/mobileMenu'

import styles from './menu.module.css'
import logoStyles from './menuLogo.module.css'
import { useModal } from "@geist-ui/core";
import ContactModal from "@/components/contactModal.js";

export default function Menu({variation = "primary"}) {
  const pathname = usePathname()

  const [width, setWidth] = useState()

  const { setVisible, bindings} = useModal()
  const openContactForm = useCallback(() => {
    setVisible(true)
  }, [setVisible])

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
        width="192"
        height="48"/>
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
      <a className={clsx(styles.navLink, styles.contact)} onClick={openContactForm}><span>Nous contacter</span></a>
      <div className={clsx(styles.buttons, styles.navButtons)}>
        <Link
          className={clsx(styles.navLink, styles.button, styles.buttonSecondary, pathname.startsWith('/qui-sommes-nous') && styles.active)}
          href="/qui-sommes-nous"
        >Qui sommes-nous ?</Link>
      </div>
    </div>
    <ContactModal setVisible={setVisible} bindings={bindings}/>
  </nav>)
}
