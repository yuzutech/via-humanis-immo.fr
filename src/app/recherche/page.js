import styles from './search.module.css'
import SearchForm from '@/app/recherche/form'
import {getProperties} from '@/app/pericles'
import Ad from '@/app/recherche/ad'
import Scroll from '@/app/recherche/scroll'

/**
 * @returns {Promise<Property[]>}
 */
async function getData() {
  return getProperties()
}

export default async function SearchPage() {
  const data = await getData()
  const plural = data.length >= 2 ? 's' : ''
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h1 className={styles.title}>Vous souhaitez louer ou acheter votre futur logement ?</h1>
        <main className={styles.main}>
          <SearchForm/>
          <div className={styles.result}>
            <header className={styles.resultHeader}>
              {data.length} annonce{plural} trouvée{plural}
            </header>
            <div className={styles.resultList}>
              {data.map((property) => {
                return <Ad key={property.id} data={property}/>
              })}
            </div>
            <Scroll/>
          </div>
        </main>
      </div>
    </section>
  )
}
