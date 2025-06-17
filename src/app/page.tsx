"use client";

import { BuildUp } from "@/components/buildup/BuildUp";
import Container from "@/components/Container";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Intro } from "@/components/Intro";
import { Offerings } from "@/components/offerings";
import { Projects } from "@/components/projects";
import { Testimonial } from "@/components/testimonials";
import { Workflow } from "@/components/workflow";
import Image from "next/image";

const rolesList = ["Designer /", "Developer /", "Editor"];

export default function Home() {
  return (
    <div className="flex flex-col items-start justify-center">
      <Container className="flex min-h-screen flex-col gap-20 p-4 md:pt-20 md:pb-10">
        <Intro
          name="Sameer Ranjan Singh"
          aboutMe={rolesList}
          imageSrc="/sameer.png"
        />
        <BuildUp />
        <Offerings />
        <Testimonial />
        <Projects />
        <Workflow />
        {/* <Price/> */}
        <FAQ />
      </Container>
      <Footer />
    </div>
  );
}

{/* <Image
  src={"/banner.png"}
  width={1250}
  height={100}
  alt="Banner"
  className="rounded-4xl"
/>; */}
