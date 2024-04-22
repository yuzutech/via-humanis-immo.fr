import {PrismicRichText} from '@prismicio/react'
import Image from 'next/image'

import styles from './testimonies.module.css'

/**
 * @typedef {import('@prismicio/client').Content.TestimoniesSlice} TestimoniesSlice
 * @typedef {import('@prismicio/react').SliceComponentProps<TestimoniesSlice>} TestimoniesProps
 * @param {TestimoniesProps}
 */
const Testimonies = ({slice}) => {
  return (
    <section className={styles.container} data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <div className={styles.content}>
        <h2 className={styles.title}>{slice.primary.title}</h2>
        <div className={styles.introduction}>
          <PrismicRichText
            field={slice.primary.introduction}
            components={{
              paragraph: ({children}) => <p className={styles.paragraph}>{children}</p>,
            }}
          />
        </div>
        <div className={styles.items}>
          {slice.items.map((item, index) => {
            const dateFormat = new Intl.DateTimeFormat("fr-FR", {
              day: "2-digit",
              month: "short",
              year: "numeric"
            }).format(new Date(item.date));
            return (<div key={index} className={styles.item}>
              <header>
                {item.image.url && <Image src={item.image.url} alt={item.image.alt || ''} width="80" height="80" aria-hidden={true}/>}
                <div className={styles.information}>
                  <h4 className={styles.name}>{item.name}</h4>
                  <h5 className={styles.job}>{item.info}</h5>
                  <span>{item.date}</span>
                  <div className={styles.date}>nous fait confiance depuis le {dateFormat}</div>
                </div>
              </header>
              <div className={styles.text}>
                <div className={styles.paragraphs}>
                  <PrismicRichText
                    field={item.testimony}
                    components={{
                      paragraph: ({children}) => <p className={styles.paragraph}>{children}</p>,
                    }}
                  />
                </div>
              </div>
            </div>)
          })}
        </div>
      </div>
    </section>
  )
}

export default Testimonies
