"use client";
import { Label } from "@/components/ui/label";
import { Input, Select, SelectItem } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { useState } from "react";
import Image from "next/image";
import Logo from "@/components/Logo";
import toast from "react-hot-toast";
interface Product {
  name: string;
  des: string;
  type: Array<string>;
  size: Array<string>;
  customerPrize: number;
  productPrize: number;
  retailPrize: number;
  artical_no: string;
  color: Array<string>;
  images: Array<string>;
}

const Page = () => {
  const [product, setProduct] = useState<Product>({
    name: "",
    des: "",
    type: [],
    size: [],
    customerPrize: 0,
    productPrize: 0,
    retailPrize: 0,
    artical_no: "",
    color: [],
    images: [],
  });
  const types = [
    { key: "Kurti", label: "Kurti" },
    { key: "Pant Pair", label: "Pant Pair" },
    { key: "Gown", label: "Gown" },
    { key: "Plaza Pair", label: "Plaza Pair" },
    { key: "Nayra Pair", label: "Nayra Pair" },
  ];
  const sizes = [
    { key: "L", label: "L" },
    { key: "M", label: "M" },
    { key: "S", label: "S" },
    { key: "XL", label: "XL" },
    { key: "XXL", label: "XXL " },
  ];

  const colors = [
    { key: "Red", label: "Red" },
    { key: "Green", label: "Green" },
    { key: "Blue", label: "Blue" },
    { key: "Pink", label: "Pink" },
    { key: "Yellow", label: "Yellow" },
    { key: "White", label: "White" },
    { key: "Black", label: "Black" },
    { key: "Mint Green", label: "Mint Green" },
    { key: "Orange", label: "Orange" },
    { key: "Purple", label: "Purple" },
    { key: "Olive", label: "Olive" },
    { key: "Magenta", label: "Magenta" },
  ];
  const handleSubmit = async () => {

    const res = await fetch("/api/product", {
      method: "POST",
      // crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        // Accept : "application/json",
        // "Access-Control-Allow-Origin":"*",
      },
      body: JSON.stringify(product),
    });

    if (res.status === 201) {
      toast.success("Product Added Successfully");
    } else {
      toast.error("Something is wrong");
    }
  };

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
    console.log(files);
    let reader = new FileReader();
    if (files![0]) {
      reader.readAsDataURL(files![0]);
    }

    reader.onload = (e) => {
      // console.log(reader.result);
      setProduct({
        ...product,
        images: [...product.images, reader.result as string],
      });
    };
    reader.onerror = () => {
      console.log("Error");
    };

    // const selectedFiles = Array.from(e.target.files);
    // console.log(selectedFiles);

    // selectedFiles.forEach((image) => {
    //   let reader = new FileReader();

    //   if (image) {
    //     reader.readAsDataURL(image);
    //   }

    //   reader.onload = (e) => {
    //     console.log(image,reader.result);
    //     setProduct({...product , images:[...product.images,reader.result as string]})
    //   }
    //   reader.onerror = () => {
    //     console.log("Error");

    //   }
    // });
  };

  return (
    <div
      key="1"
      className="flex flex-col items-center justify-center min-h-screen py-4 sm:px-6 lg:px-8 bg-gray-300"
    >
      <div className="w-full max-w-[900px] space-y-6 bg-white shadow-lg rounded-lg p-6">
        <div className="space-y-2 justify-center flex items-center text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            <Logo />
          </h1>
        </div>

        <div className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <div className="w-full flex flex-col gap-4">
                    <div
                      key="md"
                      className="flex w-full flex-wrap flex-nowrap mb-6 mb-0 gap-4"
                    >
                      <Input
                        onChange={(e) =>
                          setProduct({ ...product, name: e.target.value })
                        }
                        size="md"
                        type="text"
                        label="Product Name"
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="w-full flex flex-col gap-4">
                    <div
                      key="md"
                      className="flex w-full flex-wrap flex-nowrap mb-6 mb-0 gap-4"
                    >
                      <Input
                        onChange={(e) =>
                          setProduct({ ...product, des: e.target.value })
                        }
                        size="md"
                        type="text"
                        label="Product Description"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="w-full flex flex-col gap-4">
                    <div
                      key="md"
                      className="flex w-full flex-wrap flex-nowrap mb-6 mb-0 gap-4"
                    >
                      <Select
                        label="Product Type"
                        // selectionMode="multiple"
                        className="max-w-xs"
                        onChange={(e) =>
                          setProduct({ ...product, type: [e.target.value] })
                        }
                      >
                        {types.map((type) => (
                          <SelectItem key={type.key}>{type.label}</SelectItem>
                        ))}
                      </Select>
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
                    onChange={(e) =>
                      setProduct({ ...product, size: [e.target.value] })
                    }
                  >
                    {sizes.map((size) => (
                      <SelectItem key={size.key}>{size.label}</SelectItem>
                    ))}
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="w-full flex flex-col gap-4">
                    <div
                      key="md"
                      className="flex w-full flex-wrap flex-nowrap mb-6 mb-0 gap-4"
                    >
                      <Input
                        onChange={(e) =>
                          setProduct({
                            ...product,
                            customerPrize: Number(e.target.value),
                          })
                        }
                        size="md"
                        type="number"
                        label="Customer Prize"
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="w-full flex flex-col gap-4">
                    <div
                      key="md"
                      className="flex w-full flex-wrap flex-nowrap mb-6 mb-0 gap-4"
                    >
                      <Input
                        onChange={(e) =>
                          setProduct({
                            ...product,
                            productPrize: Number(e.target.value),
                          })
                        }
                        size="md"
                        type="number"
                        label="Product Prize"
                      />
                    </div>
                  </div>
                </div>
                {/* {image=="" || image == null ? "" : <Image alt='Image' width={100} height={100} src={image} />} */}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="w-full flex flex-col gap-4">
                    <div
                      key="md"
                      className="flex w-full flex-wrap flex-nowrap mb-6 mb-0 gap-4"
                    >
                      <Input
                        onChange={(e) =>
                          setProduct({
                            ...product,
                            retailPrize: Number(e.target.value),
                          })
                        }
                        size="md"
                        type="number"
                        label="Retail Prize"
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  {/* <Label htmlFor="last-name">Size</Label>
                  <Input id="last-name" placeholder="Size" /> */}
                  <Select
                    label="Product Colors"
                    selectionMode="multiple"
                    className="max-w-xs"
                    onChange={(e) =>
                      setProduct({ ...product, color: [e.target.value] })
                    }
                  >
                    {colors.map((color) => (
                      <SelectItem key={color.key}>{color.label}</SelectItem>
                    ))}
                  </Select>
                </div>
                {/* {image=="" || image == null ? "" : <Image alt='Image' width={100} height={100} src={image} />} */}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="w-full flex flex-col gap-4">
                    <div
                      key="md"
                      className="flex w-full flex-wrap flex-nowrap mb-6 mb-0 gap-4"
                    >
                      <Input
                        onChange={(e) =>
                          setProduct({ ...product, artical_no: e.target.value })
                        }
                        size="md"
                        type="text"
                        label="Artical No"
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="first-name">Upload Images</Label>
                  {/* <Input type="file" accept="image/*" placeholder="Image" onChange={handleImageUpload}/> */}
                  <div className="w-full flex flex-col gap-4">
                    <div
                      key="md"
                      className="flex w-full flex-wrap flex-nowrap mb-6 mb-0 gap-4"
                    >
                      <input
                        type="file"
                        accept="image/*"
                        id="product-images"
                        placeholder="Upload Image"
                        onChange={handleImageUpload}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Button
                onClick={handleSubmit}
                className="w-full bg-black text-white"
              >
                Save
              </Button>
              <div className="grid grid-cols-5 gap-4">
                {product.images.map((image) => (
                  <Image
                    key={image}
                    alt="Leather Jacket"
                    className="rounded-lg object-cover w-full aspect-[3/4] group-hover:opacity-50 transition-opacity gap-y-3"
                    height={300}
                    src={image}
                    width={300}
                  />
                ))}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
