import { motion } from "motion/react";
import Image from "next/image";

export interface CardList {
  idx?: number;
  iconSrc: string;
  title: string;
  description: string;
  className?: string;
  icon?: React.ReactNode;
  onClick?: () => null;
}

export const OfferCard = ({
  iconSrc,
  title,
  description,
  icon,
  onClick,
}: CardList) => {
  return (
    <motion.div
    whileHover={{scale:1.1 }}
    transition={{duration:0.3, ease:"easeInOut"}}
      onClick={onClick}
      className="bg-secondary grid cursor-pointer grid-cols-3 gap-4 rounded-sm p-2 shadow-lg md:min-w-80 md:rounded-t-lg md:p-4"
    >
      <Image
        src={iconSrc}
        width={80}
        height={30}
        alt="Img"
        className="col-span-1"
      />
      <div className="col-span-2 col-start-2 grid grid-rows-2 place-content-start font-bold">
        <h1 className="font-mono text-sm font-extrabold md:text-xl">{title}</h1>
        <h2 className="flex gap-2 tracking-wide text-lime-600 text-shadow-2xs text-shadow-lime-500">
          {description} <span className="animate-pulse">{icon}</span>
        </h2>
      </div>
    </motion.div>
  );
};
