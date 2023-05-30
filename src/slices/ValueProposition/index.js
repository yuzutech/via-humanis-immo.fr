import {PrismicRichText} from '@prismicio/react'
import Image from 'next/image'

import styles from './valueProposition.module.css'

/**
 * @typedef {import('@prismicio/client').Content.ValuePropositionSlice} ValuePropositionSlice
 * @typedef {import('@prismicio/react').SliceComponentProps<ValuePropositionSlice>} ValuePropositionProps
 * @param {ValuePropositionProps}
 */
const ValueProposition = ({slice}) => {
  return (
    <section className={styles.container} data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <div className={styles.content}>
        <header>
          <Image src={slice.primary.illustration.url} alt={slice.primary.illustration.alt || ''} width="160" height="160" aria-hidden={true}/>
          <div className={styles.text}>
            <PrismicRichText
              field={slice.primary.text}
              components={{
                paragraph: ({children}) => <p className={styles.paragraph}>{children}</p>,
              }}
            />
          </div>
        </header>
        <div className={styles.items}>
          {slice.items.map((item, index) => {
            return (<div key={index} className={styles.item}>
              <Image src={item.illustration.url}  alt={item.illustration.alt || ''} width="80" height="80" aria-hidden={true}/>
              <h4>{item.title}</h4>
              <div className={styles.text}>
                <PrismicRichText
                  field={item.text}
                  components={{
                    paragraph: ({children}) => <p className={styles.paragraph}>{children}</p>,
                  }}
                />
              </div>
            </div>)
          })}
        </div>
      </div>
    </section>
  )
}

export default ValueProposition
