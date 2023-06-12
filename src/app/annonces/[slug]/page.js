import fs from 'node:fs/promises'

import Link from 'next/link'
import clsx from 'clsx'

import BackSearch from './back.js'

import Contact from '@/app/annonces/[slug]/contact.js'
import GreenHouseGas from '@/components/ges.js'
import DiagnosisEnergyPerformance from '@/components/dpe.js'
import ImageSlider from '@/components/imageSlider.js'

import styles from './ads.module.css'

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

  const addressEncoded = encodeURI(`${property.address} ${property.postalCode} ${property.city}`)
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <BackSearch slug={slug}/>
        <div className={styles.main}>
          <article className={styles.property}>
            <ImageSlider images={property.images}/>
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
                <div className={styles.diagnostics}>
                  <div className={styles.ecc}>
                    <h6>Diagnostic de performance énergétique (DPE)</h6>
                    <DiagnosisEnergyPerformance value={property.ecc}/>
                  </div>
                  <div className={styles.ges}>
                    <h6>Index d&apos;émission de gaz à effet de serre (GES)</h6>
                    <GreenHouseGas value={property.ges}/>
                  </div>
                </div>
              </div>}
              <div className={styles.geo}>
                <h5>Emplacement</h5>
                <div className={styles.address}>
                  {property.address}<br/>
                  {property.postalCode} {property.city}
                </div>
                <div className={styles.map}>
                  <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${addressEncoded}&zoom=14&size=700x320&markers=color:245F8D|${addressEncoded}&key=AIzaSyDfghWdc2EOxk_oyYNB5-1ei-Uv9F8Fnx8`}/>
                </div>
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
