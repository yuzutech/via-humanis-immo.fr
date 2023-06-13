'use client'

import {GeistProvider, useModal} from '@geist-ui/core'
import {useCallback} from 'react'
import clsx from 'clsx'

import {PrismicRichText} from '@prismicio/react'
import Image from 'next/image'

import styles from './offers.module.css'
import ContactModal from '@/components/contactModal.js'

/**
 * @typedef {import('@prismicio/client').Content.OffersSlice} OffersSlice
 * @typedef {import('@prismicio/react').SliceComponentProps<OffersSlice>} OffersProps
 * @param {OffersProps}
 */
const Offers = ({slice}) => {
  const { setVisible, bindings} = useModal()
  const openContactForm = useCallback(() => {
    setVisible(true)
  }, [setVisible])
  return (
    <GeistProvider>
      <section className={styles.container} data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
        <div className={styles.content}>
          <h2 className={styles.title}>{slice.primary.title}</h2>
          <h3 className={styles.subtitle}>{slice.primary.subtitle}</h3>
          <div className={styles.items}>
            {slice.items.map((item) => {
              return (
                <div className={clsx(styles.item, item.recommended && styles.recommended, item.premium && styles.premium)}
                     key={item.key}>
                  <Image src={item.icon.url} alt={item.icon.alt || ''} aria-hidden={true} width="100" height="100"/>
                  <h4 className={styles.name}>{item.name}</h4>
                  <h5 className={styles.tagline}>{item.tagline}</h5>
                  <div className={styles.description}>
                    <PrismicRichText
                      field={item.description}
                      components={{
                        paragraph: ({children}) => <p className={styles.paragraph}>{children}</p>,
                      }}
                    />
                    <a className={styles.button} onClick={openContactForm}>{item.button}</a>
                  </div>
                </div>)
            })}
          </div>
        </div>
      </section>
      <ContactModal setVisible={setVisible} bindings={bindings}/>
    </GeistProvider>
  )
}

export default Offers
