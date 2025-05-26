'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { GeistProvider, Modal, useModal } from "@geist-ui/core";
import Link from 'next/link'
import {useCallback, useState} from 'react'
import {usePathname} from 'next/navigation'

import styles from './mobileMenu.module.css'
import logoStyles from './menuLogo.module.css'
import ContactModal from "@/components/contactModal.js";

export default function MobileMenu() {
  const pathname = usePathname()
  const { setVisible, bindings} = useModal()
  const openContactForm = useCallback(() => {
    setVisible(true)
  }, [setVisible])
  const menuLinks = [
    {href: '/', name: 'Accueil'},
    {href: '/gestion', name: 'Gestion locative'},
    {href: '/location', name: 'Mise en location'},
    {href: '/vente', name: 'Mise en vente'},
    {href: '/recherche', name: 'Trouver un bien'},
    // {href: '/actualites', name: 'Nos actualités'},
    {onClick: openContactForm, name: 'Nous contacter'},
    {href: '/qui-sommes-nous', name: 'Qui sommes-nous ?'},
  ]
  const [showMenu, setShowMenu] = useState(false)
  const handleOpen = useCallback(() => {
    setShowMenu(true)
  }, [setShowMenu])
  const handleClose = useCallback(() => {
    setShowMenu(false)
  }, [setShowMenu])

  return (<GeistProvider>
    <nav className={clsx(
      styles.container,
      pathname === '/' && styles.containerHome,
      pathname === '/recherche' && styles.containerSearch
    )}>
      <div className={logoStyles.brand}>
        <Link href="/">
        <Image
          className={logoStyles.logo}
          src="/via-humanis-immobilier.png"
          alt="logo"
          aria-hidden={true}
          width="192"
          height="48"/>
        </Link>
      </div>
      <a href="#" onClick={handleOpen} className={styles.openMenuButton}></a>
    </nav>
    <Modal placement="top" className={styles.modalMenu} wrapClassName={styles.modalMenu} visible={showMenu} onClose={handleClose}>
      <Modal.Title>
        Menu
        <div onClick={handleClose} className={styles.closeIcon}></div>
      </Modal.Title>
      <Modal.Content>
        <div className={styles.menuLinks}>
          {menuLinks.map((link) => {
            const isActive = pathname === link.href
            if (link.onClick) {
              return <a onClick={link.onClick} key={link.name} className={clsx(
                styles.menuLink
              )}> {link.name}</a>
            }
            return (
              <Link
                key={link.name}
                className={clsx(
                  styles.menuLink,
                  isActive && styles.active
                )}
                href={link.href}
              >{link.name}</Link>
            )
          })}
        </div>
      </Modal.Content>
    </Modal>
    <ContactModal setVisible={setVisible} bindings={bindings}/>
  </GeistProvider>)
}
