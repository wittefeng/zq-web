import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NavBar from './NavBar'
const Header = () => {
  return (
    <header className="flex justify-center">
      <div className="text-left" style={{ width: '58.8rem' }}>
        <Link href="/" className="inline-block">
          <Image
            src="/logo.png"
            alt="logo Logo"
            className="dark:invert mt-3"
            width={280}
            height={62}
            priority
          />
        </Link>
        <NavBar />
      </div>
    </header>
  )
}

export default Header
