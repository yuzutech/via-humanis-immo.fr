'use client'

import {useEffect, useState} from 'react'
import {createClient} from '../../../prismicio.js'

import NewsBlock from '@/app/actualites/newsBlock.js'
import PromotedNewsBlock from '@/app/actualites/promotedNewsBlock.js'
import Link from 'next/link'
import {Loading} from '@geist-ui/core'

import styles from './latestNews.module.css'

/**
 * @typedef {import('@prismicio/client').Content.LatestNewsSlice} LatestNewsSlice
 * @typedef {import('@prismicio/react').SliceComponentProps<LatestNewsSlice>} LatestNewsProps
 * @param {LatestNewsProps}
 */
const LatestNews = ({slice}) => {
  const [loading, setLoading] = useState(true)
  const [news, setNews] = useState([])
  useEffect(() => {
    ;(async () => {
      try {
        const client = createClient()
        const news = await client.getAllByType('news')
        setNews(news)
      } finally {
        setLoading(false)
      }
    })()
  }, [setNews, slice])
  const unpromotedNews = news.filter((item) => item.data.featured === false)
  const promotedNews = news.filter((item) => item.data.featured === true)
  const promotedNewsItem = promotedNews && promotedNews.length > 0
    ? promotedNews[0]
    : undefined
  return (
    <section className={styles.container} data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <div className={styles.content}>
        <h2 className={styles.title}>{slice.primary.title}</h2>
        {loading && <Loading/>}
        {!loading && <div className={styles.main}>
          <div className={styles.items}>
            {unpromotedNews.map((item) => <NewsBlock className={styles.item} key={item.id} data={item.data}/>)}
            <Link href="/actualites" className={styles.viewAllButton}>{slice.primary.view_all_text_button}</Link>
          </div>
          {promotedNewsItem && <div className={styles.promoted}>
            <PromotedNewsBlock className={styles.promotedBlock} data={promotedNewsItem.data}/>
          </div>}
        </div>}
      </div>
    </section>
  )
}

export default LatestNews
