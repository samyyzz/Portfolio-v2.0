import React from "react";
import Marquee from "react-fast-marquee";
import { TestimonialCard } from "./TestimonialCard";
import Container from "../Container";
import { motion } from "motion/react";
import localFont from "next/font/local";

const localfont = localFont({
  src: "../../../public/fonts/LarkenDEMO-Bold.otf",
});

export const testimonials: TestimonialCard[] = [
  {
    image: "/avatars/avatar1.png",
    name: "Sarah Chen",
    quote:
      "The **Frontend + UI/UX** work was exceptional! My website looks stunning and is incredibly intuitive to navigate. Truly impressed!",
  },
  {
    image: "/avatars/avatar2.png",
    name: "David Lee",
    quote:
      "Their **Backend + AI (Integ.)** solution transformed our data processing. The integration was seamless, and the performance boost is remarkable.",
  },
  {
    image: "/avatars/avatar3.png",
    name: "Maria Garcia",
    quote:
      "The **DevOps** expertise provided was top-notch. Our deployment process is now incredibly smooth, and stability has drastically improved.",
  },
  {
    image: "/avatars/avatar4.png",
    name: "Ahmed Khan",
    quote:
      "I needed a promotional video, and their **Video Editing** service delivered beyond expectations. Professional, creative, and fast!",
  },
  {
    image: "/avatars/avatar5.png",
    name: "Jessica White",
    quote:
      "The **MVP** consultation was invaluable. They helped us clarify our vision and outlined a clear, achievable roadmap.",
  },
  {
    image: "/avatars/avatar6.png",
    name: "Tom Davies",
    quote:
      "Fantastic experience with the **Frontend + UI/UX** team. They captured our brand perfectly and made the user experience flawless.",
  },
  {
    image: "/avatars/avatar7.png",
    name: "Priya Sharma",
    quote:
      "The **Backend + AI (Integ.)** work was complex, but they handled it with incredible skill. Our new features are running flawlessly.",
  },
  {
    image: "/avatars/avatar8.png",
    name: "Carlos Ruiz",
    quote:
      "Our infrastructure is so much more robust thanks to their **DevOps** implementation. A true game-changer for our scalability.",
  },
  {
    image: "/avatars/avatar9.png",
    name: "Emily Brown",
    quote:
      "Quick turnaround and high-quality **Video Editing**. They understood my requirements perfectly and delivered a compelling final product.",
  },
  {
    image: "/avatars/avatar10.png",
    name: "John Miller",
    quote:
      "Booking a call for the **MVP** was the best decision. Their insights were practical and set us on the right track from day one.",
  },
];
export const Testimonial = () => {
  return (
    <Container>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-center justify-center gap-3">
          <motion.h1
            initial={{ x: -500, opacity: 0 }}
            whileInView={{ x: 0, opacity: 100 }}
            transition={{
              duration: 0.3,
              type: "spring",
              bounce: 2,
              damping: 10,
              mass: 1,
            }}
            className={`gradient-title from-neutral-100 to-neutral-500 text-4xl font-extrabold md:text-6xl ${localfont.className}`}
          >
            Trusted by Founders
          </motion.h1>
          <motion.p
            initial={{ filter: "blur(10px)", opacity: 0 }}
            whileInView={{ filter: "blur(0px)", opacity: 100 }}
            transition={{
              duration: 0.5,
            }}
            className="text-para text-sm font-semibold"
          >
            Hear from clients and collaborators about their experience working
            with us.
          </motion.p>
        </div>
        <div className="flex mask-x-from-70% mask-x-to-95% md:mask-x-from-70% md:mask-x-to-90%">
          <Marquee pauseOnHover>
            {testimonials.map((data, idx) => (
              <TestimonialCard key={idx} {...data} />
            ))}
          </Marquee>
        </div>
      </div>
    </Container>
  );
};
