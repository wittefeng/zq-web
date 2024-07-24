'use client'
import Link from 'next/link'
import React from 'react'

import { usePathname } from 'next/navigation'
import { navList } from './routes'
const NavBar = () => {
  const pathname = usePathname()
  // 导航item
  const navItem = (obj: any) => {
    return (
      <Link
        href={obj?.href}
        key={obj?.href}
        className={`inline-block ${
          pathname === obj?.href ? 'text-cyan-800' : ''
        } hover:text-cyan-800`}
      >
        {obj.title}
      </Link>
    )
  }
  return (
    <nav className="flex border-t border-t-black mt-2 pt-3 justify-between text-slate-700">
      {navList?.map((v) => navItem(v))}
    </nav>
  )
}

export default NavBar
