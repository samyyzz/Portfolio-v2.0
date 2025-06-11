"use client";

import React, { useState } from "react";
import Container from "../Container";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export const Navbar = () => {
  const [hovered, setHovered] = useState<null | number>(null);
  const navItems = [
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
    { title: "Projects", href: "/project" },
  ];
  return (
    <Container>
      <nav className="flex items-center justify-between p-2">
        <Image
          src={"/samx-gtihub.png.webp"}
          width={100}
          height={100}
          alt="img"
          className="h-10 w-9 rounded-full"
        />
        <div className="flex items-center justify-center">
          {navItems.map((link, idx) => (
            <Link
              href={link.href}
              key={link.title}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              className="relative w-24 px-2 py-1 text-sm"
            >
              {hovered === idx && (
                <motion.span
                  layoutId="hovered-span"
                  className="bg-secondary absolute inset-0 h-full w-full rounded-md"
                  // transition={{ type: "spring", stiffness: 300, damping: 30 }}
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
      </nav>
    </Container>
  );
};
