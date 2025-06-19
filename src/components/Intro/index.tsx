import { MouseIcon, MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { AboutMe } from "./AboutMe";
import { motion } from "motion/react";
import localFont from "next/font/local";

export interface IntroTemplate {
  imageSrc: string;
  name: string;
  aboutMe: string[];
}

const localfont = localFont({
  src: "../../../public/fonts/LarkenDEMO-Bold.otf",
});

export const Intro = ({ imageSrc, name, aboutMe }: IntroTemplate) => {
  return (
    <motion.div className="h-screen">
      <motion.div
        style={{
          backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6,182,212,0.2) 0.5px, transparent 0)`,
          backgroundSize: "8px 8px",
          backgroundRepeat: "repeat",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex h-72 flex-col items-center justify-end rounded-t-4xl bg-neutral-800"
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            type: "spring",
            bounce: 2,
            damping: 4,
            mass: 1,
          }}
          className="z-10"
        >
          <Image src={imageSrc} height={400} width={350} alt="Img" />
        </motion.div>
      </motion.div>
      <div className="flex flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 100, scale: 0 }}
          animate={{ opacity: 1, y: -10, scale: 1.14 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={`${localfont.className} z-10 -mt-10 scale-104 bg-gradient-to-b from-neutral-400 to-blue-100 bg-clip-text text-8xl font-extrabold text-transparent capitalize`}
        >
          {name}
        </motion.h1>
        <div className="mt-2 mb-20 flex w-full justify-start">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="bg-gradient-to-t from-neutral-200 to-neutral-400 bg-clip-text pl-4 font-mono text-2xl font-light text-transparent"
          >
            <AboutMe roles={aboutMe} />
          </motion.h2>
        </div>
        <motion.button
          whileHover={{
            rotateX: [0, -50, 0],
            rotateY: [-10, 0],
            y: -2,
            scale: 2,
          }}
          transition={{ ease: "easeInOut" }}
          whileTap={{ scale: 1 }}
          className="group border-para text-secondary relative flex w-fit cursor-pointer gap-2 rounded-full border-1 px-4 py-1 font-bold"
        >
          Get in Touch
          <MoveRight className="text-lime-300 opacity-50 group-hover:opacity-100" />
          <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-lime-300 to-transparent"></span>
          <span className="absolute inset-x-0 bottom-0 h-[4px] bg-gradient-to-r from-transparent via-lime-300 to-transparent opacity-0 blur-sm group-hover:opacity-100"></span>
        </motion.button>
      </div>
      <div className="flex items-center justify-center pt-15 text-neutral-700">
        <MouseIcon className="animate-bounce" />
      </div>
    </motion.div>
  );
};
