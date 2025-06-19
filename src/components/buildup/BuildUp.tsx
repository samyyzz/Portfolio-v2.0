import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import Container from "../Container";
import { motion } from "motion/react";
import localFont from "next/font/local";

const localfont = localFont({
  src: "../../../public/fonts/TOMATOES Personal Use.ttf",
});

const imageList = [
  { title: "", src: "/img1.jpg" },
  { title: "", src: "/img4.jpg" },
  { title: "", src: "/img3.jpg" },
];

export const BuildUp = () => {
  const textFill = "Not Just an Ordinary Agency!";
  return (
    <Container>
      <div className="flex flex-col items-center justify-start gap-4 text-orange-50">
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className={`text-2xl font-medium tracking-normal`}>
            Indian <span className={localfont.className}> AI Agency</span> by{" "}
            <span className="font-medium text-lime-400">Sameer</span>
          </h2>
          <motion.div className="flex">
            {textFill.split("-").map((letter, idx) => (
              <motion.h1
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="text-6xl font-extrabold tracking-wider text-lime-400"
              >
                {letter}
              </motion.h1>
            ))}
          </motion.div>
        </div>
        <div className="flex h-64 items-center justify-center gap-8">
          {imageList.map((img, idx) => (
            <Image key={idx} src={img.src} width={350} height={200} alt="Img" />
          ))}
        </div>
        <div className="flex flex-col items-center justify-center gap-10">
          <p className="text-para gradient-title from-para to-white font-bold">
            We build full-stack web and mobile apps that go live fast. You can
            test, earn, and grow before anyone catches up.
          </p>
          <button className="text-primary flex items-center justify-center gap-2 bg-lime-400 px-6 py-4 text-lg font-bold">
            Book a Slot
            <MoveRight className="animate-pulse" />
          </button>
        </div>
      </div>
    </Container>
  );
};
