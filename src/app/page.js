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
import Link from 'next/link'
import Menu from '@/app/menu'

async function getPage() {
  const client = createClient()
  return client.getSingle('accueil')
}

export default async function App() {
  const page = await getPage()
  return (<>
      <header className={styles.header}>
        <Menu variation="home"/>
      </header>
      <Search/>
      <section className={styles.section}>
        <div className={styles.content}>
          <h1 className={styles.title}>Via Humanis Immobilier<br/><span className={styles.tagline}>Votre partenaire de confiance, dans la durée.</span>
          </h1>
          <h1 className={styles.shortTitle}>Nous confier un bien</h1>
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
