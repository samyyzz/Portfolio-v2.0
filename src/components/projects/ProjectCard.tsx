import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 1], [300, -300]),
    {
      stiffness: 100,
      damping: 30,
      mass: 1,
    },
  );
  const blur = useTransform(scrollYProgress, [0.5, 1], [0, 10]);
  const scaleContent = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.2, 1, 0.8],
  );
  const opacityContent = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    [0.2, 1, 0.6],
  );
  return (
    <motion.div
      ref={containerRef}
      key={title}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: "0.3",
        delay: parseInt(`${idx && idx * 0.1}`),
        ease: "easeInOut",
      }}
      className="group flex"
    >
      <Link href={href} />
      <div className="flex flex-col items-start justify-center gap-3 bg-neutral-800 p-8 md:min-h-96 md:min-w-2xl">
        <h1 className="text-secondary text-md ml-2 pt-2 pb-3 font-bold tracking-tight md:text-xl">
          {title}
        </h1>
        <div className="flex gap-2">
          {tags.map((tag, idx) => (
            <Tag key={idx} name={tag} />
          ))}
        </div>
        <p
          className={`${roboto.className} md:text-md text-para text-sm md:max-w-lg`}
        >
          {description}
        </p>
      </div>
      <motion.div
        style={{
          y: translateY,
          scale: scaleContent,
          filter: useMotionTemplate`blur(${blur}px)`,
          x: -70,
          opacity: opacityContent,
        }}
        className="flex items-center justify-start md:min-h-96"
      >
        <Image
          src={imageSrc}
          width={400}
          height={400}
          alt="Project-Image"
          className="rounded-2xl transition duration-200 group-hover:scale-[1.05]"
        />
      </motion.div>
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
