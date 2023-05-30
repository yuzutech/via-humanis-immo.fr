import styles from './latestNews.module.css'


/**
 * @typedef {import('@prismicio/client').Content.LatestNewsSlice} LatestNewsSlice
 * @typedef {import('@prismicio/react').SliceComponentProps<LatestNewsSlice>} LatestNewsProps
 * @param {LatestNewsProps}
 */
const LatestNews = ({slice}) => {
  return (
    <section className={styles.container} data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <div className={styles.content}>
        <h2 className={styles.title}>{slice.primary.title}</h2>
      </div>
    </section>
  )
}

export default LatestNews
