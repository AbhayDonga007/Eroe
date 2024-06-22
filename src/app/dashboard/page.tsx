"use client";
import Banner from "@/components/Banner";
import { CardProduct } from "@/components/Card";
import { Category } from "@/components/Category";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Newsletter } from "@/components/Newsletter";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button } from "@/components/ui/button";
import React from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

type Props = {};

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
          <Category />
          <CardProduct />
          <Newsletter />
          <Footer />
    </>
  );
};

export default DashBoard;
