import { Card, CardBody, CardFooter } from '@nextui-org/react'
import React from 'react'
import Image from 'next/image'
import img1 from "@/images/india (1).png"
import img2 from "@/images/free-shipping.png"
import img3 from "@/images/cash-on-delivery.png"
import img4 from "@/images/return-box.png"
import img5 from "@/images/quality.png"

type Props = {}

const QualityProduct = (props: Props) => {
    const list = [
        {
          title: "Made In India",
          img: img1,
        },
        {
          title: "Free Shipping",
          img: img2,
        },
        {
          title: "Cash On Delivery",
          img: img3,
        },
        {
          title: "Easy To Return",
          img: img4,
        },
        {
          title: "Excellent Quality",
          img: img5,
        },
      ];
  return (
    <div className="mr-[10%] ml-[10%] mt-[2%] mb-[2%] gap-4 grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-5">
      {list.map((item, index) => (
        <Card className='items-center' shadow="md" key={index}>
          <CardBody className="overflow-visible p-3">
            <Image
              alt={item.title}
              className="w-full object-contain h-[130px]"
              src={item.img}
            />
            <p className="text-lg text-center pt-3 font-bold">{item.title}</p>   
          </CardBody>
        </Card>
      ))}
    </div>
  )
}

export default QualityProduct