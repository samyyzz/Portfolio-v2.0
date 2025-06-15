import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { AboutMe } from "./AboutMe";

export interface IntroTemplate {
  imageSrc: string;
  name: string;
  aboutMe: string[];
}

export const Intro = ({ imageSrc, name, aboutMe }: IntroTemplate) => {
  return (
    <div className="h-[80vh]">
      <div className="flex h-72 flex-col items-center justify-end rounded-t-4xl bg-neutral-800">
        <div className="z-10">
          <Image src={imageSrc} height={400} width={350} alt="Img" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="from-secondary z-10 -mt-10 scale-104 bg-gradient-to-b to-blue-100 bg-clip-text text-8xl font-extrabold text-transparent uppercase">
          {name}
        </h1>
        <div className="mt-2 flex w-full justify-between text-start">
          <h2 className="bg-gradient-to-t from-neutral-200 to-neutral-400 bg-clip-text pl-4 font-mono text-2xl font-light text-transparent">
            <AboutMe roles={aboutMe} />
          </h2>
          <button className="border-secondary text-secondary flex gap-2 rounded-full border-1 px-4 py-1 font-bold">
            Get in Touch
            <MoveRight />
          </button>
        </div>
      </div>
    </div>
  );
};
