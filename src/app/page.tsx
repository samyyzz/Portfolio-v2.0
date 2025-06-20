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

const rolesList = ["Designer /", "Developer /", "Editor"];

export default function Home() {
  return (
    <div>
      <Container className="flex min-h-screen flex-col gap-20 p-4">
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
