'use client'

import {useState} from 'react'
import Image from 'next/image'

import styles from './map.module.css'


export default function Map({address}) {
  const key = 'AIzaSyDfghWdc2EOxk_oyYNB5-1ei-Uv9F8Fnx8'
  const [showMap, setShowMap] = useState(false)
  const encodedAddress = encodeURI(address)

  return (
    <Image
      className={!showMap && styles.hidden}
      src={`https://maps.googleapis.com/maps/api/staticmap?center=${encodedAddress}&zoom=14&size=700x320&markers=color:245F8D|${encodedAddress}&key=${key}`}
      placeholder={'blur'}
      blurDataURL="/blank.svg"
      alt=""
      width="700"
      height="320"
      onLoad={() =>  setShowMap(true)}
      onError={() => {
        setShowMap(false)
      }}
      aria-hidden={true}/>
  )
}
