import {PrismicRichText} from '@prismicio/react'
import styles from './pricingTier.module.css'
import Image from 'next/image'

/**
 * @typedef {import('@prismicio/client').Content.PricingTierSlice} PricingTierSlice
 * @typedef {import('@prismicio/react').SliceComponentProps<PricingTierSlice>} PricingTierProps
 * @param {PricingTierProps}
 */
const PricingTier = ({slice}) => {
  return (
    <section className={styles.card} data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <div>
        <Image className={styles.illustration} src={slice.primary.illustration.url} alt={slice.primary.illustration.alt} aria-hidden={true} width="100" height="100"/>
        <h4>{slice.primary.name}</h4>
        <h5>{slice.primary.tagline}</h5>
      </div>
      <div>
        <PrismicRichText
          field={slice.primary.description}
          components={{
            paragraph: ({children}) => <p>{children}</p>,
          }}
        />
      </div>
      <a href="#">Je suis intéressé(e)</a>
    </section>
  )
}

export default PricingTier
