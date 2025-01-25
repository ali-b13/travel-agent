import Image from 'next/image'
import React from 'react'
import logoSrc from "@/public/assests/logo.jpg"
const Logo = () => {
  return (
    <div className='flex gap-3 items-center'>
        <p className='text-dark font-amiri text-2xl font-extrabold'>فلاي </p>
        <Image src={logoSrc} height={80} width={100} alt='logo'/>
    </div>
  )
}

export default Logo