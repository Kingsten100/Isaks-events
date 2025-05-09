import Link from 'next/link'
import React from 'react'
import { getPages } from '@/sanity/lib/api'
import Navlink from './nav-link'

export const Navbar = async () => {

  const pages = await getPages()

  return (
    <div className='bg-blue-950 mb-5'>
      <nav className='wrapper flex justify-between items-center py-4 text-white'>
        <Link href='/' className='text-3xl font-bold'>Isaks Events</Link>
        <ul className='flex gap-4 '>
          {
            pages.map(page => (
              <li key={page._id}>
                <Navlink  href={`${page.slug === '/' ? '' : '/'}${page.slug}`}>{ page.title }</Navlink>
              </li>
            ))
          }
        </ul>
      </nav>

    </div>
  )
}
