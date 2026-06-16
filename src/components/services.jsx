import ServiceCard from "./serviceCard";
import { ServiceCardData } from "@/lib/constants";
import WhoWeServeCard from "./whoWeServeCard";
import Testimonials from "./testimonials";

export default function Services() {
  return (
    <section id="services" className=" py-20 bg-warm-50">
      {/* container */}
      <div className="max-w-360 mx-auto px-4  z-2 ">
        <h3 className="text-3xl font-medium font-primary">
          What <span className="text-secondary-500">we offer</span>
        </h3>
        {/* Interior design services cards */}
        <h4 className="mt-12 font-semibold tracking-wide  text-secondary-500 text-xl">
          1. Our Interior Design Services
        </h4>
        <div className=" mt-12 lg:max-w-3/4  mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
          {ServiceCardData.interiorServices.map((item) => (
            <ServiceCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>

        {/* transaction advisory service cards */}
        <h4 className="mt-12 font-semibold tracking-wide  text-secondary-500 text-xl ">
          2. Our Transaction Advisory Services
        </h4>
        <div className=" mt-12 pb-20 lg:max-w-3/4  mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
          {ServiceCardData.advisoryServices.map((item) => (
            <ServiceCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </div>

      {/* who we serve section */}
      <div className=" bg-warm-500 py-20">
        {/* container */}
        <div className="max-w-360 mx-auto px-4">
          {/* heading */}
          <h3 className="text-3xl font-medium font-primary">
            Who <span className="text-secondary-500">we serve</span>
          </h3>

          {/* who we serve cards */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-3/4 mx-auto gap-x-4 gap-y-6">
            {ServiceCardData.whoWeServeData.map((item) => (
              <WhoWeServeCard
                key={item.id}
                icon={item.icon}
                title={item.title}
                text={item.text}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials section */}
      <Testimonials />
    </section>
  );
}
