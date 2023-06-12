'use client'

import styles from './contact.module.css'
import Input from '@/components/input.js'
import TextArea from '@/components/textarea.js'
import Button from '@/components/button.js'
import {useInput} from '@geist-ui/core'
import {useCallback} from 'react'

export default function Contact() {
  const {state: lastname, bindings: lastnameBindings} = useInput('')
  const {state: firstname, bindings: firstnameBindings} = useInput('')
  const {state: phone, bindings: phoneBinding} = useInput('')
  const {state: email, bindings: emailBinding} = useInput('')
  const {state: message, bindings: messageBinding} = useInput('')
  const handleSubmitForm = useCallback(() => {
    console.log({
      lastname, firstname, phone, email, message
    })
  }, [lastname, firstname, phone, email, message])
  return (<div>
    <header className={styles.header}>
      <h3 className={styles.contactName}>Via Humanis Immobilier</h3>
      <div className={styles.contactTel}>04 00 00 00 00</div>
      <div className={styles.contactEmail}>hello@vh-immobilier.fr</div>
    </header>
    <div className={styles.form}>
      <label className={styles.label}>Je souhaite être recontacté(e)</label>
      <div className={styles.fields}>
        <Input bindings={lastnameBindings} label="Votre nom" type="text"/>
        <Input bindings={firstnameBindings} label="Votre prénom" type="text"/>
        <Input bindings={phoneBinding} label="Votre numéro de téléphone" type="text"/>
        <Input bindings={emailBinding} label="Votre email" type="text"/>
      </div>
      <TextArea bindings={messageBinding} placeholder="Votre message (facultatif)"/>
      <Button className={styles.sendButton} text="Envoyer" handleClick={handleSubmitForm}></Button>
    </div>
  </div>)
}
