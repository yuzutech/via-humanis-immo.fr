'use client'

import {useCallback, useEffect, useState} from 'react'
import clsx from 'clsx'
import {useInput} from '@geist-ui/core'

import Input from '@/components/input.js'
import TextArea from '@/components/textarea.js'
import Button from '@/components/button.js'

import styles from './contact.module.css'

export default function Contact({id}) {
  const {state: lastname, bindings: lastnameBindings} = useInput('')
  const {state: firstname, bindings: firstnameBindings} = useInput('')
  const {state: phone, bindings: phoneBinding} = useInput('')
  const {state: email, bindings: emailBinding} = useInput('')
  const {state: message, bindings: messageBinding} = useInput('')
  const [formState, setFormState] = useState({state: 'invalid', error: null})
  const handleSubmitForm = useCallback(() => {
    setFormState({state: 'sending', error: null})
    const formData = new FormData()
    formData.set('form-name', 'annonce')
    formData.set('lastname', lastname)
    formData.set('firstname', firstname)
    formData.set('phone', phone)
    formData.set('email', email)
    formData.set('message', message)
    formData.set('id', id)
    fetch('/', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => setFormState({state: 'success', error: null}))
      .catch((error) => setFormState({state: 'error', error}))
  }, [lastname, firstname, phone, email, message, id])
  useEffect(() => {
    if (lastname && lastname.trim() !== '' && firstname && firstname.trim() !== '' && phone && phone.trim() !== '' && email && email.trim() !== '') {
      setFormState({state: 'valid', error: null})
    } else {
      setFormState({state: 'invalid', error: null})
    }
  }, [lastname, firstname, email, phone])
  return (<div>
    <header className={styles.header}>
      <h3 className={styles.contactName}>Via Humanis Immobilier</h3>
      <div className={styles.contactTel}>04 00 00 00 00</div>
      <div className={styles.contactEmail}>hello@vh-immobilier.fr</div>
    </header>
    <div className={styles.form}>
      {formState.state === 'success' && <div className={styles.success}>Formulaire envoyé.<br/>Nous reviendrons vers vous rapidement.</div>}
      {formState.state === 'error' && <div className={styles.error}>Impossible d&rsquo;envoyer le formulaire.<br/>Merci de nous contacter directement par email ou par téléphone.</div>}
      {formState.state !== 'success' && formState.state !== 'error' && <fieldset disabled={formState.state === 'sending'}>
        <label className={styles.label}>Je souhaite être recontacté(e)</label>
        <div className={styles.fields}>
          <input hidden="true" name="id" value={id}/>
          <Input bindings={lastnameBindings} label="Votre nom" type="text"/>
          <Input bindings={firstnameBindings} label="Votre prénom" type="text"/>
          <Input bindings={phoneBinding} label="Votre numéro de téléphone" type="text"/>
          <Input bindings={emailBinding} label="Votre email" type="text"/>
        </div>
        <TextArea bindings={messageBinding} placeholder="Votre message (facultatif)"/>
        <Button className={clsx(styles.sendButton, (formState.state === 'invalid' || formState.state === 'sending') && styles.disabled)} text="Envoyer" handleClick={handleSubmitForm}></Button>
      </fieldset>
    }
    </div>
  </div>)
}
