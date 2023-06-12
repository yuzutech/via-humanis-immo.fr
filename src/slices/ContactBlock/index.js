'use client'

import {PrismicRichText} from '@prismicio/react'
import Image from 'next/image'
import {GeistProvider, useModal} from '@geist-ui/core'
import {useCallback} from 'react'

import styles from './contactBlock.module.css'
import ContactModal from '@/components/contactModal.js'

/**
 * @typedef {import('@prismicio/client').Content.ContactBlockSlice} ContactBlockSlice
 * @typedef {import('@prismicio/react').SliceComponentProps<ContactBlockSlice>} ContactBlockProps
 * @param {ContactBlockProps}
 */
const ContactBlock = ({slice}) => {
  const { setVisible, bindings} = useModal()
  const openContactForm = useCallback(() => {
    setVisible(true)
  }, [setVisible])
  return (
    <GeistProvider>
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
            <a className={styles.button} onClick={openContactForm}><span className={styles.buttonText}>Nous contacter</span></a>
          </div>
          <div className={styles.illustration}>
            <Image src={slice.primary.illustration.url} alt={slice.primary.illustration.alt || ''} width="400" height="834" aria-hidden={true}/>
          </div>
        </div>
      </section>
      <ContactModal setVisible={setVisible} bindings={bindings}/>
    </GeistProvider>
  )
}

export default ContactBlock
