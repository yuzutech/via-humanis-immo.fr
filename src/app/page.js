import styles from './page.module.css'
import Image from 'next/image'
import clsx from 'clsx'
import Search from '@/app/search'

export default function App() {
  return (<>
      <nav className={styles.nav}>
        <Image className={styles.logo} src="/via-humanis-immobilier.png" alt="logo" aria-hidden={true} width="48"
               height="44"/>
        <div className={styles.brand}>
          <div className={styles.brandTitle}>Via Humanis</div>
          <div className={styles.brandSubtitle}>Immobilier</div>
        </div>
        <div className={styles.end}>
          <div>
            <ul className={styles.navButtons}>
              <li><a className={clsx(styles.button, styles.buttonPrimary)} href="#">Nos actualités</a></li>
              <li><a className={clsx(styles.button, styles.buttonSecondary)} href="#">Qui sommes-nous ?</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <Search/>
      <section>
        <h1>Via Humanis Immobilier<br/><span>Votre partenaire de confiance, dans la durée.</span></h1>
        <div>
          <nav>
          {/* todo */}
          </nav>
        </div>
      </section>
      <section>
        <div>
        {/* scroll indicator */}
        </div>
      </section>
    {/* Composant ValueProposition */}
    {/* Composant TeamSummary */}
    {/* Composant Projects */}
    {/* Composant LatestNews */}
    {/* Composant Testimonies */}
    </>
  )
}
