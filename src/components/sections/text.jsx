import { PortableText } from 'next-sanity'
import React from 'react'

const Text = ({ text }) => {
  return (
    <div className='wrapper mb-10 prose lg:prose-xl'>
      <PortableText value={text}/>
    </div>
  )
}

export default Text
