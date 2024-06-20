import { useSession } from "@clerk/nextjs";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

type Props = {};
interface Product {
  _id: string;
  name: string;
  des: string;
  type: Array<string>;
  size: Array<string>;
  oriPrice: number;
  disPrice: number;
  images: string;
}

const Search = (props: Props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);

  const onSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);

    const res = await axios.get(`/api/getDataByName?name=${search}`);
    setSearchData(res.data);
  };
  return (
    // <div className="relative ml-auto flex-1 sm:flex-initial">
    //   <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
    //   <Input
    //     className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
    //     placeholder="Search products..."
    //     type="search"
    //     name="search"
    //   />
    // </div>
    <div className="relative ml-auto flex-1 sm:flex-initial">
      <Button className="p-0 m-0 bg-transparent" onPressStart={onOpen}>
        <Input
          isClearable
          radius="lg"
          classNames={{
            label: "text-black/50 dark:text-white/90",
            input: [
              "bg-transparent",
              "text-black/90 dark:text-white/90",
              "placeholder:text-black-400/50 dark:placeholder:text-white",
            ],
            innerWrapper: "bg-transparent",
          }}
          placeholder="Type to search..."
          startContent={
            <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-black pointer-events-none flex-shrink-0" />
          }
        />
      </Button>
      <Modal
        backdrop="blur"
        scrollBehavior="inside"
        size="2xl"
        placement="top-center"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>  
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 w-[97%]">
                <Input
                  onChange={onSearch}
                  isClearable
                  radius="lg"
                  classNames={{
                    label: "text-black/50 dark:text-white/90",
                    input: [
                      "bg-transparent",
                      "text-black/90 dark:text-white/90",
                      "placeholder:text-black-400/50 dark:placeholder:text-white/60",
                    ],
                    innerWrapper: "bg-transparent",
                  }}
                  placeholder="Type to search..."
                  startContent={
                    <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-black pointer-events-none flex-shrink-0" />
                  }
                />
              </ModalHeader>
              <ModalBody>
                {searchData.length > 1 && (
                  <div className="gap-2 grid grid-cols-2 sm:grid-cols-3">
                    {searchData.map((item: Product,index) => (
                      <Card key={index} isFooterBlurred className="w-full h-[300px]">
                        <Link
                          className="absolute inset-0 z-10"
                          href={`/product/${item._id}`}
                        ></Link>
                        <CardHeader className="absolute z-10 truncate flex-col items-start">
                          <p className="text-tiny text-red-500/60  uppercase font-bold">
                            New
                          </p>
                          {/* <h4 className="text-black font-medium">{item.name}</h4> */}
                        </CardHeader>
                        <Image
                          removeWrapper
                          alt="Card example background"
                          className="z-0 w-full h-full object-cover"
                          src={item.images}
                        />
                        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                          <div>
                            <p className="text-black text-tiny">{item.name}</p>
                            {/* <p className="text-black text-tiny">Get notified.</p> */}
                          </div>
                          <Button
                            className="text-tiny"
                            color="primary"
                            radius="full"
                            size="sm"
                          >
                            <Link
                              className="absolute inset-0 z-10"
                              href={`/product/${item._id}`}
                            ></Link>
                            {item.disPrice} $
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                    {/* <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
                        <CardHeader className="absolute z-10 top-1 flex-col items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">New</p>
                            <h4 className="text-black font-medium text-2xl">Acme camera</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card example background"
                            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                            src="https://nextui.org/images/card-example-6.jpeg"
                        />
                        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                            <div>
                            <p className="text-black text-tiny">Available soon.</p>
                            <p className="text-black text-tiny">Get notified.</p>
                            </div>
                            <Button className="text-tiny" color="primary" radius="full" size="sm">
                            Notify Me
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
                        <CardHeader className="absolute z-10 top-1 flex-col items-start">
                            <p className="text-tiny text-white/60 uppercase font-bold">New</p>
                            <h4 className="text-black font-medium text-2xl">Acme camera</h4>
                        </CardHeader>
                        <Image
                            removeWrapper
                            alt="Card example background"
                            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
                            src="https://nextui.org/images/card-example-6.jpeg"
                        />
                        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                            <div>
                            <p className="text-black text-tiny">Available soon.</p>
                            <p className="text-black text-tiny">Get notified.</p>
                            </div>
                            <Button className="text-tiny" color="primary" radius="full" size="sm">
                            Notify Me
                            </Button>
                        </CardFooter>
                    </Card> */}
                  </div>
                )}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

function SearchIcon({ ...props }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export default Search;
