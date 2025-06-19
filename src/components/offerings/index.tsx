import Image from "next/image";
import React from "react";
import { CardList, OfferCard } from "./OfferCard";
import { MoveRight } from "lucide-react";
import Container from "../Container";
import { motion } from "motion/react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["cyrillic"],
  weight: ["400", "700", "900"],
});

const cardList: CardList[] = [
  {
    iconSrc: "/picofme (24).png",
    title: "Frontend + UI/UX",
    description: "$400",
    className: "",
    idx: 1,
  },
  {
    iconSrc: "/picofme (25).png",
    title: "Backend + AI(Integ.)",
    description: "$600",
    className: "",
    idx: 1,
  },
  {
    iconSrc: "/picofme (37).png",
    title: "DevOps",
    description: "$1,000",
    className: "",
    idx: 1,
  },
  {
    iconSrc: "/picofme (26).png",
    title: "Video Editing",
    description: "$200",
    className: "",
    idx: 1,
  },
  {
    iconSrc: "/picofme (33).png",
    title: "MVP",
    description: "Book a Call",
    className: "",
    idx: 1,
  },
];
export const Offerings = () => {
  return (
    <Container>
      <motion.div
        id="offerings"
        className="relative flex flex-col items-center justify-start gap-6 rounded-3xl bg-gradient-to-b from-lime-400 to-lime-300 pt-14 pb-40 inset-shadow-sm inset-shadow-lime-800"
      >
        <h1 className="text-center text-5xl font-medium">
          <span className="font-extrabold"> 3 years </span>
          of experience in{" "}
          <span className="font-semibold underline underline-offset-8">
            3-weeks
          </span>
        </h1>
        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 100, filter: "blur(0px)", scale: [1.1, 1] }}
          transition={{ duration: 0.5 }}
          className={`${roboto.className} w-3/6 text-center font-semibold`}
        >
          <span className="text-lime-900">
            *Stop waiting—start validating. Your idea, our execution.*
          </span>
          <br />
          <span className="font-medium">
            Automate workflows, predict trends, and personalize experiences.
          </span>
          <span className="font-light">
            We automate your ops so you never lose a sale -{" "}
          </span>
          <span className="font-semibold">
            We handle MVP build, cloud ops, and growth content. You handle
            champagne.
          </span>
        </motion.p>
        <div className="grid grid-cols-3 gap-4 rounded-2xl p-4">
          <motion.div
            initial={{ y: 100, x: 200 }}
            whileInView={{ y: 0, x: 0 }}
            transition={{
              duration: 0.3 * cardList[0].idx!,
              type: "spring",
              bounce: 3,
              damping: 50,
              mass: 1,
            }}
          >
            <OfferCard
              title={cardList[0].title}
              description={cardList[0].description}
              iconSrc={cardList[0].iconSrc}
              className="col-span-1"
            />
          </motion.div>
          <motion.div
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{
              duration: 0.3 * cardList[1].idx!,
              type: "spring",
              bounce: 3,
              damping: 50,
              mass: 1,
            }}
          >
            <OfferCard
              title={cardList[1].title}
              description={cardList[1].description}
              iconSrc={cardList[1].iconSrc}
              className="col-span-1"
            />
          </motion.div>
          <motion.div
            initial={{ y: 100, x: -200 }}
            whileInView={{ y: 0, x: 0 }}
            transition={{
              duration: 0.3 * cardList[2].idx!,
              type: "spring",
              bounce: 3,
              damping: 50,
              mass: 1,
            }}
          >
            <OfferCard
              title={cardList[2].title}
              description={cardList[2].description}
              iconSrc={cardList[2].iconSrc}
              className="col-span-1"
            />
          </motion.div>
          <motion.div
            initial={{ x: 200 }}
            whileInView={{ x: 0 }}
            transition={{
              duration: 0.3 * cardList[3].idx!,
              type: "spring",
              bounce: 3,
              damping: 50,
              mass: 1,
            }}
          >
            <OfferCard
              title={cardList[3].title}
              description={cardList[3].description}
              iconSrc={cardList[3].iconSrc}
              className="col-span-1"
            />
          </motion.div>
          <motion.div
            initial={{ x: -200 }}
            whileInView={{ x: 0 }}
            transition={{
              duration: 0.3 * cardList[4].idx!,
              type: "spring",
              bounce: 3,
              damping: 50,
              mass: 1,
            }}
            className="col-span-1 col-start-3"
          >
            <OfferCard
              title={cardList[4].title}
              description={cardList[4].description}
              iconSrc={cardList[4].iconSrc}
              icon={<MoveRight />}
            />
          </motion.div>
        </div>
        <div className="absolute top-40 opacity-30 blur-xs">
          <Image src={"/sameer.png"} width={300} height={250} alt="Img" />
        </div>
      </motion.div>
    </Container>
  );
};
