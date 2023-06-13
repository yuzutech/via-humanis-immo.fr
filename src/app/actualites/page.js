import {createClient} from '../../../prismicio.js'
import NewsBlock from './newsBlock.js'

import styles from './news.module.css'
import PromotedNewsBlock from '@/app/actualites/promotedNewsBlock.js'

async function getNews() {
  const client = createClient()
  return client.getAllByType('news')
}

export default async function NewsPage() {
  const news = await getNews()
  const unpromotedNews = news.filter((item) => item.data.featured === false)
  const promotedNews = news.filter((item) => item.data.featured === true)
  const promotedNewsItem = promotedNews && promotedNews.length > 0
    ? promotedNews[0]
    : undefined
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h1 className={styles.title}>Nos actualités</h1>
        <div className={styles.main}>
          <div className={styles.items}>
            {unpromotedNews.map((item) => <NewsBlock className={styles.item} key={item.id} data={item.data}/>)}
          </div>
          {promotedNewsItem && <div className={styles.promoted}>
            <PromotedNewsBlock data={promotedNewsItem.data}/>
          </div>}
        </div>
      </div>
    </section>
  )
}
