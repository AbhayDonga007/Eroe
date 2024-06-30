import { Product } from "@/components/Product";
import React from "react";

type Props = {
  params: {
    productId: string;
  };
};

const page =async ({ params }: Props) => {
    // const id = params.productId
    // await new Promise((resolve) => setTimeout(resolve,1000));
  return(
    <div>
        <Product id={params.productId}/>
    </div>
  )
};

export default page;

