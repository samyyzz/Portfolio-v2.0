"use client";
import React from "react";
import Container from "../Container";
import { FaqCard } from "./FaqCard";
import { motion } from "motion/react";

export interface FAQItem {
  qus: string;
  ans: string;
}

export const faqList: FAQItem[] = [
  {
    qus: "How fast will I receive my requests?",
    ans: "I strive to deliver requests as quickly as possible, typically within a few business days after our Inital Disucssion and after recieving the downpayment I will start giving you updates on the progress of the project. But if you need it faster, you can always contact me and I will try to deliver it as soon as possible",
  },
  {
    qus: "How does onboarding work?",
    ans: "Onboarding process is streamlined and user-friendly. First Step is doing a meeting to see If I can help you, then we start building the MVP together as soon as I get the first downpayment, We Will continue discussing and iterating over the MVP until we have reached your satisfaction point.",
  },
  {
    qus: "Who are the Developers?",
    ans: "There are no external Devlopers, I am the only one who will be communicating with you and doing all the work. We might sometime hire external designer's to help with designs But the development of project will be done by me, I will be solely accountable for the MVP",
  },
  {
    qus: "If I want to add something new after the Initial Discussion?",
    ans: "The number of changes you can make depends on your subscription plan. We offer various tiers to suit different needs and volumes. If you want to add something new, you can do so but if it extends the timeline,you might have to pay more for the extra time. If you belive that you might need to add something new constantly, you might consider buying Pro Plan.",
  },
  {
    qus: "How do you handle larger requests?",
    ans: "For larger requests, I assess the scope and may break it down into smaller, manageable tasks. We'll communicate with you throughout the process to ensure your needs are met.",
  },
  {
    qus: "What if I don't like the work that is done?",
    ans: "I offer revisions to ensure your satisfaction. Moreover the continous Discussion and Iteration won't let you feel suddenly that you are not liking the work, Including you in every step of work will let us work more efficiently and avoud such situations. If you're not happy with the work, we'll work with you to make necessary adjustments.",
  },
  {
    qus: "How do you handle client communication during a project?",
    ans: "We prioritize clear and consistent communication. We typically use a combination of email, dedicated project management tools, and regular video calls to keep you updated on progress and address any questions.",
  },
  {
    qus: "Can you help with improving existing websites or applications?",
    ans: "Absolutely! We offer services for optimizing, refactoring, and adding new features to existing web applications to enhance performance, user experience, and scalability.",
  },
  {
    qus: "What is your process for UI/UX design?",
    ans: "Our UI/UX process typically involves user research, wireframing, prototyping, user testing, and iterative design, all focused on creating intuitive, aesthetically pleasing, and effective user interfaces.",
  },
  {
    qus: "How do I book a consultation call?",
    ans: "You can easily book a consultation call through the 'Book a Call' button prominently displayed on our website, or by visiting our 'Contact Us' page.",
  },
];

export const FAQ = () => {
  return (
    <Container>
      <div className="mb-10 flex flex-col items-center justify-start">
        <motion.h1
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 100, filter: "blur(0px)" }}
          className="gradient-title w-full from-neutral-100 to-neutral-500 text-start text-4xl font-extrabold md:text-6xl"
        >
          FAQ
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)", scale: 0 }}
          whileInView={{ opacity: 100, filter: "blur(0px)", scale: 1 }}
          className="text-para w-full text-start text-sm font-semibold"
        >
          # We are here to help you with your doubts.
        </motion.p>
      </div>
      <motion.div className="flex flex-col gap-2">
        {faqList.map((faq, idx) => (
          <motion.div
            key={idx}
            initial={{
              opacity: 0,
              y: 60,
              z: 60,
              x: -100,
              rotateX: 100,
              rotateY: 10,
            }}
            whileInView={{
              opacity: 100,
              y: 0,
              z: 0,
              x: 0,
              rotateX: 0,
              rotateY: 0,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delayChildren: 0.7,
            }}
          >
            <FaqCard qus={faq.qus} ans={faq.ans} key={idx} />
          </motion.div>
        ))}
      </motion.div>
    </Container>
  );
};
