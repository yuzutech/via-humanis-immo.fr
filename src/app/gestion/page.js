import {SliceZone} from '@prismicio/react'
import IllustratedContent from '@/slices/IllustratedContent'
import Strengths from '@/slices/Strengths'
import Offers from '@/slices/Offers'
import ContactBlock from '@/slices/ContactBlock'

import {createClient} from '../../../prismicio.js'
import OffersCompare from '@/slices/OffersCompare'
import Projects from '@/slices/Projects'

async function getPage() {
  const client = createClient()
  return client.getSingle('gestion')
}

export default async function ManagementPage() {
  const page = await getPage()
  return <SliceZone slices={page.data.slices} components={{
    overview: IllustratedContent,
    strengths: Strengths,
    offers: Offers,
    contact_block: ContactBlock,
    offers_compare: OffersCompare,
    projects: Projects
  }}/>
}
