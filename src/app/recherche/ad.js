import {Property} from '@/app/pericles'
import styles from './ad.module.css'
import Image from 'next/image'
import Link from 'next/link'

/**
 *
 * @param {Property} data
 * @returns {JSX.Element}
 * @constructor
 */
export default function Ad({data}) {
  return (<Link href={'/annonces/' + data.id} className={styles.container}>
    <div id={data.id} className={styles.content}>
      <Image className={styles.image} src={'/data/pericles/images/' + data.mainImage} alt="" height="120" width="120"/>
      <div className={styles.overview}>
        <h4 className={styles.title}>
          <span className={styles.type}>{data.type}</span>{' '}
          <span className={styles.city}>{data.city}</span>
        </h4>
        <div className={styles.localisation}>
          <span className={styles.city}>{data.city} - {data.postalCode}</span>
        </div>
        <div className={styles.area}>{data.floorArea}m², T{data.rooms}</div>
      </div>
      <div className={styles.price}>
        <div>{data.price}€</div>
      </div>
    </div>
  </Link>)

}
