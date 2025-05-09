import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import React from 'react'

export const Content = ({ headline, image, text}) => {
  return (
    <section>
        <div className='w-full aspect-video wrapper rounded-xl overflow-hidden my-10'>
            <Image className='w-full h-full object-cover rounded-xl' src={urlFor(image.asset).url()} alt={image.alt} width={1080} height={900}/>
        </div>
        <h1 className='wrapper font-bold text-4xl text-center mb-5'>{headline}</h1>
        <div className='wrapper mb-10'>
            <p>{text}</p>
        </div>
    </section>
  )
}
