import { Product } from "@/components/Product";
import React from "react";

type Props = {
  params: {
    productId: string;
  };
};

const page = ({ params }: Props) => {
    // const id = params.productId
  return(
    <div>
        <Product id={params.productId}/>
    </div>
  )
};

export default page;

