import React, { useState } from "react";
import { FAQItem } from ".";
import { ChevronDown, ChevronUp } from "lucide-react";

export const FaqCard = ({ qus, ans }: FAQItem) => {
  const [showAns, setShowAns] = useState<boolean>(false);

  const handleCardClick = () => {
    console.log("sameeeeeeeeeeer", showAns);
    setShowAns(!showAns);
  };

  return (
    <div onClick={handleCardClick} className="flex cursor-pointer flex-col">
      <div className="flex items-center justify-between bg-neutral-800 p-5">
        <h1
          className={`text-lg font-bold hover:text-neutral-200 ${showAns ? `text-neutral-200` : `text-neutral-400`}`}
        >
          {qus}
        </h1>
        {showAns ? (
          <ChevronUp className="text-neutral-400" />
        ) : (
          <ChevronDown className="text-neutral-400" />
        )}
      </div>
      {showAns && (
        <p className="bg-neutral-800 p-5 pt-0 text-neutral-500">{ans}</p>
      )}
    </div>
  );
};
