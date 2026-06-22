import Images from "@/lib/images";
import Image from "next/image";
import VisionCard from "./visonCard";
import { TargetIcon } from "lucide-react";
import { Constants } from "@/lib/constants";
import { Lightbulb } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="w-full bg-warm-500 py-20">
      <div className="max-w-360 mx-auto px-4 ">
        {/* about benchmark buildTech section  */}
        <div className="flex flex-col lg:flex-row gap-8 ">
          {/* text section  */}
          <div className="flex-1">
            <h2 className="font-primary font-bold text-[clamp(3rem,4vw,4rem)] ">
              About
            </h2>
            <h3 className="font-secondary font-medium pl-2 pr-10 py-2 bg-neutral-900 inline tracking-wider">
              {" "}
              <span className="text-secondary-500">Benchmark</span>{" "}
              <span className="text-primary-500">Buildtech</span>
            </h3>
            <div className=" mt-6 px-6 py-6 rounded-bl-4xl lg:rounded-bl-none lg:rounded-br-4xl border-2 border-neutral-100 bg-warm-50">
              <p className=" font-semibold tracking-wider  text-secondary-500 text-xl ">
                1. Luxurious Interior Design Agency
              </p>

              <p className="mt-4 font-secondary leading-6 ">
                Benchmark Buildtech is a professional interior fit-out and build
                solutions company specializing in premium residential and
                commercial spaces. We focus on delivering well-planned,
                functional, and refined interiors that balance design intent
                with execution excellence. Our services cover end-to-end
                interior fit-out solutions, from planning and coordination to
                final handover.{" "}
              </p>
            </div>
          </div>

          {/* image section  */}
          <div className="flex-1">
            <Image
              src={Images.aboutImage}
              alt="about benchmark buildtech"
              sizes="(max-width: 768px) 90vw, (max-width: 1024px) 64w, 60vw"
            />
          </div>
        </div>

        {/* expert property solutions section */}

        <div className="mt-16 flex flex-col lg:flex-row gap-8 justify-center items-center">
          {/* text area */}
          <div className="flex-1 order-1 lg:order-2 px-6 py-6 rounded-br-4xl lg:rounded-br-none lg:rounded-bl-4xl border-2 border-neutral-100 bg-warm-50">
            <p className="font-semibold tracking-wider  text-secondary-500 text-xl">
              2. Expert Property Solutions
            </p>

            <p className=" mt-4 font-secondary leading-6 text-neutral-900  ">
              We also offer property consulting and transaction advisory to
              support informed real estate decisions. Every project is driven by
              structured processes, cost transparency, and quality governance.
              We work with homeowners, corporates, property owners, and retail
              businesses. Our approach emphasizes durability, efficiency, and
              long-term value. At Benchmark Buildtech, we create spaces that set
              a benchmark in quality and reliability.
            </p>
          </div>
          {/* image */}
          <div className="flex-1 order-2 lg:order-1">
            <Image
              src={Images.expertProperty}
              alt="expert property solutions by benchmark buildtech"
            ></Image>
          </div>
        </div>

        {/* meet the principle section  */}
        <div className="mt-16   ">
          <p className="font-primary font-bold text-3xl w-fit mx-auto">
            Meet <span className="text-secondary-500">The Principle </span>
          </p>

          {/* wrapper */}

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:max-w-4/5 sm:gap-12 sm:mx-auto border-2 border-warm-600 p-6 rounded-2xl shadow-xl ">
            {/* founder image block */}
            <div className="flex flex-col justify-center items-center">
              <div className="w-72 h-72 rounded-full text-center overflow-hidden relative">
                <Image
                  src={Images.founderImage}
                  alt="Founder of Benchmark Buildtech"
                  className="object-contain object-center"
                />
              </div>
              <p className="mt-4 font-medium text-neutral-900">
                Founder & Principle
              </p>
              <p className="mt-1 text-xl tracking-widest font-bold font-secondary text-secondary-500">
                SATEESHA KB
              </p>
            </div>

            {/* text block */}
            <div className="mt-4 sm:-mt-8 ">
              <p className="tracking-wider">
                Founder & Principal –Benchmark Buildtech Satheesha KB is a
                seasoned civil engineer and PMP®-certified professional with
                over 18 years of experiencein interior fit-outs, real estate,
                and project services. <br /> <br />
                He has successfully led the execution of large-scale residential
                and commercial projects, bringing strong expertise in project
                planning, cost control, contract governance, and quality
                management.
              </p>
            </div>
          </div>
        </div>

        {/* what sets us apart */}
        <div className="mt-20 lg:max-w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <VisionCard
            icon={<TargetIcon size={50} className="text-secondary-500" />}
            title="Our Mission"
            text={Constants.aboutSection.ourVision}
          />
          <VisionCard
            icon={<Lightbulb size={50} className="text-primary-500" />}
            title="Our Vision"
            variant={"primary"}
            text={Constants.aboutSection.ourMission}
          />
        </div>
      </div>
    </section>
  );
}
