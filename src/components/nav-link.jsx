"use client"
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navlink = ({ children, className, href}) => {
    const pathname = usePathname()
    const isActive = pathname === href || pathname.startsWith(href + '/')
  return (
    <div>
      <Link href={href} className={cn('text-xl font-semibold hover:underline', isActive ? 'text-orange-500' : 'text-white')}>{ children }</Link>
    </div>
  )
}

export default Navlink
