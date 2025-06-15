"use client";

import React from "react";
import Container from "../Container";
import Image from "next/image";
import { easeInOut, motion } from "motion/react";
import { delay } from "motion";
import Link from "next/link";

export const Projects = () => {
  return (
    <Container>
      <div className="pt-10">
        <p className="text-secondary md:text-md max-w-lg pt-4 text-sm">
          Here are some of our projects :
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2">
        {projectList.map((proj, idx) => (
          <motion.div
            key={proj.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{duration: "0.3", delay: idx * 0.1, ease: "easeInOut" }}
            className="group"
          >
            <Link href={proj.href}/>
            <Image
              src={proj.src}
              width={400}
              height={400}
              alt="Project-Image"
              className="group-hover:scale-[1.02] transition duration-200 h-72 w-full rounded-md"
            />
            <h1 className="font-bold tracking-tight text-secondary pt-2 pb-3">{proj.title}</h1>
          </motion.div>
        ))}
      </div>
    </Container>
  );
};

const projectList = [
  {
    title: "Thid Pad",
    src: "https://images.pexels.com/photos/414144/pexels-photo-414144.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "#",
  },
  {
    title: "Zapier",
    src: "https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "#",
  },
  {
    title: "Appointmate",
    src: "https://images.pexels.com/photos/32508321/pexels-photo-32508321/free-photo-of-sunset-over-amsterdam-canals-with-tour-boats.jpeg?auto=compress&cs=tinysrgb&w=600",
    href: "#",
  },
  {
    title: "Gather.City",
    src: "https://images.pexels.com/photos/21787/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
    href: "#",
  },
];
