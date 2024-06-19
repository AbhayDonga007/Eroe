import { CardProduct } from '@/components/Card'
import { Nav } from '@/components/Nav'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <Nav />
        <CardProduct />
    </div>
  )
}

export default page;