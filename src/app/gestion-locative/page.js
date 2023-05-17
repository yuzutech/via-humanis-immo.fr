import {SliceZone} from '@prismicio/react'
import IllustratedContent from '@/slices/IllustratedContent'
import Strengths from '@/slices/Strengths'

import {createClient} from '../../../prismicio.js'

async function getPage() {
  const client = createClient()

  return client.getSingle('gestion_locative')
}

export default async function GestionLocativePage() {
  const page = await getPage()
  return (<div>
    <SliceZone slices={page.data.slices} components={{
      overview: IllustratedContent,
      strengths: Strengths,
    }}/>
  </div>)
}
