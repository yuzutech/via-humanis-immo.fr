import {createClient} from '../../../prismicio'

import {SliceZone} from '@prismicio/react'
import IllustratedContent from '@/slices/IllustratedContent'

async function getPage() {
  const client = createClient()
  return client.getSingle('about')
}

export default async function AboutPage() {
  const page = await getPage()
  return <SliceZone slices={page.data.slices} components={{
    overview: IllustratedContent,
  }}/>
}
