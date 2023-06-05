'use client';

import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'


export default function Footer() {
  return (<footer className={styles.container}>
    <div className={styles.content}>
    <div className={styles.introduction}>
      <Image src="/via-humanis-immobilier-horizontal-white.png" alt="Logo Via Humanis Immobilier" aria-hidden={true} width="260" height="64"/>
      <Image src="/fnaim.png" alt="Logo FNAIM" aria-hidden={true} width="131" height="100"/>
    </div>
    <ul className={styles.links}>
      <li><Link href="/">Accueil</Link></li>
      <li><Link href="/gestion">Gestion locative</Link></li>
      <li><Link href="/location">Mise en location</Link></li>
      <li><Link href="/vente">Mise en vente</Link></li>
      <li><Link href="/recherche">Trouver un bien</Link></li>
      <li><Link href="/actualites">Nos actualités</Link></li>
      <li><Link href="/qui-sommes-nous">Qui sommes-nous ?</Link></li>
      <li><a className={styles.contact} href="#">Contactez-nous</a></li>
    </ul>
    <div className={styles.group}>
      Notre groupe :
      <Image src="/via-humanis.png" alt="Logo Via Humanis" aria-hidden={true} width="240" height="48"/>
      <Image src="/noe.svg" alt="Logo Noé" aria-hidden={true} width="92" height="32"/>
    </div>
    <div className={styles.copyright}>
      Copyright © 2022 - Via Humanis Immobilier, tous droits réservés - CGU
    </div>
    </div>
  </footer>)
}
