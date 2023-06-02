import {PrismicNextImage} from '@prismicio/next'
import {PrismicRichText} from '@prismicio/react'

import styles from './estimateForm.module.css'
import clsx from 'clsx'

/**
 * @typedef {import('@prismicio/client').Content.EstimateFormSlice} EstimateFormSlice
 * @typedef {import('@prismicio/react').SliceComponentProps<EstimateFormSlice>} EstimateFormProps
 * @param {EstimateFormProps}
 */
const EstimateForm = ({slice}) => {
  return (
    <section className={styles.container} data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <div className={styles.content}>
        <div>
          <PrismicNextImage field={slice.primary.illustration}/>
        </div>
        <div className={styles.text}>
          <h2 className={styles.title}>{slice.primary.title}</h2>
          <div className={styles.description}>
            <PrismicRichText field={slice.primary.description}/>
          </div>
          <div className={styles.form}>
            <div className={styles.row}>
              <div className={styles.select}>
                <select defaultValue="">
                  <option value="" disabled hidden>Type</option>
                  <option value="appartement">Appartement</option>
                  <option value="maison">Maison</option>
                </select>
              </div>
              <div className={styles.select}>
                <select defaultValue="">
                  <option value="" disabled hidden>Pièces</option>
                  <option value="t1">T1</option>
                  <option value="t2">T2</option>
                  <option value="t3">T3</option>
                  <option value="t4">T4</option>
                  <option value="t5">T5+</option>
                </select>
              </div>
            </div>
            <div className={styles.row}>
              <input className={styles.input} type="text" placeholder="Adresse"/>
            </div>
            <div className={styles.row}>
              <input className={clsx(styles.input, styles.email)} type="text" placeholder="Entrez votre mail ou téléphone"/>
              <a href="#" className={styles.button}>Envoyer la demande</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EstimateForm
