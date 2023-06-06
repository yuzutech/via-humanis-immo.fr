'use client'

import styles from './contact.module.css'
import Input from '@/app/input.js'

export default function Contact() {
  return (<div>
    <header className={styles.header}>
      <h3 className={styles.contactName}>Via Humanis Immobilier</h3>
      <div className={styles.contactTel}>04 00 00 00 00</div>
      <div className={styles.contactEmail}>hello@vh-immobilier.fr</div>
    </header>
    <div className={styles.form}>
      <label className={styles.label}>Je souhaite être recontacté(e)</label>
      <div className={styles.fields}>
        <Input label="Votre nom" type="text" />
        <Input label="Votre prénom" type="text" />
        <Input label="Votre numéro de téléphone" type="text" />
        <Input label="Votre email" type="text" />
      </div>
      <div>
        <textarea
          className={styles.textarea}
          placeholder="Votre message (facultatif)"
          onBlur={() => {

          }}
          onFocus={() => {

          }}
          onChange={(event) => {

          }}
        />
      </div>
      <a className={styles.sendButton}>
        Envoyer
      </a>
    </div>
  </div>)
}
