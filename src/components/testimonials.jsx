import { TestimonialsData } from "@/lib/constants";
import TestimonialCard from "./testimonialCard";

export default function Testimonials() {
  return (
    <section className="bg-warm-50 py-8 ">
      {/* container */}
      <div className="max-w-360 mx-auto px-4">
        {/* section title */}
        <h3 className="text-3xl font-medium font-primary">
          what <span className="text-secondary-500">our clients says</span>
        </h3>

        {/* testimonial cards */}
        <div className="pt-12 lg:max-w-3/4 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {TestimonialsData.map((item) => (
            <TestimonialCard
              key={item.id}
              startCount={item.startCount}
              reviewerName={item.reviewerName}
              reviewText={item.reviewText}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
