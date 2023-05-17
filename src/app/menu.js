import styles from './menu.module.css'
import clsx from 'clsx'
import Image from 'next/image'

export default function Menu() {
  return <nav className={styles.container}>
    <Image className={styles.logo} src="/via-humanis-immobilier.png" alt="logo" aria-hidden={true} width="48" height="44"/>
    <div className={styles.brand}>
      <div className={styles.title}>Via Humanis</div>
      <div className={styles.subtitle}>Immobilier</div>
    </div>
    <ul className={styles.navLinks}>
      <li><a href="#">Gestion</a></li>
      <li><a href="#">Location</a></li>
      <li><a href="#">Vente</a></li>
    </ul>
    <div className={styles.end}>
      <input placeholder="Trouver un bien"/>

      <div>
        <ul className={styles.navButtons}>
          <li><a className={clsx(styles.button, styles.buttonPrimary)} href="#">Nos actualités</a></li>
          <li><a className={clsx(styles.button, styles.buttonSecondary)} href="#">Qui sommes-nous ?</a></li>
        </ul>
      </div>
    </div>
  </nav>
}
