import Image from "next/image";
import Button from "./button";
import Images from "@/lib/images";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";

export default function Footer({ isModalOpen, toggleModal }) {
  const navLinks = [
    { href: "/", label: "Home", id: "home" },
    { href: "#about", label: "About", id: "about" },
    { href: "#services", label: "Services", id: "services" },
    // { href: "#portfolio", label: "Portfolio", id: "portfolio" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  return (
    <section className="bg-neutral-900 ">
      {/* container */}
      <div className="max-w-360 mx-auto  px-4 py-10 ">
        {/* CTA block */}
        <div className="max-w-125 md:max-w-248  mx-auto py-4 px-4 translate-y-[-60%]  bg-neutral-900 border border-neutral-800 rounded-xl flex flex-col md:flex-row gap-6 md:gap-4 relative overflow-hidden ">
          {/* gradient glow */}
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary-500/20 rounded-full blur-3xl pointer-events-none" />

          {/* text block */}
          <div className="md:w-1/2 flex flex-col gap-4 justify-center">
            <h4 className="text-neutral-100 text-[clamp(1.2rem,3vw,2rem)] font-medium tracking-wider">
              Transform Your Space Into a Masterpiece
            </h4>
            <p className="text-sm text-neutral-600 leading-5 ">
              From concept to completion, we craft interiors that reflect your
              personality and elevate your lifestyle.
            </p>
            <Button
              buttonText="Book Free Consultation"
              variant={"primary"}
              onClickHandler={toggleModal}
            />
          </div>

          {/* image block */}
          <div className="md:w-1/2 aspect-2/1  ">
            <Image
              src={Images.footerImage}
              alt="Luxurious Interior Design"
              className="ml-4 rounded-l-lg  "
            />
          </div>
        </div>

        <div className="-mt-48 md:-mt-20 flex flex-col flex-wrap items-center justify-center sm:flex-row md:items-start sm:justify-evenly gap-4 border py-6 border-neutral-700 rounded-lg">
          {/* Logo */}
          <div className="flex flex-col gap-4 items-center">
            <Image src={Images.logo} alt="Benchmark Builtech logo" />
            <p className="text-warm-50 text-sm  tracking-wider">
              Crafting Luxurious Spaces
            </p>
            <p className="text-warm-50 font-medium ">Follow Us </p>

            {/* social icons */}
            <div className="-mt-2 flex gap-3 ">
              <Link
                href={
                  "https://www.linkedin.com/in/satheesha-k-b-pmp%C2%AE-4694aa40/"
                }
                target="_blank"
              >
                <Image
                  src={Images.linkedInIcon}
                  alt="Linkedin"
                  width={25}
                  height={25}
                />
              </Link>
              <Link
                href={"https://www.instagram.com/benchmarkbuildtech "}
                target="_blank"
              >
                <Image
                  src={Images.instagramIcon}
                  alt="Instagram"
                  width={25}
                  height={25}
                  className="text-white"
                />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="">
            <p className="text-warm-50 text-lg font-medium underline underline-offset-8 decoration-secondary-500">
              Quick Links
            </p>
            <div className="mt-4 flex flex-col gap-3 items-center text-neutral-500 ">
              {navLinks.map((navItem) => (
                <Link
                  key={navItem.href}
                  href={navItem.href}
                  className="hover:text-secondary-500 "
                >
                  {navItem.label}
                </Link>
              ))}
            </div>
          </div>

          {/* contact details */}
          <div className="flex flex-col items-center">
            <p
              className="inline
            text-warm-50 text-lg font-medium underline underline-offset-8
            decoration-secondary-500"
            >
              Contact Details
            </p>
            <div className="mt-4 flex flex-col items-center gap-3 text-neutral-500">
              {/* google map location */}
              <Link
                target="_blank"
                href={"https://maps.app.goo.gl/RQAyXxRBEXJviYAc9"}
              >
                <MapPin size={30} className="text-warm-50 inline" />
                <span className="ml-3 text-neutral-500 hover:text-secondary-500">
                  GMap Address
                </span>
              </Link>

              {/* Contact number */}
              <a
                href="tel:+918660171759"
                className="flex items-center gap-3 hover:text-secondary-500 transition-colors duration-200"
              >
                <Phone size={25} className="text-warm-50" />
                <span>+91 86601 71759</span>
              </a>

              {/* Mail */}
              <a
                href="mailto:projects@benchmarkbuildtech.co.in"
                className="flex items-center gap-3 hover:text-secondary-500 transition-colors duration-200"
              >
                <Mail size={25} className="text-warm-50" />
                <span>projects@benchmarkbuildtech.co.in</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 w-fit mx-auto ">
          <p className="text-neutral-500">
            &copy;
            {new Date().getFullYear()} Benchmark Buildtech. All rights reserved
            |{" "}
            <span className="pointer text-secondary-500 tracking-widest">
              {" "}
              <Link href={"https://www.instagram.com/mavericksyntax/"}>
                Crafted with &hearts; by{" "}
                <span className="text-primary-500 underline decoration-warm-50 underline-offset-4">
                  {" "}
                  Maverick Syntax
                </span>
              </Link>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
