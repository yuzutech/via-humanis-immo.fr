import fs from 'node:fs/promises'

import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import BackSearch from './back.js'

import styles from './ads.module.css'
import Contact from '@/app/annonces/[slug]/contact.js'

export async function generateStaticParams() {
  const properties = await getProperties()
  return properties.map((property) => ({
    slug: property.id
  }))
}

/**
 * @returns {Promise<Property[]>}
 */
async function getProperties() {
  return JSON.parse(await fs.readFile('./public/data/pericles/properties.json', 'utf8'))
}

export default async function Page({params}) {
  const properties = await getProperties()
  const slug = params.slug
  const property = properties.find((property) => property.id === slug)
  if (property === undefined) {
    return (<section className={clsx(styles.section, styles.notFound)}>
      <h4>L’annonce n’existe plus !</h4>
      <Link href="/recherche" className={styles.back}>Retourner à la recherche</Link>
    </section>)
  }
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <BackSearch slug={slug}/>
        <div className={styles.main}>
          <article className={styles.property}>
            <Image className={styles.image} src={'/data/pericles/images/' + property.mainImage} alt="" height="400"
                   width="700"/>
            <div>
              <h4 className={styles.title}>
                <span className={styles.type}>{property.category}</span>{' '}
                <span className={styles.city}>{property.city}</span>
              </h4>
              <div className={styles.overview}>
                <div className={styles.location}>
                  <span className={styles.city}>{property.city} - {property.postalCode}</span>
                </div>
                {property.category !== 'parking' && <div className={styles.area}>{property.floorArea}m², T{property.rooms}</div>}
                <div className={styles.price}>{property.price}€</div>
              </div>
              <div className={styles.description}>
                <h5>Description</h5>
                <pre className={styles.text}>{property.description}</pre>
              </div>
              {property.category !== 'parking' && <div className={styles.energy}>
                <h5>Chauffage et diagnostics</h5>
                <div className={styles.ges}>
                  <h6>GES</h6>
                  {property.ges}
                </div>
                <div className={styles.ecc}>
                  <h6>Classe énergie</h6>
                  {property.ecc}
                </div>
              </div>}
              <div className={styles.geo}>
                <h5>Emplacement</h5>
                <div className={styles.address}>
                  {property.address}<br/>
                  {property.postalCode} {property.city}
                </div>
                <div className={styles.map}></div>
              </div>
            </div>
          </article>
          <aside className={styles.contact}>
            <Contact/>
          </aside>
        </div>
      </div>
    </section>)
}
