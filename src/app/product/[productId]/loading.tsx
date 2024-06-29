import {
  Button,
  ButtonGroup,
  Navbar,
  NavbarContent,
  NavbarItem,
  Select,
  Skeleton,
} from "@nextui-org/react";
import React, { FunctionComponent } from "react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = {};

const loading: FunctionComponent = () => {
  return (
    <div className="bg-gray-100">
      <Navbar isBordered>
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <NavbarContent justify="start">
            <Skeleton className="rounded-lg w-[130px] h-[30px]" />
          </NavbarContent>
          <NavbarContent className="hidden sm:flex gap-5">
            <NavbarItem>
              <Skeleton className="rounded-lg w-[80px] h-[30px]" />
            </NavbarItem>
            <NavbarItem>
              <Skeleton className="rounded-lg w-[80px] h-[30px]" />
            </NavbarItem>
            <NavbarItem>
              <Skeleton className="rounded-lg w-[80px] h-[30px]" />
            </NavbarItem>

            <NavbarItem>
              <Skeleton className="rounded-lg w-[80px] h-[30px]" />
            </NavbarItem>

            <NavbarItem>
              <Skeleton className="rounded-lg w-[80px] h-[30px]" />
            </NavbarItem>
          </NavbarContent>
        </nav>
        <Skeleton className="rounded-lg w-[130px] h-[30px]" />
        <div className="w-[60px] md:hidden"></div>
        <NavbarContent justify="end">
          <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
            <Skeleton className="rounded-lg w-[30px] h-[30px]" />
            <Skeleton className="rounded-lg w-[30px] h-[30px]" />
          </div>
        </NavbarContent>
      </Navbar>

      <div className="grid md:grid-cols-2 items-start p-2 max-w-6xl mx-auto">
        <Skeleton className="rounded-lg xl:w-[350px] md:w-[350px] lg:w-[350px] sm:w-screen sm:h-screen xl:h-[450px] lg:h-[450px] md:h-[450px]" />
        <div className="grid gap-2 m-3">
          <div className="grid gap-2">
            <Skeleton className="rounded-lg w-auto h-[40px]" />
            <Skeleton className="rounded-lg w-auto h-[50px]" />
          </div>
          <div className="grid gap-2 pb-3">
            <Skeleton className="rounded-lg w-auto h-[25px]" />
            <Skeleton className="rounded-lg w-auto h-[25px]" />
            <Skeleton className="rounded-lg w-auto h-[25px]" />
            <Skeleton className="rounded-lg w-auto h-[25px]" />
            <Skeleton className="rounded-lg w-auto h-[25px]" />
          </div>
          <div className="grid gap-2 pb-3">
            <div className="grid gap-2 pt-3">
              <div className="w-full flex flex-col gap-4">
                <Skeleton className="rounded-lg w-auto h-[50px]" />
              </div>
            </div>
            <div className="grid gap-2">
              <div className="w-full flex flex-col gap-4">
                <Skeleton className="rounded-lg w-auto h-[50px]" />
              </div>
            </div>
            <div className="grid gap-2 pb-3">
              <div className="w-full flex flex-col gap-4">
                <Skeleton className="rounded-lg w-auto h-[30px]" />
              </div>
              <div className="flex items-center gap-2">
                <Skeleton className="rounded-lg w-auto h-[40px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default loading;
