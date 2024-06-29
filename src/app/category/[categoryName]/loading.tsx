import { Navbar, NavbarContent, NavbarItem, Skeleton } from '@nextui-org/react'
import React, { FunctionComponent } from 'react'

type Props = {}

const loading: FunctionComponent = () => {
  return (
    <div>
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

      <section className="w-full py-6">
        <div className="container grid gap-8 md:gap-12 px-4 md:px-6">
          <div className="md:items-center pl-[30%] pr-[30%] gap-4 md:gap-8">
            <div className="grid gap-1">
              <Skeleton className="rounded-lg w-auto h-[35px]" />
              <Skeleton className="rounded-lg w-auto h-[30px]" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 sm:grid-cols-2 xl:pl-20 xl:pr-20 lg:grid-cols-3 xl:grid-cols-4 gap-2 xl:gap-6">
            <Skeleton className="rounded-lg w-[230px] h-[330px]" />
            <Skeleton className="rounded-lg w-[230px] h-[330px]" />
            <Skeleton className="rounded-lg w-[230px] h-[330px]" />
            <Skeleton className="rounded-lg w-[230px] h-[330px]" />
            <Skeleton className="rounded-lg w-[230px] h-[330px]" />
            <Skeleton className="rounded-lg w-[230px] h-[330px]" />
            <Skeleton className="rounded-lg w-[230px] h-[330px]" />
            <Skeleton className="rounded-lg w-[230px] h-[330px]" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default loading