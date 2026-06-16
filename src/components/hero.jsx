import Button from "@/components/button";
import Images from "@/lib/images";
import Image from "next/image";
import ContactModal from "./contactModal";

export default function Hero({ isModalOpen, toggleModal }) {
  return (
    <section id="home" className="w-full bg-bg-primary pt-(--header-height)">
      {/* wrapper */}
      <div className="max-w-360 mx-auto px-4 h-auto max-h-256 pt-10 pb-20 flex flex-col gap-8 lg:flex-row lg:justify-between lg:gap-4 relative">
        {/* text block */}
        <div className="order-2 lg:order-1 lg:w-2/5 flex flex-col gap-8 justify-center items-start sm:w-4/5 sm:self-center lg:-mt-20  ">
          {/* tag line */}
          <div className="flex items-center gap-4">
            <span className="w-8 h-0.5 bg-primary-600"></span>
            <p className="text-primary-600 tracking-widest">
              WHERE DESIGN MEETS EXCELLENCE
            </p>
          </div>
          {/* heading */}
          <p className="text-[clamp(3rem,5vw,4.5rem)] lg:w-[135%]  lg:relative lg:z-10 font-primary font-medium">
            <span className="bg-bg-primary">
              {" "}
              Design. Build. Transform
              <span className="text-secondary-500"> Your Space.</span>
            </span>{" "}
          </p>
          {/* paragraph */}
          <p className="">
            Benchmark Buildtech delivers premium residential and commercial
            interiors with expert project management and flawless execution.
          </p>
          {/* button */}
          <div className="flex gap-8 lg:mt-4">
            <Button
              buttonText="Book Free Consultation"
              variant={"primary"}
              onClickHandler={toggleModal}
            />
            {/* <Button buttonText="View Portfolio" variant={"secondary"} /> */}
          </div>
        </div>
        {/* images block */}
        <div className="order-1 lg:order-2 grid grid-cols-6 grid-rows-5 aspect-4/3 sm:w-4/5 sm:self-center lg:w-3/5 relative  ">
          <div className="absolute top-1/2 -translate-y-1/2 right-0 w-full h-3/4 bg-warm-500 z-0 max-w-180 " />

          <div className="col-start-1 row-start-1 col-end-6 row-end-5 z-5 ">
            <Image
              src={Images.heroImageOne}
              alt="interior image 1"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="row-start-3 col-start-4 row-end-6 col-end-7 z-5">
            <Image
              src={Images.heroImageTwo}
              alt="interior image 2"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
      <ContactModal isModalOpen={isModalOpen} toggleModal={toggleModal} />
    </section>
  );
}
