"use client";

import images from "@/lib/images";
import Image from "next/image";
import Nav from "./nav";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import Link from "next/link";

export default function Header({
  toggleModal,
  MarkNavLinkActive,
  activeNavLink,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`z-20 fixed top-0 right-0 left-0 bg-neutral-900  `}>
      <div className="w-full max-w-360 mx-auto flex justify-between items-center px-4 py-2">
        <div>
          <Link href={"/"}>
            <Image
              alt="Benchmark BuildTech Logo"
              src={images.logo}
              width={150}
              className="h-auto"
            />
          </Link>
        </div>

        {/* desktop nav */}
        <div className="hidden lg:block">
          <Nav
            activeNavLink={activeNavLink}
            MarkNavLinkActive={MarkNavLinkActive}
            toggleModal={toggleModal}
          />
        </div>

        {/* hamburger menu */}
        <button
          className={`lg:hidden relative p-2 w-8 h-8`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="open navigation menu"
        >
          <Menu
            className={`absolute inset-0 transition-all duration-300  text-warm-50 ${isMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"}`}
          />
          <X
            className={`absolute inset-0 transition-all duration-300 text-warm-50 ${isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"}`}
          />
        </button>
        {/* mobile menu */}
        <div
          className={`lg:hidden absolute overflow-hidden top-(--header-height) left-0 right-0  shadow-lg transition-all duration-500 bg-neutral-900 ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} `}
        >
          <Nav
            mobile={true}
            onMenuItemClick={() => setIsMenuOpen(false)}
            activeNavLink={activeNavLink}
            MarkNavLinkActive={MarkNavLinkActive}
          />
        </div>
      </div>
    </header>
  );
}
