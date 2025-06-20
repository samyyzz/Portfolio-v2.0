import React, { useRef } from "react";
import Container from "../Container";
import { FlowCard, WorkFlow } from "./FlowCard";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import {
  CalendarIcon,
  NotebookIcon,
  PawPrintIcon,
  Settings,
  Truck,
} from "lucide-react";

export const workflow: WorkFlow[] = [
  {
    Icon: <CalendarIcon />,
    title: "Initial Consultation",
    description:
      "Book a call with our founder to discuss your vision. We'll explore your idea and understand your business goals in detail.",
  },
  {
    Icon: <NotebookIcon />,
    title: "MVP Planning & PRD",
    description:
      "Receive a detailed MVP plan followed by a comprehensive PRD with technical implementation approach for complete clarity.",
  },
  {
    Icon: <PawPrintIcon />,
    title: "Development Sprint",
    description:
      "Once the proposal is signed, development begins. Your MVP will be ready in 5 weeks with regular updates throughout the process.",
  },
  {
    Icon: <Truck />,
    title: "MVP Delivery",
    description:
      "Get your fully functional MVP with all planned features, ready for market launch and user acquisition.",
  },
  {
    Icon: <Settings />,
    title: "Maintenance & Support",
    description:
      "Enjoy a week of maintenance support including critical bug fixes and necessary optimizations.",
  },
];

export const Workflow = () => {
  const workRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: workRef,
    offset: ["start end", "end start"],
  });

  const scaleContainer = useTransform(scrollYProgress, [0, 0.5], [10, 1]);
  const yContainer = useSpring(
    useTransform(scrollYProgress, [0, 0.1, 0.5], [1100, -100, 0]),
  );
  const xContainer = useTransform(scrollYProgress, [0, 0.5], [-600, 0]);
  const heightContainer = useTransform(scrollYProgress, [0, 0.3], [280, 60]);
  return (
    <Container>
      <div className="mb-10 flex w-full flex-col items-center justify-center gap-4 overflow-x-hidden overflow-y-hidden pt-10 md:mb-20">
        <motion.h1
          ref={workRef}
          style={{
            scale: scaleContainer,
            y: yContainer,
            x: xContainer,
            height: heightContainer,
          }}
          transition={{ ease: "easeInOut", duration: 0.3 }}
          className="text-md bg-lime-500 px-4 py-2 pt-4 text-center font-extrabold text-black md:text-5xl"
        >
          How we
          <span className="bg-white p-2 font-extrabold text-black">WORK</span> ?
        </motion.h1>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex grid-cols-3 flex-col gap-3 md:grid">
          <FlowCard
            idx={0}
            Icon={workflow[0].Icon}
            title={workflow[0].title}
            description={workflow[0].description}
            className="col-span-1"
          />
          <FlowCard
            idx={1}
            Icon={workflow[1].Icon}
            title={workflow[1].title}
            description={workflow[1].description}
            className="col-span-1"
          />
          <FlowCard
            idx={2}
            Icon={workflow[2].Icon}
            title={workflow[2].title}
            description={workflow[2].description}
            className="col-span-1"
          />
          <FlowCard
            idx={3}
            Icon={workflow[3].Icon}
            title={workflow[3].title}
            description={workflow[3].description}
            className="col-span-2"
          />
          <FlowCard
            idx={4}
            Icon={workflow[4].Icon}
            title={workflow[4].title}
            description={workflow[4].description}
            className="col-span-1"
          />
        </div>
      </div>
    </Container>
  );
};
