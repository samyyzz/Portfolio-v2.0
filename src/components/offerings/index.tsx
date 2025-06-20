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
        className="relative flex flex-col items-center justify-start gap-6 rounded-3xl bg-gradient-to-b from-lime-400 to-lime-300 px-2 py-6 inset-shadow-sm inset-shadow-lime-800 md:pt-14 md:pb-40"
      >
        <h1 className="text-center text-3xl font-medium md:text-5xl">
          <span className="block pr-2 font-extrabold md:inline-flex">
            {" "}
            3 years
          </span>
          <span className="block pr-2 text-sm md:inline-flex md:text-4xl">
            of experience in
          </span>
          <span className="font-semibold underline underline-offset-8">
            3 weeks
          </span>
        </h1>
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 100, filter: "blur(0px)", scale: [1.1, 1] }}
          transition={{ duration: 0.5 }}
          className={`${roboto.className} w-5/6 text-center font-semibold md:w-3/6`}
        >
          <p className="bg-white text-lime-900">
            Stop waiting — start validating.
            <span className="block">Your idea, our execution.</span>
          </p>
          <br />
          {/* <div className="hidden">
            <span className="font-medium">
              Automate workflows, predict trends, and personalize experiences.
            </span>
            <span className="font-light">
              We automate your ops so you never lose a sale -{" "}
            </span>
          </div> */}
          <span className="font-semibold">
            We handle MVP build, cloud ops, and growth content. You handle
            champagne.
          </span>
        </motion.div>
        <div className="flex flex-col gap-4 overflow-x-hidden rounded-2xl p-4 md:grid md:grid-cols-3">
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
        <div className="absolute top-40 hidden opacity-30 blur-xs md:inline">
          <Image src={"/sameer.png"} width={300} height={250} alt="Img" />
        </div>
      </motion.div>
    </Container>
  );
};
