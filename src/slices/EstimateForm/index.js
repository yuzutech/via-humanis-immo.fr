'use client'

import {useCallback, useEffect, useState} from 'react'
import clsx from 'clsx'
import {useInput} from '@geist-ui/core'

import {PrismicNextImage} from '@prismicio/next'
import {PrismicRichText} from '@prismicio/react'
import {usePathname} from 'next/navigation'

import Button from '@/components/button.js'

import styles from './estimateForm.module.css'

/**
 * @typedef {import('@prismicio/client').Content.EstimateFormSlice} EstimateFormSlice
 * @typedef {import('@prismicio/react').SliceComponentProps<EstimateFormSlice>} EstimateFormProps
 * @param {EstimateFormProps}
 */
const EstimateForm = ({slice}) => {
  const {state: category, bindings: categoryBindings} = useInput('')
  const {state: rooms, bindings: roomsBindings} = useInput('')
  const {state: address, bindings: addressBinding} = useInput('')
  const {state: contactInfo, bindings: contactInfoBinding} = useInput('')
  const [formState, setFormState] = useState({state: 'invalid', error: null})
  const type = usePathname().replace('/', '')
  const handleSubmitForm = useCallback(() => {
    setFormState({state: 'sending', error: null})
    const formData = new FormData()
    formData.set('form-name', 'estimation')
    formData.set('type', type)
    formData.set('propertyCategory', category)
    formData.set('propertyRooms', rooms)
    formData.set('propertyAddress', address)
    formData.set('contactInfo', contactInfo)
    fetch('/', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => setFormState({state: 'success', error: null}))
      .catch((error) => setFormState({state: 'error', error}))
  }, [category, rooms, address, contactInfo, type])
  useEffect(() => {
    if (category && category.trim() !== '' && rooms && rooms.trim() !== '' && address && address.trim() !== '' && contactInfo && contactInfo.trim() !== '') {
      setFormState({state: 'valid', error: null})
    } else {
      setFormState({state: 'invalid', error: null})
    }
  }, [category, rooms, address, contactInfo])
  return (
    <section className={styles.container} data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <div className={styles.content}>
        <div className={styles.illustration}>
          <PrismicNextImage field={slice.primary.illustration}/>
        </div>
        <div className={styles.text}>
          <h2 className={styles.title}>{slice.primary.title}</h2>
          <div className={styles.description}>
            <PrismicRichText field={slice.primary.description}/>
          </div>
          <div className={styles.form}>
            {formState.state === 'success' && <div className={styles.success}>Formulaire envoyé.<br/>Nous reviendrons vers vous rapidement.</div>}
            {formState.state === 'error' && <div className={styles.error}>Impossible d&rsquo;envoyer le formulaire.<br/>Merci de nous contacter directement par email ou par téléphone.</div>}
            {formState.state !== 'success' && formState.state !== 'error' && <fieldset className={styles.fields} disabled={formState.state === 'sending'}>
              <div className={styles.row}>
                <div className={clsx(styles.select, styles.category)}>
                  <select {...categoryBindings}>
                    <option value="" disabled hidden>Type</option>
                    <option value="appartement">Appartement</option>
                    <option value="maison">Maison</option>
                  </select>
                </div>
                <div className={clsx(styles.select, styles.rooms)}>
                  <select {...roomsBindings}>
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
                <input {...addressBinding} className={styles.input} type="text" placeholder="Adresse"/>
              </div>
              <div className={styles.row}>
                <input {...contactInfoBinding} className={clsx(styles.input, styles.email)} type="text" placeholder="Entrez votre mail ou téléphone"/>
                <Button className={clsx(styles.button, (formState.state === 'invalid' || formState.state === 'sending') && styles.disabled)} text="Envoyer la demande" handleClick={handleSubmitForm}></Button>
              </div>
            </fieldset>}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EstimateForm
