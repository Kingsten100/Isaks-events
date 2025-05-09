import Image from 'next/image'
import React from 'react'
import { cn } from '@/lib/utils'
import { urlFor } from '@/sanity/lib/image'

const Hero = ({headline, image}) => {

    const opacityLevel = image?.darken ? image.darken / 100 : 0

   

  return (
    <header className='h-96 flex flex-col justify-center items text-center relative mb-10'>
        <h1 className={cn('text-4xl md:text-6xl font-bold relative z-20', image && 'text-white')}>
            { headline }
        </h1>
        {
            image && (
                <>
                    <Image className='absolute w-full h-full object-cover z-0' src={urlFor(image.asset).url()} alt={image.alt} width={1080} height={900}/>
                    <div className='bg-black absolute z-10 inset-0' style={{ opacity: opacityLevel }}></div>
                </>
            )
        }

    </header>
  )
}

export default Hero
