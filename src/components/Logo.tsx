import Image from 'next/image'
import React from 'react'
import logo from '@/images/Eroe.png'

type Props = {}

const Logo = (props: Props) => {
  return (
    <Image src={logo} alt="Logo" className="w-[100px]" />
  )
}

export default Logo