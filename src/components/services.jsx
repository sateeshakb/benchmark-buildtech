import { Hammer } from "lucide-react";
import ServiceCard from "./serviceCard";
import { ServiceCardData } from "@/lib/constants";
import { Home } from "lucide-react";
import WhoWeServeCard from "./whoWeServeCard";
import Testimonials from "./testimonials";

export default function Services() {
  return (
    <section id="services" className=" py-12 bg-warm-50">
      {/* container */}
      <div className="max-w-360 mx-auto px-4  z-2 ">
        <h3 className="text-3xl font-medium font-primary">
          What <span className="text-secondary-500">we offer</span>
        </h3>
        {/* Interior design services cards */}
        <h4 className="mt-8  font-semibold text-lg tracking-wider">
          1. Our Interior Design Services
        </h4>
        <div className=" mt-8 lg:max-w-3/4  mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
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
        <h4 className="mt-8 font-semibold text-lg tracking-wider ">
          2. Our Transaction Advisory Services
        </h4>
        <div className=" mt-8 lg:max-w-3/4  mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
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
      <div className="mt-10 bg-warm-500 py-8">
        {/* container */}
        <div className="max-w-360 mx-auto px-4">
          {/* heading */}
          <h3 className="text-3xl font-medium font-primary">
            Who <span className="text-secondary-500">we serve</span>
          </h3>

          {/* who we serve cards */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-3/4 mx-auto gap-3">
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
