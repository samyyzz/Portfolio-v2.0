import Image from "next/image";
import React from "react";
import { CardList, OfferCard } from "./OfferCard";
import { MoveRight } from "lucide-react";

const cardList: CardList[] = [
  {
    iconSrc: "/picofme (24).png",
    title: "Frontend + UI/UX",
    description: "$400",
    className: "",
  },
  {
    iconSrc: "/picofme (25).png",
    title: "Backend + AI(Integ.)",
    description: "$600",
    className: "",
  },
  {
    iconSrc: "/picofme (37).png",
    title: "DevOps",
    description: "$1,000",
    className: "",
  },
  {
    iconSrc: "/picofme (26).png",
    title: "Video Editing",
    description: "$200",
    className: "",
  },
  {
    iconSrc: "/picofme (33).png",
    title: "MVP",
    description: "Book a Call",
    className: "",
  },
];
//bg-fuchsia-200 --> try this
export const Offerings = () => {
  return (
    <div className="relative flex h-screen flex-col items-center justify-start gap-6 rounded-3xl bg-gradient-to-b from-lime-400 to-lime-300 pt-14 inset-shadow-sm inset-shadow-lime-800">
      {/* <p className="text-xl font-medium text-center">giving my</p> */}
      <h1 className="text-center text-5xl font-medium">
        <span className="font-extrabold"> 3 years </span>
        of experience in{" "}
        <span className="font-semibold underline underline-offset-8">
          3-weeks
        </span>
      </h1>
      <p className="w-3/6 text-center font-semibold">
        <span className="text-lime-900">
          *Stop waiting—start validating. Your idea, our execution.*
        </span>
        <br />
        <span className="font-medium">
          Automate workflows, predict trends, and personalize experiences.
        </span>
        <span className="font-light">
          We automate your ops so you never lose a sale.-
        </span>
        <span className="font-semibold">
          We handle MVP build, cloud ops, and growth content. You handle
          champagne.
        </span>
      </p>
      <div className="grid grid-cols-3 gap-4 rounded-2xl bg-gradient-to-b from-lime-400 p-4">
        <OfferCard
          title={cardList[0].title}
          description={cardList[0].description}
          iconSrc={cardList[0].iconSrc}
          className="col-span-1"
        />
        <OfferCard
          title={cardList[1].title}
          description={cardList[1].description}
          iconSrc={cardList[1].iconSrc}
          className="col-span-1"
        />
        <OfferCard
          title={cardList[2].title}
          description={cardList[2].description}
          iconSrc={cardList[2].iconSrc}
          className="col-span-1"
        />
        <OfferCard
          title={cardList[3].title}
          description={cardList[3].description}
          iconSrc={cardList[3].iconSrc}
          className="col-span-1"
        />
        <div className="col-span-1 col-start-3">
          <OfferCard
            title={cardList[4].title}
            description={cardList[4].description}
            iconSrc={cardList[4].iconSrc}
            icon={<MoveRight />}
          />
        </div>
      </div>
      <div className="absolute top-40 opacity-30 blur-xs">
        <Image src={"/sameer.png"} width={300} height={250} alt="Img" />
      </div>
    </div>
  );
};
