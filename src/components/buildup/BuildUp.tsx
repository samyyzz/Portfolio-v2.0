import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const imageList = [
  { title: "", src: "/img1.jpg" },
  { title: "", src: "/img4.jpg" },
  { title: "", src: "/img3.jpg" },
];

export const BuildUp = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-start gap-4 text-orange-50">
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-medium tracking-normal">
          Indian AI Agency by{" "}
          <span className="font-bold text-lime-400">Sameer</span>
        </h2>
        {/* <h1 className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent text-5xl font-bold"> */}
        <h1 className="text-6xl font-extrabold tracking-wider text-lime-400">
          Not Just an Ordinary Agency!
        </h1>
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
  );
};
