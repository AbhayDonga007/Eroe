"use client";
import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
import {Input, Select, SelectItem} from "@nextui-org/react";
import {Button} from "@nextui-org/button";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Checkbox } from "@nextui-org/react";
interface Product{
  name: string,
  des: string,
  type: Array<string>,
  size: Array<string>,
  oriPrice: number,
  disPrice: number,
  image: string
}

const page = () => {

  
  
  const [product,setProduct] = useState<Product>({
    name:"",
    des:'',
    type:[],
    size:[],
    oriPrice:0,
    disPrice:0,
    image:'',
  })
  const types = [
    {key: "type1", label: "Type 1"},
    {key: "type2", label: "Type 2"},
    {key: "type3", label: "Type 3"},
    {key: "type4", label: "Type 4"},
    {key: "type5", label: "Type 5"},
  ]
  const sizes = [
    {key: "size1", label: "Size 1"},
    {key: "size2", label: "Size 2"},
    {key: "size3", label: "Size 3"},
    {key: "size4", label: "Size 4"},
    {key: "size5", label: "Size 5"},
  ]
  const handleSubmit = async () => {
    // console.log(product);
    const Product = await fetch("/api/product",{
      method:'POST',
      // crossDomain: true,
      headers:{
        "Content-Type":"application/json",
        // Accept : "application/json",
        // "Access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify(product),
    });
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e);
    // let render = new FileReader();
    // render.readAsDataURL(e.target.files![0])
    // render.onload = () => {
    //   console.log(render.result);
    //   setProduct({...product,image: render.result});
    // }
    // render.onerror = () => {
    //   console.log("Error");
    // }


    let files = e.target.files;
    // console.log(files);
    let reader = new FileReader();
    if(files![0]){
      reader.readAsDataURL(files![0]);
    }

    reader.onload = e => {
        // console.log(reader.result);
        setProduct({...product,image: reader.result as string});
    };
    reader.onerror = () => {
      console.log("Error");
    }
  };


  return (
    <div
      key="1"
      className="flex flex-col items-center justify-center min-h-screen py-12 sm:px-6 lg:px-8 bg-gray-300"
    >
      <div className="w-full max-w-[900px] space-y-6 bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50">
            Welcome Back
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Enter your email below to login to your account
          </p>
        </div>

        <div className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <div className="w-full flex flex-col gap-4">
                    <div key="md" className="flex w-full flex-wrap flex-nowrap mb-6 mb-0 gap-4">
                      <Input onChange={(e) => setProduct({...product,name:e.target.value})} size="md" type="text" label="Product Name" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="w-full flex flex-col gap-4">
                    <div key="md" className="flex w-full flex-wrap flex-nowrap mb-6 mb-0 gap-4">
                      <Input onChange={(e) => setProduct({...product,des:e.target.value})} size="md" type="text" label="Product Description" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="w-full flex flex-col gap-4">
                    <div key="md" className="flex w-full flex-wrap flex-nowrap mb-6 mb-0 gap-4">
                      <Select
                        label="Product Type"
                        // selectionMode="multiple"
                        className="max-w-xs"
                        onChange={(e) => setProduct({...product,type:[e.target.value]})}
                      >
                        {types.map((type) => (
                          <SelectItem key={type.key}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <div className="w-full flex flex-col gap-4">
                    <div key="md" className="flex w-full flex-wrap flex-nowrap mb-6 mb-0 gap-4">
                      <Input onChange={(e) => setProduct({...product,oriPrice:Number(e.target.value)})} size="md" type="number" label="Original Prize" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="w-full flex flex-col gap-4">
                    <div key="md" className="flex w-full flex-wrap flex-nowrap mb-6 mb-0 gap-4">
                      <Input onChange={(e) => setProduct({...product,disPrice:Number(e.target.value)})} size="md" type="number" label="Product Prize" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  {/* <Label htmlFor="last-name">Size</Label>
                  <Input id="last-name" placeholder="Size" /> */}
                  <Select
                    label="Product Size"
                    selectionMode="multiple"
                    className="max-w-xs"
                    onChange={(e) => setProduct({...product,size:[e.target.value]})}
                  >
                    {sizes.map((size) => (
                      <SelectItem  key={size.key}>
                        {size.label}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">Upload Images</Label>
                  {/* <Input type="file" accept="image/*" placeholder="Image" onChange={handleImageUpload}/> */}
                  <div className="w-full flex flex-col gap-4">
                    <div key="md" className="flex w-full flex-wrap flex-nowrap mb-6 mb-0 gap-4">
                      <Input type="file" accept="image/*" placeholder="Image" onChange={handleImageUpload} />
                    </div>
                  </div>
                </div>
                {/* {image=="" || image == null ? "" : <Image alt='Image' width={100} height={100} src={image} />} */}
                
                
                {/* <div className="space-y-2">
                  <Label htmlFor="last-name">Product Prize</Label>
                  <Input id="last-name" placeholder="Description" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Size</Label>
                  <Input id="last-name" placeholder="Type" />
                </div> */}
              </div>
            </div>
            <Button onClick={handleSubmit} className="w-full bg-black text-white">Save</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
