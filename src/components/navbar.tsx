"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  "Home",
  "About",
  "Projects",
  "Journey",
  "Contact",
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Set up an Intersection Observer to detect which section is on screen
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the section that is currently intersecting the viewport
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        // Adjust these margins to trigger the active state slightly before the section hits the top
        rootMargin: "-30% 0px -70% 0px",
      }
    );

    // Observe all sections matching our navItems
    navItems.forEach((item) => {
      const section = document.getElementById(item.toLowerCase());
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-xl bg-[#f8f7f1]/80 border-b border-[#e8e6dc] shadow-sm">
      <div className="container-custom h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="#home" className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-full overflow-hidden shadow-sm flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Gaurab Pandey Logo"
              width={44}
              height={44}
              className="h-full w-full object-cover"
            />
          </div>
          <span className="font-black text-xl text-[#152d1b] tracking-tight">
            Gaurab
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => {
            const isActive = activeSection === item.toLowerCase();
            return (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`relative text-[15px] font-bold transition-colors duration-300 ${
                  isActive ? "text-[#3a6645]" : "text-[#525252] hover:text-[#152d1b]"
                }`}
              >
                {item}
                {/* Active Indicator Dot */}
                {isActive && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#3a6645] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-[#152d1b]" aria-label="Toggle navigation menu">
          <Menu />
        </button>

      </div>
    </header>
  );
}