import React from "react";
import { CardStack } from "./ui/card-stack";
import { cn } from "@/lib/utils";
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

const CustomerExp = (props: Props) => {
  return (
    <section className="w-full py-6">
      <div className="container grid gap-8 md:gap-12 px-4 md:px-6">
        <div className="text-center md:items-center gap-4 md:gap-8">
          <div className="grid gap-3">
            <div className={pacifico.className}>
              <h1 className="text-4xl font-bold">Customer Experiences</h1>
            </div>
            <div className={libre.className}>
              <p className="text-gray-500">
                Discover the latest trends and styles for the season.
              </p>
            </div>
          </div>
        </div>
        <div className="p-5 flex lg:flex-row xl:flex-row flex-col items-center text-ellipsis justify-center w-full gap-y-7 gap-3">
          <CardStack items={cards} />
          <CardStack items={cards} />
        </div>
      </div>
    </section>
  );
};

export default CustomerExp;

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const cards = [
  {
    id: 0,
    name: "Riya S.",
    designation: "",
    content: (
      <p>
        Wore it on my brother&apos;s wedding!{" "}
        <Highlight>Loved the color! Got plenty of compliments.</Highlight>{" "}
        Thanks, Kurti Plaza Gown!
      </p>
    ),
  },
  {
    id: 1,
    name: "Aisha K.",
    designation: "",
    content: (
      <p>
        <Highlight>Amazing collection and great quality!</Highlight> This is my
        third purchase. Highly recommend Kurti Plaza Gown!
      </p>
    ),
  },
  {
    id: 2,
    name: "Priya M.",
    designation: "",
    content: (
      <p>
        <Highlight>
          Beautiful and comfortable! Perfect fitting and exquisite detailing.{" "}
        </Highlight>
        Got many compliments.
      </p>
    ),
  },
];
