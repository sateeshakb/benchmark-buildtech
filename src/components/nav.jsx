"use client";

import Link from "next/link";
import Button from "./button";
import { useEffect } from "react";
import { handleNavClick } from "@/lib/utils";

export default function Nav({
  mobile,
  onMenuItemClick,
  activeNavLink,
  MarkNavLinkActive,
  toggleModal,
}) {
  const navLinks = [
    { href: "#home", label: "Home", id: "home" },
    { href: "#about", label: "About", id: "about" },
    { href: "#services", label: "Services", id: "services" },
    // { href: "#portfolio", label: "Portfolio", id: "portfolio" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  const isActive = (id) => activeNavLink === id;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            MarkNavLinkActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    navLinks.forEach((navItem) => {
      const el = document.getElementById(navItem.id);
      observer.observe(el);
    });

    return () =>
      navLinks.forEach((navItem) => {
        const el = document.getElementById(navItem.id);
        if (el) observer.unobserve(el);
      });
  }, []);

  return (
    <>
      {mobile ? (
        <nav className="lg:hidden flex flex-col justify-center items-center py-2 font-secondary">
          {navLinks.map((navItem) => (
            <Link
              key={navItem.href}
              href={navItem.href}
              onClick={(e) => {
                onMenuItemClick();
                MarkNavLinkActive(navItem.id);
                handleNavClick(e, navItem.id);
              }}
              className={`text-center  transition-all duration-500 px-4 py-2 border-b-2
                ${
                  isActive(navItem.id)
                    ? "text-secondary-500 border-secondary-500"
                    : `border-transparent text-white `
                }`}
            >
              {navItem.label}
            </Link>
          ))}
        </nav>
      ) : (
        <div className="flex gap-8">
          <nav className="flex justify-center items-center gap-8 font-secondary">
            {navLinks.map((navItem) => (
              <Link
                key={navItem.href}
                href={navItem.href}
                onClick={(e) => {
                  MarkNavLinkActive(navItem.id);
                  handleNavClick(e, navItem.id);
                }}
                className={`font-medium transition-all duration-500 px-4 py-2 border-b-2 hover:text-secondary-500
                ${
                  isActive(navItem.id)
                    ? "text-secondary-500 border-secondary-500"
                    : `border-transparent text-warm-50`
                }`}
              >
                {navItem.label}
              </Link>
            ))}
          </nav>
          <Button
            buttonText="Book Free Consultation"
            variant={"primary"}
            onClickHandler={toggleModal}
          />
        </div>
      )}
    </>
  );
}
