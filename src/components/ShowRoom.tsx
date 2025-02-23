import React from "react";
import { Pacifico } from "next/font/google";
import { Libre_Baskerville } from "next/font/google";
const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});
const libre = Libre_Baskerville({
  subsets: ["latin"],
  weight: "700",
  style: "normal",
});

type Props = {};

const ShowRoom = (props: Props) => {
  return (
    <section className="w-full flex justify-center py-6">
      <div className="container grid gap-8 md:gap-12 px-4 md:px-6">
        <div className="text-center md:items-center gap-4 md:gap-8">
          <div className="grid gap-3">
            <div className={pacifico.className}>
              <h1 className="text-4xl font-bold">Welcome to Our Showroom</h1>
            </div>
            <div className={libre.className}>
              <p className="text-gray-500">Experience Fashion Like Never Before!</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
            <video
                src="/videos/shop.mp4"
                className="rounded-lg"
                autoPlay
                loop
                muted
                playsInline
                />
        </div>


      </div>
    </section>
  );
};

export default ShowRoom;
