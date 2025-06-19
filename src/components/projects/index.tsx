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

    // const [currentPage, setCurrentPage] = useState<number>(1)
    // const itemsPerPage = 3

    // const indexOfLastItem = currentPage * itemsPerPage
    // const indexOfFirstItem = indexOfLastItem - itemsPerPage
    // const currentFaqz = projectList.slice(indexOfFirstItem, indexOfLastItem)

  return (
    <Container>
      <div id="projects">
        <div className="mb-10 flex w-full flex-col items-center justify-center gap-4 ">
          <h1 className="text-primary bg-lime-300 px-4 py-2 pt-4 text-center text-sm font-extrabold md:text-5xl">
            A glimpse into the
            <span className="bg-white p-2 text-black">Websites</span> that I
            have built.
          </h1>
          <p className={`${roboto.className} text-para w-6/8 text-center text-lg underline underline-offset-8`}>
            Here are some of the MVPs I've helped founders launch. They all had
            innovative ideas and I helped them convert them into reality.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="grid w-fit grid-cols-1 justify-items-center gap-8 py-4 md:grid-cols-2">
          {projectList.map((proj, idx) => (
            <ProjectCard key={idx} {...proj} idx={idx} />
          ))}
        </div>
      </div>
    </Container>
  );
};


