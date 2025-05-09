import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

const Picture = ({ picture }) => {

  console.log(picture)
  return (
    <div className='wrapper rounded-xl mb-10 flex justify-center w-full'>
      <Image className='rounded-xl overflow-hidden w-full' src={urlFor(picture.asset).url()} alt={picture.alt} width={1080} height={900}/>
    </div>
  )
}

export default Picture
