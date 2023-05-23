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
  const offers = slice.items
  const offerNames = offers.map((offer) => offer.name)
  const offerFeatures = offers.reduce((acc, offer) => {
    let i = 1
    let feature = offer[`feature${i}`]
    let features = []
    while (feature) {
      features.push({
        name: feature,
        traditional_agency: offer[`traditional_agency_feature${i}`],
        digital_agency: offer[`digital_agency_feature${i}`],
        vhi: offer[`vhi_feature${i}`]
      })
      feature = offer[`feature${++i}`]
    }
    acc[offer.name] = {
      features: features
    }
    return acc
  }, {})
  return (
    <section className={styles.container} data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <div className={styles.content}>
        <h2 className={styles.title}>{slice.primary.title}</h2>
        <Tabs>
          <TabList>
            {offerNames.map((name, index) => <Tab key={'tab-list__' + index}>{name}</Tab>)}
          </TabList>
          {offerNames.map((name, index) => <TabPanel key={'tab-panel__' + index}>
              <div className={styles.tab}>
                <table className={styles.table}>
                  <thead>
                  <tr>
                    <th></th>
                    <th className={clsx(styles.header, styles.traditionalAgencyHeader)}>Agence traditionelle</th>
                    <th className={clsx(styles.header, styles.digitalAgencyHeader)}>Agence digitale</th>
                    <th className={clsx(styles.header, styles.vhiHeader)}><span
                      className={styles.vhText}>Via Humanis</span><span className={styles.immoText}>Immobilier</span></th>
                  </tr>
                  </thead>
                  <tbody className={styles.tbody}>
                  {offerFeatures[name].features.map((feat, index) => <tr key={'feature__' + index}>
                      <td className={styles.featureName}>{feat.name}</td>
                      <td>{feat.traditional_agency && <span className={styles.checked}></span>}</td>
                      <td>{feat.digital_agency && <span className={styles.checked}></span>}</td>
                      <td>{feat.vhi && <span className={clsx(styles.checked, styles.highlighted)}></span>}</td>
                    </tr>
                  )}
                  </tbody>
                </table>
              </div>
            </TabPanel>
          )}
        </Tabs>
        <div className={styles.disclaimer}>{slice.primary.disclaimer}</div>
      </div>
    </section>
  )
}

export default OffersCompare
