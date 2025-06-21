"use client";

import React, { useState } from "react";
import Container from "../Container";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";

export const Navbar = () => {
  const [hovered, setHovered] = useState<null | number>(null);
  const navItems = [
    { title: "About", href: "offerings" },
    { title: "Contact", href: "footer" },
    { title: "Projects", href: "projects" },
  ];
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });
  return (
    <Container>
      <motion.nav
        style={{ borderRadius: 0 }}
        animate={{
          boxShadow: scrolled ? "var(--shadow-navShadow)" : "none",
          width: scrolled ? "50%" : "100%",
          y: scrolled ? 10 : 0,
          borderRadius: 30,
        }}
        transition={{
          ease: "easeIn",
          duration: "0.3",
          type: "spring",
          stiffness: 100,
        }}
        className={`fixed inset-x-0 top-0 z-50 mx-auto flex max-w-7xl items-center justify-between ${scrolled && "bg-neutral-800"} px-4 py-2`}
      >
        <div
          className={`${!scrolled && `rounded-lg bg-neutral-700 p-2`} flex justify-between md:flex-none`}
        >
          <Image
            src={"/picofme (2).png"}
            width={100}
            height={100}
            alt="img"
            className="size-7 rounded-full object-bottom"
          />
        </div>
        <Link href="#footer">
          <button className="rounded-full bg-lime-400 px-2 py-1 text-sm text-lime-800 md:hidden">
            Contact Us
          </button>
        </Link>
        <div className="hidden md:inline-block">
          {navItems.map((link, idx) => (
            <Link
              href={"#" + link.href}
              key={link.title}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              className="relative px-2 py-1 text-sm"
            >
              {hovered === idx && (
                <motion.span
                  layoutId="hovered-span"
                  className="absolute inset-0 h-full w-full rounded-full bg-lime-400"
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              )}
              <span
                className={`relative z-10 px-4 ${hovered === idx ? "text-primary font-bold" : "text-secondary"}`}
              >
                {link.title}
              </span>
            </Link>
          ))}
        </div>
      </motion.nav>
    </Container>
  );
};
