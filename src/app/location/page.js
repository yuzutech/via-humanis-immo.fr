import {SliceZone} from '@prismicio/react'
import IllustratedContent from '@/slices/IllustratedContent'
import Strengths from '@/slices/Strengths'
import Offers from '@/slices/Offers'
import ContactBlock from '@/slices/ContactBlock'

import {createClient} from '../../../prismicio.js'

async function getPage() {
  const client = createClient()
  return client.getSingle('location')
}

export default async function RentPage() {
  const page = await getPage()
  return <SliceZone slices={page.data.slices} components={{
    overview: IllustratedContent,
    strengths: Strengths,
    offers: Offers,
    contact_block: ContactBlock
  }}/>
}
