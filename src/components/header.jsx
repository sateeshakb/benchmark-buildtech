"use client";

import images from "@/lib/images";
import Image from "next/image";
import Nav from "./nav";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";

export default function Header() {
  const sectionIds = ["home", "about", "services", "contact"];
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`z-20 fixed top-0 right-0 left-0 transition-all  duration-500 ${scrolled ? "bg-neutral-900 backdrop-blur-sm shadow-md" : "bg-warm-500"}`}
    >
      <div className="w-full max-w-360 mx-auto flex justify-between items-center px-4 py-2">
        <Image alt="Benchmark BuildTech Logo" src={images.logo} />

        {/* desktop nav */}
        <div className="hidden md:block">
          <Nav scrolled={scrolled} />
        </div>

        {/* hamburger menu */}
        <button
          className={`md:hidden relative p-2 w-8 h-8`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu
            className={`absolute inset-0 transition-all duration-300 ${scrolled && "text-white"} ${isMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}`}
          />
          <X
            className={`absolute inset-0 transition-all duration-300 ${scrolled && "text-white"} ${isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}`}
          />
        </button>
        {/* mobile menu */}
        <div
          className={`md:hidden absolute overflow-hidden top-(--header-height) left-0 right-0  shadow-lg transition-all duration-500 ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} ${scrolled ? "bg-neutral-800" : "bg-warm-500"}`}
        >
          <Nav
            mobile={true}
            scrolled={scrolled}
            onMenuItemClick={() => setIsMenuOpen(false)}
          />
        </div>
      </div>
    </header>
  );
}
