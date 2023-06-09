'use client'

import {PrismicRichText} from '@prismicio/react'
import Image from 'next/image'

import styles from './teamCallout.module.css'
import Link from 'next/link'
import clsx from 'clsx'
import {GeistProvider, useModal} from '@geist-ui/core'
import {useCallback} from 'react'
import ContactModal from '@/components/contactModal.js'

/**
 * @typedef {import("@prismicio/client").Content.TeamCalloutSlice} TeamCalloutSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TeamCalloutSlice>} TeamCalloutProps
 * @param {TeamCalloutProps}
 */
const TeamCallout = ({ slice }) => {
  const { setVisible, bindings} = useModal()
  const openContactForm = useCallback(() => {
    setVisible(true)
  }, [setVisible])
  return (
    <GeistProvider>
      <section className={styles.container} data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
        <div className={styles.content}>
          <Image className={styles.illustration} src={slice.primary.illustration.url} alt={slice.primary.illustration.alt || ''} width="1200" height="320" aria-hidden={true}/>
          <div className={styles.text}>
            <h2 className={styles.title}>{slice.primary.title}</h2>
            <div>
              <PrismicRichText
                field={slice.primary.text}
                components={{
                  paragraph: ({children}) => <p className={styles.paragraph}>{children}</p>,
                }}
              />
            </div>
            <div className={styles.actions}>
              <a className={clsx(styles.button, styles.contact)} onClick={openContactForm}><span className={styles.contactText}>{slice.primary.contact_text_button}</span></a>
              <Link className={clsx(styles.button, styles.about)} href="/qui-sommes-nous"><span className={styles.aboutText}>{slice.primary.about_text_button}</span></Link>
            </div>
          </div>
        </div>
      </section>
      <ContactModal setVisible={setVisible} bindings={bindings}/>
    </GeistProvider>
  );
};

export default TeamCallout;
