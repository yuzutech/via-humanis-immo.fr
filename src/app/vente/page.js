import {SliceZone} from '@prismicio/react'
import IllustratedContent from '@/slices/IllustratedContent'
import Strengths from '@/slices/Strengths'
import Offers from '@/slices/Offers'
import ContactBlock from '@/slices/ContactBlock'
import EstimateForm from '@/slices/EstimateForm'
import Projects from '@/slices/Projects'

import {createClient} from '../../../prismicio.js'

async function getPage() {
  const client = createClient()
  return client.getSingle('vente')
}

export default async function SalesPage() {
  const page = await getPage()
  return <SliceZone slices={page.data.slices} components={{
    overview: IllustratedContent,
    strengths: Strengths,
    offers: Offers,
    contact_block: ContactBlock,
    estimate_form: EstimateForm,
    projects: Projects
  }}/>
}
