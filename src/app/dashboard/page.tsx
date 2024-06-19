"use client"
import Banner from '@/components/Banner';
import { CardProduct } from '@/components/Card';
import { Footer } from '@/components/Footer';
import { Nav } from '@/components/Nav';
import { Newsletter } from '@/components/Newsletter';
import { Button } from '@/components/ui/button';
import React from 'react'
import toast from 'react-hot-toast';

type Props = {}

const DashBoard = (props: Props) => {
  
  return (
    <>
        {/* <div>DashBoard</div>
        <div>Name : {session?.user?.name}</div>
        <div>Email : {session?.user?.email}</div>
        <Button onClick={() => {
          toast.success("Logout Successful")
          signOut()
        }}>Logout</Button> */}

      <Nav />
      <Banner />
      <CardProduct />
      <Newsletter />
      <Footer />
    </>
  )
}

export default DashBoard;