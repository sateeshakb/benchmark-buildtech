"use client";
import { X } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactModal({ isModalOpen, toggleModal }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
      consent: formData.get("consent"),
    };

    try {
      setIsSubmitting(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        toast.success("Thank You, We'll get back to you shortly!");
        e.target.reset();
        toggleModal();
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    // container
    <section
      onClick={toggleModal}
      className={` fixed inset-0  w-full h-full flex items-center justify-center bg-neutral-800/60 z-20 transition-all duration-500 px-4 ${
        isModalOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {/* modal container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`px-4 py-4 flex flex-col w-full md:w-125 bg-warm-50 border-2 border-warm-900 rounded-2xl relative transition-all duration-500 ${isModalOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none "}`}
      >
        <button onClick={toggleModal}>
          <X
            strokeWidth={3}
            className="absolute top-4 right-4 font-bold text-neutral-700 hover:text-neutral-500"
          />
        </button>
        <div>
          <p className="text-lg text-secondary-600 font-medium  ">
            Book Free Consultation
          </p>
          <p className="mt-1 text-base text-neutral-800">
            Share you details and our experts will get back to you shortly.
          </p>
        </div>

        {/* form */}
        <form
          className="mt-6 flex flex-col gap-4 justify-center items-stretch"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            required
            className="px-2 py-2 border-b-2 border-neutral-400 outline-none  "
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            required
            className="px-2 py-2 border-b-2 border-neutral-400 outline-none  "
          />
          <input
            type="tel"
            name="phone"
            id="phone"
            pattern="[6-9][0-9]{9}"
            placeholder="Enter your 10 digit mobile number"
            required
            className="px-2 py-2 border-b-2 border-neutral-400 outline-none  "
          />
          <textarea
            name="message"
            id="message"
            placeholder="Your message (optional)"
            className="px-2 py-2 border-b-2 border-neutral-400 outline-none  "
          ></textarea>
          <div className="flex items-start gap-2 mt-4">
            <input
              type="checkbox"
              name="consent"
              id="consent"
              required
              className="mt-1 accent-primary-500"
            />
            <label htmlFor="consent" className="text-sm text-neutral-600">
              I agree to be contacted by Benchmark Buildtech regarding my
              consultation request.
            </label>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 px-4 py-2 bg-primary-500 text-neutral-900 font-medium hover:bg-primary-600 transition-all duration-150"
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
}
