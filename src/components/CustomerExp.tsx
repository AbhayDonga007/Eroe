import React from "react";
import { CardStack } from "./ui/card-stack";
import { cn } from "@/lib/utils";

type Props = {};

const CustomerExp = (props: Props) => {
  return (
    <section className="w-full py-6">
      <div className="container grid gap-8 md:gap-12 px-4 md:px-6">
        <div className="flex xl:pl-16 flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <div className="grid gap-1">
            <h1 className="text-2xl font-bold tracking-tight">
              Customer Experiences
            </h1>
            <p className="text-gray-500">
              Discover the latest trends and styles for the season.
            </p>
          </div>
          {/* <Button className="md:ml-auto shrink-0" size="lg" variant="outline">
            View all
          </Button> */}
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
    name: "Manu Arora",
    designation: "Senior Software Engineer",
    content: (
      <p>
        These cards are amazing, <Highlight>I want to use them</Highlight> in my
        project. Framer motion is a godsend ngl tbh fam 🙏
      </p>
    ),
  },
  {
    id: 1,
    name: "Elon Musk",
    designation: "Senior Shitposter",
    content: (
      <p>
        I dont like this Twitter thing,{" "}
        <Highlight>deleting it right away</Highlight> because yolo. Instead, I
        would like to call it <Highlight>X.com</Highlight> so that it can easily
        be confused with adult sites.
      </p>
    ),
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
      <p>
        The first rule of
        <Highlight>Fight Club</Highlight> is that you do not talk about fight
        club. The second rule of
        <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
        club.
      </p>
    ),
  },
];