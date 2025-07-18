import { useCallback, useEffect, useMemo, useState } from 'react'
import {Modal, useInput} from '@geist-ui/core'
import clsx from 'clsx'

import Select from '@/components/select.js'
import Input from '@/components/input.js'
import TextArea from '@/components/textarea.js'
import Button from '@/components/button.js'

import styles from './contactModal.module.css'

export default function ContactModal({setVisible, bindings, type = 'gestion-locative'}) {
  const {state: object, setState: setObject, bindings: objectBindings} = useInput(type)
  const {state: email, setState: setEmail, bindings: emailBindings} = useInput('')
  const {state: message, setState: setMessage, bindings: messageBinding} = useInput('')
  const [formState, setFormState] = useState({state: 'invalid', error: null})
  const contactPhoneNumber = useMemo(() => {
    if (object === 'gestion-locative') {
      return '04 72 17 99 21'
    }
    return '04 85 92 98 41'
  }, [object])
  const telContactPhoneNumber = useMemo(() => `tel:+33${contactPhoneNumber.substring(1).replaceAll(' ', '')}`, [contactPhoneNumber])

  const handleSubmitForm = useCallback(() => {
    setFormState({state: 'sending', error: null})
    const formData = new FormData()
    formData.set('form-name', 'contact')
    formData.set('object', object)
    formData.set('email', email)
    formData.set('message', message)
    fetch('/', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => setFormState({state: 'success', error: null}))
      .catch((error) => setFormState({state: 'error', error}))
  }, [setFormState, object, email, message])

  useEffect(() => {
    if (email && email.trim() !== '' && object && object.trim() !== '' && message && message.trim() !== '') {
      setFormState({state: 'valid', error: null})
    } else {
      setFormState({state: 'invalid', error: null})
    }
  }, [email, message])

  return (<Modal {...bindings} disableBackdropClick={true} onClose={() => {
    setVisible(false)
    setObject('gestion-locative')
    setEmail('')
    setMessage('')
  }}>
    <Modal.Title>
      Contactez-nous
      <div onClick={() => {
        setVisible(false)
        setObject('gestion-locative')
        setEmail('')
        setMessage('')
      }} className={styles.closeIcon}></div>
    </Modal.Title>
    <Modal.Content>
      <h5 className={styles.contactTitle}>Par mail ou téléphone</h5>
      <div className={styles.contactEmail}><a href="mailto:contact@via-humanis-immo.fr">contact@via-humanis-immo.fr</a></div>
      <div className={styles.contactPhone}><a href={telContactPhoneNumber}>{contactPhoneNumber}</a></div>
      {formState.state === 'success' && <div className={styles.success}>Formulaire de contact envoyé.<br/>Nous reviendrons vers vous rapidement.</div>}
      {formState.state === 'error' && <div className={styles.error}>Impossible d&rsquo;envoyer le formulaire.<br/>Merci de nous contacter directement par email ou par téléphone.</div>}
      {formState.state !== 'success' && formState.state !== 'error' && <form className={styles.contactForm}>
        <fieldset disabled={formState.state === 'sending'}>
          <input type="hidden" name="form-name" value="contact"/>
          <h5 className={styles.contactTitle}>Par formulaire</h5>
          <label>Objet du message</label>
          <Select className={styles.objectSelect} values={{
            'gestion-locative': 'Gestion locative',
            'location': 'Mise en location',
            'vente': 'Mise en vente',
          }} state={object} bindings={objectBindings}/>
          <label>Email</label>
          <Input bindings={emailBindings} state={email} className={styles.emailInput} placeholder="Entrez votre email" type="text"/>
          <label>Contenu du message</label>
          <TextArea bindings={messageBinding} className={styles.messageTextarea} placeholder="Entrez votre message"/>
        </fieldset>
        <Button text="Envoyer" handleClick={handleSubmitForm} className={clsx(styles.contactSubmitButton, (formState.state === 'invalid' || formState.state === 'sending') && styles.disabled)} disabled={formState.state === 'invalid' || formState.state === 'sending'}/>
      </form>}
    </Modal.Content>
  </Modal>)
}
