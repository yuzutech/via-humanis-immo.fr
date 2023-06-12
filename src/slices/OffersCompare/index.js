'use client'

import {Tab, Tabs, TabList, TabPanel} from 'react-tabs'
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
        <div className={styles.tab}>
          <table className={styles.table}>
            <thead>
            <tr>
              <th></th>
              <th className={clsx(styles.header, styles.traditionalAgencyHeader)}>Liberté</th>
              <th className={clsx(styles.header, styles.digitalAgencyHeader)}>Confort</th>
              <th className={clsx(styles.header, styles.vhiHeader)}><span className={styles.vhText}>Premium</span></th>
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
        <div className={styles.disclaimer}>{slice.primary.disclaimer}</div>
      </div>
    </section>
  )
}

export default OffersCompare
