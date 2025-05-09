import { getEventBySlug } from '@/sanity/lib/api'
import { GET_EVENT_QUERY } from '@/sanity/lib/queries'
import { PortableText } from 'next-sanity'
import Image from 'next/image'
import { client } from '@/sanity/lib/client'
import { notFound } from 'next/navigation'
import React from 'react'


export const generateMetadata = async ({ params }) => {

  const { slug } = await params

  const event = await client.fetch(GET_EVENT_QUERY, { slug })

  return {
    title: event.title
  }
}


const EventDetailPage = async ({ params }) => {

  const { slug } = await params

  const event = await getEventBySlug(slug)

  if(!event){
    return notFound()
  }

  console.log(event)
  return (
    <div className='wrapper'>
      <div className='w-full aspect-video'>
        <Image className='h-full w-full object-cover rounded-xl' src={event.image.url} alt={event.image.alt} height={700} width={900}/>
      </div>
      <div className='flex items-center justify-between my-10'>
        <h1 className='text-3xl font-bold'>{event.title}</h1>
        <div>
          <p><strong>Date: </strong>{new Date(event.date).toLocaleDateString()}</p>
          <p><strong>Time: </strong>{event.time}</p>
          <p><strong>Location: </strong>{event.location}</p>

        </div>
      </div>
      <div className='mb-10 prose lg:prose-xl'>
        <PortableText value={event.description}/>
      </div>
    </div>
  )
}

export default EventDetailPage
