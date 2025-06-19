import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Project } from ".";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["cyrillic"],
  weight: ["400", "700", "900"],
});

export const ProjectCard = ({
  imageSrc,
  tags,
  title,
  description,
  href,
  idx,
}: Project) => {
  return (
    <motion.div
      key={title}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: "0.3",
        delay: parseInt(`${idx && idx * 0.1}`),
        ease: "easeInOut",
      }}
      className="group"
    >
      <Link href={href} />
      <Image
        src={imageSrc}
        width={550}
        height={300}
        alt="Project-Image"
        className="h-80 rounded-t-4xl transition duration-200 group-hover:scale-[1.02]"
      />
      <div className="flex h-72 flex-col gap-3 rounded-b-4xl bg-neutral-800 p-8 md:w-[550px]">
        <div className="flex gap-2">
          {tags.map((tag, idx) => (
            <Tag key={idx} name={tag} />
          ))}
        </div>
        <h1 className="text-secondary ml-2 pt-2 pb-3 text-xl font-bold tracking-tight">
          {title}
        </h1>
        <p className={`${roboto.className} text-neutral-400`}>{description}</p>
      </div>
    </motion.div>
  );
};

export const Tag = ({ name }: { name: string }) => {
  return (
    <div className="rounded-full bg-neutral-700 px-3 py-1 text-sm font-semibold text-neutral-300 shadow-sm">
      {name}
    </div>
  );
};
