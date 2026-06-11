"use client";

import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Portfolio from "@/components/portfolio";
import Services from "@/components/services";
import { useState } from "react";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const [activeNavLink, setActiveNavLink] = useState("home");
  const MarkNavLinkActive = (id) => setActiveNavLink(id);
  return (
    <section>
      <Header
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        activeNavLink={activeNavLink}
        MarkNavLinkActive={MarkNavLinkActive}
      />

      <Hero isModalOpen={isModalOpen} toggleModal={toggleModal} />

      <About />

      <Services />

      {/* <Portfolio /> */}

      <Contact isModalOpen={isModalOpen} toggleModal={toggleModal} />

      <Footer
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        activeNavLink={activeNavLink}
        MarkNavLinkActive={MarkNavLinkActive}
      />
    </section>
  );
}
