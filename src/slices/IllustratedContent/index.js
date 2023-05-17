import {PrismicRichText} from '@prismicio/react'
import styles from './illustratedContent.module.css'
import Image from 'next/image'

/**
 * @typedef {import('@prismicio/client').Content.OverviewSlice} OverviewSlice
 * @typedef {import('@prismicio/react').SliceComponentProps<OverviewSlice>} OverviewProps
 * @param {OverviewProps}
 */
export default function IllustratedContent({slice}) {
  return (
    <section className={styles.container} data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <Image className={styles.illustration} src={slice.primary.illustration.url} alt={slice.primary.illustration.alt || ''} width="576" height="400" priority={true} aria-hidden={true}/>
      <div className={styles.text}>
        <h1 className={styles.title}>{slice.primary.title}</h1>
        <PrismicRichText
          field={slice.primary.text}
          components={{
            paragraph: ({children}) => <p className={styles.paragraph}>{children}</p>,
          }}
        />
      </div>
    </section>
  )
}
