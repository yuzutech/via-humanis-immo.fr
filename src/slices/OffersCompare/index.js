'use client'

import styles from './offersCompare.module.css'
import clsx from 'clsx'

/**
 * @typedef {import('@prismicio/client').Content.OffersCompareSlice} OffersCompareSlice
 * @typedef {import('@prismicio/react').SliceComponentProps<OffersCompareSlice>} OffersCompareProps
 * @param {OffersCompareProps}
 */
const OffersCompare = ({slice}) => {
  const features = slice.items
  return (
    <section className={styles.container} data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <div className={styles.content}>
        <h2 className={styles.title}>{slice.primary.title}</h2>
        <h2 className={styles.shortTitle}>{slice.primary.short_title}</h2>
        <div className={styles.tabs}>
          <div className={styles.tab}>
            <table className={styles.table}>
              <thead>
              <tr>
                <th style={{width: "35%"}}></th>
                <th className={clsx(styles.header, styles.offer1Header)}>Liberté</th>
                <th className={clsx(styles.header, styles.offer2Header)}>Confort</th>
                <th className={clsx(styles.header, styles.offer3Header)}>Premium</th>
              </tr>
              </thead>
              <tbody className={styles.tbody}>
              {features.map((feat, index) => <tr key={'feature__' + index}>
                  <td className={styles.featureName}>{feat.feature}</td>
                  <td>{feat.offer1_has_feature && <span className={styles.checked}></span>}</td>
                  <td>{feat.offer2_has_feature && <span className={styles.checked}></span>}</td>
                  <td>{feat.offer3_has_feature && <span className={clsx(styles.checked, styles.highlighted)}></span>}</td>
                </tr>
              )}
              </tbody>
            </table>
          </div>
        </div>
        <div className={styles.disclaimer}>{slice.primary.disclaimer}</div>
      </div>
    </section>
  )
}

export default OffersCompare
