import Image from "next/image";
import React from "react";

export interface WorkFlow {
  idx?: number;
  title: string;
  description: string;
  Icon: React.ReactNode;
  className?: string;
}

export const FlowCard = ({ Icon, title, description, className }: WorkFlow) => {
  return (
    <div
      className={`${className} flex flex-col items-center justify-start gap-4 rounded-2xl border border-neutral-800 p-4 hover:shadow hover:border hover:border-neutral-700 transition duration-300`}
    >
      <div className="rounded-full bg-lime-300 size-16 flex justify-center items-center">{Icon}</div>
      <h1 className="text-secondary font-bold text-lg">{title}</h1>
      <p className="text-neutral-500 text-center">{description}</p>
    </div>
  );
};
