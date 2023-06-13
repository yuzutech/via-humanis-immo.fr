'use client'

import {useCallback} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {GeistProvider, useModal} from '@geist-ui/core'

import styles from './footer.module.css'
import ContactModal from '@/components/contactModal.js'

export default function Footer() {
  const { setVisible, bindings} = useModal()
  const openContactForm = useCallback(() => {
    setVisible(true)
  }, [setVisible])
  return (<GeistProvider>
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.introduction}>
          <div className={styles.image}>
            <Image src="/via-humanis-immobilier-horizontal-white.png" alt="Logo Via Humanis Immobilier" aria-hidden={true} width="260" height="64"/>
          </div>
          <div className={styles.image}>
            <a href="https://www.fnaim.fr/" target="_blank" rel="noopener noreferrer">
              <Image src="/fnaim.png" alt="Logo FNAIM" aria-hidden={true} width="131" height="100"/>
            </a>
          </div>
        </div>
        <ul className={styles.links}>
          <li><Link href="/">Accueil</Link></li>
          <li><Link href="/gestion">Gestion locative</Link></li>
          <li><Link href="/location">Mise en location</Link></li>
          <li><Link href="/vente">Mise en vente</Link></li>
          <li><Link href="/recherche">Trouver un bien</Link></li>
          <li><Link href="/actualites">Nos actualités</Link></li>
          <li><Link href="/qui-sommes-nous">Qui sommes-nous ?</Link></li>
          <li><a className={styles.contact} onClick={openContactForm}>Contactez-nous</a></li>
        </ul>
        <div className={styles.group}>
          <div>
            Notre groupe :
          </div>
          <div className={styles.image}>
            <a href="https://via-humanis.fr/?utm_source=via-humanis-immo">
              <Image src="/via-humanis.png" alt="Logo Via Humanis" aria-hidden={true} width="240" height="48"/>
            </a>
          </div>
          <div className={styles.image}>
            <a href="https://www.noe.career/?utm_source=via-humanis-immo">
              <Image src="/noe.svg" alt="Logo Noé" aria-hidden={true} width="92" height="32"/>
            </a>
          </div>
        </div>
        <div className={styles.copyright}>
          <div className={styles.part}>
            Copyright © 2023
          </div>
          <div className={styles.part}>
            Via Humanis Immobilier, tous droits réservés
          </div>
          <div className={styles.part}>
            CGU
          </div>
        </div>
      </div>
    </footer>
    <ContactModal setVisible={setVisible} bindings={bindings}/>
  </GeistProvider>)
}
