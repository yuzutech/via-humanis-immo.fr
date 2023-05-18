import styles from './contactBlock.module.css'
import {PrismicRichText} from '@prismicio/react'
import Image from 'next/image'

/**
 * @typedef {import('@prismicio/client').Content.ContactBlockSlice} ContactBlockSlice
 * @typedef {import('@prismicio/react').SliceComponentProps<ContactBlockSlice>} ContactBlockProps
 * @param {ContactBlockProps}
 */
const ContactBlock = ({slice}) => {
  return (
    <section className={styles.container} data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <div className={styles.content}>
        <div className={styles.text}>
        <h2 className={styles.title}>{slice.primary.title}</h2>
          <PrismicRichText
            field={slice.primary.description}
            components={{
              paragraph: ({children}) => <p className={styles.paragraph}>{children}</p>,
            }}
          />
          <a className={styles.button} href="#"><span className={styles.buttonText}>Nous contacter</span></a>
        </div>
        <Image src={slice.primary.illustration.url} alt={slice.primary.illustration.alt || ''} width="400" height="834" aria-hidden={true}/>
      </div>
    </section>
  )
}

export default ContactBlock
