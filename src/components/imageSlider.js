'use client'

import {useCallback, useState} from 'react'
import clsx from 'clsx'
import Image from 'next/image'

import styles from './imageSlider.module.css'


/**
 *
 * @param {[]} images
 * @returns {JSX.Element}
 * @constructor
 */
export default function ImageSlider({images}) {
  const [index, setIndex] = useState(0)
  const next = useCallback(() => {
    if (index < images.length - 1) {
      setIndex(index + 1)
    }
  }, [setIndex, images, index])
  const previous = useCallback(() => {
    if (index > 0) {
      setIndex(index - 1)
    }
  }, [setIndex, index])
  if (images.length === 0) {
    return (<></>)
  }
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      {images.map((image, i) => <Image key={image} className={clsx(styles.image, i === index && styles.active)} src={'/data/pericles/images/' + image} alt="" height="400" width="700" aria-hidden={true}/>)}
      <div className={styles.toolbar}>
        <div onClick={previous} className={styles.previous}></div>
        <div onClick={next} className={styles.next}></div>
        <div className={styles.counter}>{index + 1}/{images.length} photos</div>
      </div>
    </div>
  )
}
