import styles from './search.module.css'
import SearchForm from '@/app/recherche/form'

export default async function SearchPage() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h1 className={styles.title}>Vous souhaitez louer ou acheter votre futur logement ?</h1>
          <SearchForm/>
        <div className={styles.result}>

        </div>
      </div>
    </section>
  )
}
