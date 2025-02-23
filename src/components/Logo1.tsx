import Image from 'next/image'
import React from 'react'
import logo from '@/images/Aavkar2.png'

type Props = {}

const Logo1 = (props: Props) => {
  return (
    <Image src={logo} alt="Logo" className="w-[150px] flex items-center" />
  )
}

export default Logo1