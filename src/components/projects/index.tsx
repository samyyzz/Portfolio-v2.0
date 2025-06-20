"use client";

import React from "react";
import Container from "../Container";
import { ProjectCard } from "./ProjectCard";
import { Roboto } from "next/font/google";

export interface Project {
  imageSrc: string;
  tags: string[];
  title: string;
  description: string;
  href: string;
  idx?: number;
}

export const projectList: Project[] = [
  {
    imageSrc:
      "https://images.pexels.com/photos/414144/pexels-photo-414144.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["Productivity", "Productivity", "Productivity"],
    title: "Thid Pad",
    description:
      "A sleek and intuitive note-taking application designed for seamless cross-device synchronization.",
    href: "#",
  },
  {
    imageSrc:
      "https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["Automation", "Automation", "Automation"],
    title: "Zapier",
    description:
      "Connects your apps and automates workflows, moving information between your web services automatically.",
    href: "#",
  },
  {
    imageSrc:
      "https://images.pexels.com/photos/32508321/pexels-photo-32508321/free-photo-of-sunset-over-amsterdam-canals-with-tour-boats.jpeg?auto=compress&cs=tinysrgb&w=600",
    tags: ["Scheduling", "Scheduling", "Scheduling"],
    title: "Appointmate",
    description:
      "Revolutionizing appointment booking with smart scheduling and client management features.",
    href: "#",
  },
  {
    imageSrc:
      "https://images.pexels.com/photos/21787/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
    tags: ["Community", "Community", "Community"],
    title: "Gather.City",
    description:
      "A vibrant online platform for local communities to connect, share events, and engage with neighbors.",
    href: "#",
  },
];

const roboto = Roboto({
  subsets: ["cyrillic"],
  weight: ["400", "700", "900"],
});

export const Projects = () => {
  return (
    <Container>
      <div id="projects">
        <div className="mb-10 flex w-full flex-col items-center justify-center gap-4">
          <h1 className="text-primary w-full bg-gradient-to-br from-lime-400 to-lime-700 px-4 py-2 pt-4 text-center text-sm/6 font-extrabold md:text-5xl">
            A glimpse into the
            <span className="bg-white p-2 text-black uppercase">Websites</span>
            <span className="block md:inline-block">that I have built.</span>
          </h1>
          <p
            className={`${roboto.className} text-para text-center text-sm underline-offset-8 md:w-6/8 md:underline`}
          >
            Here are some of the MVPs I've helped founders launch. They all had
            innovative ideas and I helped them convert them into reality.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex w-full flex-col items-center justify-center gap-8 overflow-x-hidden overflow-y-hidden py-4">
          {projectList.map((proj, idx) => (
            <ProjectCard key={idx} {...proj} idx={idx} />
          ))}
        </div>
      </div>
    </Container>
  );
};
