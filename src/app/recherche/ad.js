import styles from './ad.module.css'
import Image from 'next/image'
import Link from 'next/link'
import {useSearchParams} from 'next/navigation'

/**
 *
 * @param {Property} data
 * @returns {JSX.Element}
 * @constructor
 */
export default function Ad({data}) {
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  params.delete('slug')

  const type = data.category === 'appartement'
    ? `, T${data.rooms}`
    : ''
  return (<Link href={'/annonces/' + data.id + '?' + params.toString()} className={styles.container}>
    <div id={data.id} className={styles.content}>
      <Image className={styles.image} src={'/data/pericles/images/' + data.mainImage} alt="" height="120" width="120"/>
      <div className={styles.overview}>
        <h4 className={styles.title}>
          <span className={styles.type}>{data.category}</span>{' '}
          <span className={styles.city}>{data.city}</span>
        </h4>
        <div className={styles.location}>
          <span className={styles.city}>{data.city} - {data.postalCode}</span>
        </div>
        {data.category !== 'parking' && <div className={styles.area}>{data.floorArea}m²{type}</div>}
        {data.category === 'parking' && <div className={styles.fill}></div> }
      </div>
      <div className={styles.price}>
        <div>{data.price}€</div>
      </div>
    </div>
  </Link>)

}
