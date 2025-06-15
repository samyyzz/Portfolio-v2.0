import { BuildUp } from "@/components/buildup/BuildUp";
import Container from "@/components/Container";
import { Intro } from "@/components/Intro";
import { Offerings } from "@/components/offerings";
import Image from "next/image";

const rolesList = ["Designer /", "Developer /", "Editor"];

export default function Home() {
  return (
    <div className="flex items-start justify-center">
      <Container className="flex min-h-screen flex-col gap-20 p-4 md:pt-20 md:pb-10">
        <Intro
          name="Sameer Ranjan Singh"
          aboutMe={rolesList}
          imageSrc="/sameer.png"
        />
        <BuildUp />
        <Offerings />
      </Container>
    </div>
  );
}
