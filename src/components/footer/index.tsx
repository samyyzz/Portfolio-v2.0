import { Calendar1Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div className="flex w-full flex-col items-start justify-between gap-10 bg-black p-20 pb-0">
      <div className="flex w-full justify-between">
        <div className="flex flex-col gap-4">
          <h1 className="gradient-title w-96 from-lime-400 to-lime-800 text-6xl font-extrabold">
            Get In Touch
          </h1>
          <div className="flex cursor-pointer flex-col items-start justify-start gap-2 py-2 font-mono">
            <div className="mb-1 flex items-center justify-center gap-2">
              <Image
                src={"/gmail.svg"}
                width={1}
                height={1}
                alt="X"
                className="size-6 cursor-pointer rounded-full"
              />
              <h1 className="text-neutral-300">ranjansameer89@gmail.com</h1>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Image
                src={"/whatsapp.svg"}
                width={1}
                height={1}
                alt="X"
                className="size-6 cursor-pointer rounded-full"
              />
              <h1 className="text-neutral-300">+91 96********</h1>
            </div>
            <div className="-ml-1 flex items-center justify-center gap-2">
              <Image
                src={"/x.svg"}
                width={1}
                height={1}
                alt="X"
                className="size-8 cursor-pointer rounded-full"
              />
              <Link href={"https://x.com/samXyyzz"} target="_blank">
                <h1 className="-ml-1 text-neutral-300">samXyyzz</h1>
              </Link>
            </div>
          </div>
        </div>
        <div onClick={() => {}} className="flex w-full items-start justify-end">
          <h1 className="flex cursor-pointer items-center justify-center gap-5 bg-gradient-to-b from-neutral-100 to-neutral-500 p-4 text-6xl font-bold transition duration-300 hover:to-neutral-700">
            Book a Call
            <Calendar1Icon size={40} className="animate-bounce" />
          </h1>
        </div>
      </div>
      <hr className="h-0.5 w-full bg-neutral-800" />
      <div className="mb-10 flex h-0.5 w-full justify-center gap-10">
        <p className="flex items-center justify-center pl-2 text-lg font-bold text-red-200">
          Design and Built by
          <Link href={"https://x.com/samXyyzz"} target="_blank">
            <span className="ml-2 flex animate-pulse cursor-pointer gap-2 rounded-r-4xl bg-red-600 px-2 py-1 text-2xl font-bold text-neutral-900">
              <Image
                src={"/x.svg"}
                width={0}
                height={0}
                alt="X"
                className="size-8 cursor-pointer rounded-full"
              />
              Sameer
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};
