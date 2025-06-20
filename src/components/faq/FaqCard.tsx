import React, { useState } from "react";
import { FAQItem } from ".";
import { ChevronDown, ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["cyrillic"],
  weight: ["400", "700", "900"],
});

export const FaqCard = ({ qus, ans }: FAQItem) => {
  const [showAns, setShowAns] = useState<boolean>(false);

  const handleCardClick = () => {
    console.log("sameeeeeeeeeeer", showAns);
    setShowAns(!showAns);
  };

  return (
    <div
      onClick={handleCardClick}
      className="flex cursor-pointer flex-col select-none"
    >
      <div className="flex items-center justify-between bg-neutral-800 p-5">
        <h1
          className={`text-md w-7/8 font-bold hover:text-neutral-200 md:text-lg ${showAns ? `text-neutral-200` : `text-neutral-400`}`}
        >
          {qus}
        </h1>
        {showAns ? (
          <ChevronUp className="text-neutral-400" />
        ) : (
          <ChevronDown className="text-neutral-400" />
        )}
      </div>
      <AnimatePresence>
        {showAns && (
          <motion.p
            initial={{ y: -20 }}
            whileInView={{ y: 0 }}
            exit={{ y: 0 }}
            transition={{
              duration: 0.3,
            }}
            className={`${roboto.className} md:text-md bg-neutral-800 p-5 pt-0 text-sm text-neutral-500`}
          >
            {ans}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};
