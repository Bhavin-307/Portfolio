"use client";

import Link from "next/link";
import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import NavbarItem from "./NavbarItem";
import { ModeToggle } from "../ModeToggle";
import { Menu, X } from "lucide-react";
import NavbarItemMB from "./NavbarItemMB";

const navbarItems = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const currentScroll = latest as number;
    if (currentScroll > lastScrollY) {
      setIsVisible(false); // Scrolling down
    } else {
      setIsVisible(true); // Scrolling up
    }
    setLastScrollY(currentScroll);
  });

  return (
    <motion.nav
      className={`sticky lg:top-3 top-0 z-50  mx-auto max-w-7xl rounded-full lg:border lg:border-slate-500/10  flex-none shadow-sm transition-colors duration-500 lg:z-50  dark:border-slate-50/[0.06]   bg-slate-50/5 backdrop-blur-2xl supports-backdrop-blur:bg-white/10 dark:bg-slate-900/5 -mb-20 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="relative w-full">
        <div className="bg-background text-foreground"></div>
        <div className="mx-auto flex container items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <Link href="/">
            <div className="inline-flex items-center space-x-0 mt-3">
              <svg
                width="180"
                height="40"
                viewBox="0 0 180 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="overflow-visible"
              >
                <style>
                  {`
            @keyframes drawStroke {
              0% { 
                stroke-dashoffset: 200;
                opacity: 0;
              }
              10% { 
                opacity: 1;
              }
              100% { 
                stroke-dashoffset: 0;
                opacity: 1;
              }
            }

            @keyframes fillText {
              0%, 40% { 
                fill-opacity: 0;
              }
              100% { 
                fill-opacity: 1;
              }
            }

            .logo-text {
              font-family: 'Inter', system-ui, -apple-system, sans-serif;
              font-weight: 700;
              letter-spacing: 0.02em;
            }

            .animated-text {
              fill: currentColor;
              fill-opacity: 0;
              stroke: currentColor;
              stroke-width: 1.5;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-dasharray: 200;
              animation: drawStroke 1s cubic-bezier(0.4, 0, 0.2, 1) forwards,
                         fillText 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
            }
          `}
                </style>

                <g className="logo-text">
                  <text
                    x="15"
                    y="26"
                    className="animated-text"
                    fontSize="24"
                    letterSpacing="0.5"
                  >
                    Bhavin Sali
                  </text>
                </g>
              </svg>
            </div>
          </Link>
          <div className="hidden grow items-start lg:flex md:flex md:flex-grow flex-row justify-end space-x-1">
            <ul className="ml-12 inline-flex space-x-8 justify-center items-center">
              {navbarItems.map((item) => (
                <NavbarItem key={item.href} {...item} />
              ))}
            </ul>
          </div>
          <div className="flex justify-center lg:justify-end">
            <ModeToggle />
          </div>
          
          <div className="relative">
            <div className="flex justify-center items-center">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost md:hidden lg:hidden"
              >
                {isOpen ? (
                  <X onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
                ) : (
                  <Menu
                    onClick={toggleMenu}
                    className="h-6 w-6 cursor-pointer"
                  />
                )}
              </div>
            </div>

            <ul
              tabIndex={0}
              className={` absolute menu menu-sm dropdown-content z-[1000] bg-slate-100 dark:bg-slate-900 rounded-box mt-2 w-39 px-6 py-5 shadow right-0 text-lg gap-3 font-medium ${
                isOpen ? "block" : "hidden"
              } `}
            >
              {navbarItems.map((item) => (
                <NavbarItemMB key={item.href} {...item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
