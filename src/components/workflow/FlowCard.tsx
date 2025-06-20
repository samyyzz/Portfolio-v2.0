import { Roboto } from "next/font/google";
import React from "react";
import { motion } from "motion/react";

const roboto = Roboto({
  subsets: ["cyrillic"],
  weight: ["400", "700", "900"],
});

export interface WorkFlow {
  idx?: number;
  title: string;
  description: string;
  Icon: React.ReactNode;
  className?: string;
}

export const FlowCard = ({
  Icon,
  title,
  description,
  className,
  idx,
}: WorkFlow) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: `blur(15px)`, y: 10 }}
      whileInView={{ opacity: 100, filter: `blur(0px)`, y: 0 }}
      transition={{
        delay: parseInt(`${idx && idx * 0.2}`),
        ease: "easeInOut",
      }}
      className={`${className} flex h-56 flex-col items-center justify-start gap-4 rounded-2xl border border-neutral-800 p-4 transition duration-300 hover:border hover:border-neutral-700 hover:shadow`}
    >
      <div className="flex size-8 items-center justify-center rounded-full bg-lime-300 p-2 md:size-16 md:p-0">
        {Icon}
      </div>
      <h1 className="text-secondary text-md font-bold md:text-lg">{title}</h1>
      <p
        className={`${roboto.className} md:text-md text-center text-sm text-neutral-500`}
      >
        {description}
      </p>
    </motion.div>
  );
};
