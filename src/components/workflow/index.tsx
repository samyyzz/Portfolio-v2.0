import React from "react";
import Container from "../Container";
import { FlowCard, WorkFlow } from "./FlowCard";
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
  return (
    <Container>
      <div className="mb-20 flex w-full flex-col items-center justify-center gap-4 pt-10">
        <h1 className="bg-lime-500 px-4 py-2 pt-4 text-center text-sm font-extrabold text-black md:text-5xl">
          How we
          {/* <span className="gradient-title from-blue-500 to-blue-700"> */}
          <span className="bg-white p-2 font-extrabold text-black">WORK</span> ?
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-3 gap-3">
          <FlowCard
            Icon={workflow[0].Icon}
            title={workflow[0].title}
            description={workflow[0].description}
            className="col-span-1"
          />
          <FlowCard
            Icon={workflow[1].Icon}
            title={workflow[1].title}
            description={workflow[1].description}
            className="col-span-1"
          />
          <FlowCard
            Icon={workflow[2].Icon}
            title={workflow[2].title}
            description={workflow[2].description}
            className="col-span-1"
          />
          <FlowCard
            Icon={workflow[3].Icon}
            title={workflow[3].title}
            description={workflow[3].description}
            className="col-span-2"
          />
          <FlowCard
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
