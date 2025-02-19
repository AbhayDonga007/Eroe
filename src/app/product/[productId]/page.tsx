import { Product } from "@/components/Product";
import React from "react";

type Props = {
  params: {
    productId: string;
  };
};

const page =async ({ params }: Props) => {
  
  return(
    <div>
        <Product id={params.productId}/>
    </div>
  )
};

export default page;

