import { getEvents } from '@/sanity/lib/api'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Events = async ({ title }) => {

    const events = await getEvents()
  return (
    <section className='wrapper my-10'>
        <h2 className='text-4xl mb-10 font-bold'>{ title }</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
            {
                events && events.map(event => (
                    <Link key={event._id} href={`/events/${event.slug}`} className='border border-slate-300 rounded-xl overflow-hidden hover:border-2 hover:scale-105 trasition'>
                        <div className='w-full aspect-video'>
                            <Image 
                            src={event.image.url}
                            alt={event.image.alt}
                            width={300}
                            height={200}
                            className='w-full h-full object-cover'/>
                        </div>
                        <h3 className='text-center p-4 text-xl font-semibold'>{ event.title }</h3>
                    </Link>
                ))
            }

        </div>
    </section>
  )
}

export default Events
