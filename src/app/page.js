import {SliceZone} from '@prismicio/react'
import Image from 'next/image'
import clsx from 'clsx'
import Search from '@/app/search'
import Carousel from '@/app/carousel'
import Projects from '@/slices/Projects'
import ValueProposition from '@/slices/ValueProposition'
import LatestNews from '@/slices/LatestNews'
import TeamCallout from '@/slices/TeamCallout'
import Testimonies from '@/slices/Testimonies'

import styles from './page.module.css'

import {createClient} from '../../prismicio'

async function getPage() {
  const client = createClient()
  return client.getSingle('accueil')
}

export default async function App() {
  const page = await getPage()
  return (<>
      <nav className={styles.nav}>
        <Image className={styles.logo} src="/via-humanis-immobilier.png" alt="logo" aria-hidden={true} width="48" height="44"/>
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
      <section className={styles.section}>
        <div className={styles.content}>
          <h1 className={styles.title}>Via Humanis Immobilier<br/><span className={styles.tagline}>Votre partenaire de confiance, dans la durée.</span>
          </h1>
          <div>
            <nav className={styles.carousel}>
              <Carousel/>
            </nav>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.scrollButton}>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24Z"
              fill="#245F8D" fillOpacity="0.15"/>
            <path d="M25 28.01V16H23V28.01H20L24 32L28 28.01H25Z" fill="#245F8D"/>
          </svg>
        </div>
      </section>
      <SliceZone slices={page.data.slices} components={{
        value_proposition: ValueProposition,
        latest_news: LatestNews,
        team_callout: TeamCallout,
        projects: Projects,
        testimonies: Testimonies
      }}/>
    </>
  )
}
