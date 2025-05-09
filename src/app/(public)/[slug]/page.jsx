import { Sections } from '@/components/sections/sections'
import { getPageBySlug } from '@/sanity/lib/api'
import { GET_PAGE_QUERY } from '@/sanity/lib/queries'
import { client } from '@/sanity/lib/client'
import React from 'react'


export const generateMetadata = async ({ params }) => {

  const { slug } = await params

  const pageResult = await client.fetch(GET_PAGE_QUERY, { slug })

  return {
    title: pageResult.title,
    description: pageResult.description
  }
}




async function SlugPage({ params }) {

    const { slug } = await params

    const pageResult = await getPageBySlug(slug)

    
  return (
    <div>
      <div>
        <Sections sections={pageResult.sections} />
      </div>

    </div>
  )
}

export default SlugPage
