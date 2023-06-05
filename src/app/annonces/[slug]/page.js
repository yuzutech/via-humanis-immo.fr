import {getProperties, Property} from '@/app/pericles'
import styles from './ads.module.css'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

export async function generateStaticParams() {
  return [{
    slug: '123'
  }];
}

/**
 * @returns {Promise<Property[]>}
 */
async function getData() {
  return getProperties()
}

export default async function Page({params}) {
  const data = await getData()
  const slug = params.slug
  const property = data.find((property) => property.id === slug)
  if (property === undefined) {
    return (<section className={clsx(styles.section, styles.notFound)}>
      <h4>L’annonce n’existe plus !</h4>
      <Link href="/recherche" className={styles.back}>Retourner à la recherche</Link>
    </section>)
  }
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <Link href={`/recherche?slug=${slug}`} className={styles.back}>Résultats de recherche</Link>
        <div className={styles.main}>
          <article className={styles.property}>
            <Image className={styles.image} src={'/data/pericles/images/' + property.mainImage} alt="" height="400" width="700"/>
            <div>
              <h4 className={styles.title}>
                <span className={styles.type}>{property.type}</span>{' '}
                <span className={styles.city}>{property.city}</span>
              </h4>
              <div className={styles.overview}>
                <div className={styles.localisation}>
                  <span className={styles.city}>{property.city} - {property.postalCode}</span>
                </div>
                <div className={styles.area}>{property.floorArea}m², T{property.rooms}</div>
                <div className={styles.price}>{property.price}€</div>
              </div>
              <div className={styles.description}>
                <h5>Description</h5>
                <pre className={styles.text}>{property.description}</pre>
              </div>
              <div className={styles.energy}>
                <h5>Chauffage et diagnostics</h5>
                <div className={styles.ges}>
                  <h6>GES</h6>
                  {property.ges}
                </div>
                <div className={styles.ecc}>
                  <h6>Classe énergie</h6>
                  {property.ecc}
                </div>
              </div>
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
            <div>
              <h3>Via Humanis Immobilier</h3>
              <div className={styles.tel}>04 00 00 00 00</div>
              <div className={styles.email}>hello@vh-immobilier.fr</div>
              <div className={styles.form}>
                <label>Je souhaite être recontacté(e)</label>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>)
}
