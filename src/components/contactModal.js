import {useCallback} from 'react'
import {Modal, useInput} from '@geist-ui/core'

import Select from '@/components/select.js'
import Input from '@/components/input.js'
import TextArea from '@/components/textarea.js'
import Button from '@/components/button.js'

import styles from './contactModal.module.css'

export default function ContactModal({setVisible, bindings}) {
  const {state: object, bindings: objectBindings} = useInput('gestion-locative')
  const {state: email, bindings: emailBindings} = useInput('')
  const {state:message, bindings: messageBinding} = useInput('')
  const handleSubmitForm = useCallback(() => {
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
      .then(() => console.log('Form successfully submitted'))
      .catch((error) => alert(error))
  }, [object, email, message])
  return (<Modal {...bindings}>
    <Modal.Title>
      Contactez-nous
      <div onClick={() => setVisible(false)} className={styles.closeIcon}></div>
    </Modal.Title>
    <Modal.Content>
      <form className={styles.contactForm} data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <h5 className={styles.contactTitle}>Par mail ou téléphone</h5>
        <div className={styles.contactEmail}><a href="mailto:hello@vh-immobilier.fr">hello@vh-immobilier.fr</a></div>
        <div className={styles.contactPhone}><a href="tel:+33400000000">04 00 00 00 00</a></div>
        <h5 className={styles.contactTitle}>Par formulaire</h5>
        <label>Objet du message</label>
        <Select className={styles.objectSelect} values={{
          'gestion-locative': 'Gestion locative',
          'location': 'Mise en location',
          'vente': 'Mise en vente',
        }} state={object} bindings={objectBindings}/>
        <label>Email</label>
        <Input bindings={emailBindings} state={email} className={styles.emailInput} placeholder="Entrez votre email"
               type="text"/>
        <label>Contenu du message</label>
        <TextArea bindings={messageBinding} className={styles.messageTextarea} placeholder="Entrez votre message"/>
        <Button text="Envoyer" handleClick={handleSubmitForm} className={styles.contactSubmitButton}/>
      </form>
    </Modal.Content>
  </Modal>)
}
