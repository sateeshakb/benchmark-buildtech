"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function QualifiedLead() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    propertyType: "",
    propertyStatus: "",
    carpetArea: "",
    startTimeline: "",
    designerStatus: "",
    consent: false,
  });
  const [currentState, setCurrentState] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const incrementCurrentState = () =>
    setCurrentState((currentState) => currentState + 1);

  const decrementCurrentState = () =>
    setCurrentState((currentState) => currentState - 1);

  const resetCurrentState = () => setCurrentState(1);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onButtonInputClick = (label, option) => {
    setFormData({ ...formData, [label]: option });
  };

  const handleNext = () => {
    if (currentState === 1) {
      if (
        !formData.name ||
        !formData.phone ||
        !formData.email ||
        !formData.city
      ) {
        toast.error("Please all required  details");
        return;
      }
    } else if (currentState === 2) {
      if (
        !formData.propertyType ||
        !formData.propertyStatus ||
        !formData.carpetArea
      ) {
        toast.error("Please select all required fields");
        return;
      }
    }

    incrementCurrentState();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.startTimeline ||
      !formData.designerStatus ||
      !formData.consent
    ) {
      toast.error("Please fill all required fields");
      return;
    }
    try {
      setIsSubmitting(true);
      const res = await fetch("/api/qualified-lead", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        toast.success("Thank you!, We will get back to you shortly");
        setFormData({
          name: "",
          email: "",
          phone: "",
          city: "",
          propertyType: "",
          propertyStatus: "",
          carpetArea: "",
          startTimeline: "",
          designerStatus: "",
          consent: false,
        });
        resetCurrentState();
        return;
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Something went wrong, Please try again");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="border-2 border-neutral-300 px-4 py-6 rounded-md">
      {/* form section */}

      {/* Step indicator*/}
      <div className="flex flex-col  sm:flex-row items-center gap-2 mb-6 w-fit mx-auto">
        <span
          className={`${currentState === 1 ? "text-red-600 font-semibold" : "text-neutral-400"}`}
        >
          ① Basic Details
        </span>
        <span className="rotate-90  sm:rotate-0">→</span>
        <span
          className={`${currentState === 2 ? "text-red-600 font-semibold" : "text-neutral-400"}`}
        >
          ② Property Details
        </span>
        <span className="rotate-90 sm:rotate-0">→</span>
        <span
          className={`${currentState === 3 ? "text-red-600 font-semibold" : "text-neutral-400"}`}
        >
          ③ Planning Stage
        </span>
      </div>
      <form onSubmit={handleSubmit} className="">
        {currentState === 1 ? (
          // basic details
          <div>
            <h3 className="text-neutral-800 font-medium text-lg w-fit mx-auto">
              Tell us about yourself
            </h3>
            {/* name */}
            <label className="mt-4 flex flex-col gap-1 text-neutral-700">
              <span>
                Full Name <span className="text-red-500">*</span>
              </span>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
                className="py-2 px-3 outline-none border border-neutral-200 rounded-md placeholder:text-sm text-neutral-900"
              />
            </label>
            {/* Mobile number */}
            <label className="mt-4 flex flex-col gap-1 cursor-pointer text-neutral-700">
              <span>
                Mobile Number <span className="text-red-500">*</span>
              </span>
              <input
                type="tel"
                name="phone"
                placeholder="Ex: 1234567890"
                value={formData.phone}
                onChange={handleInputChange}
                className="py-2 px-3 outline-none border border-neutral-200 rounded-md placeholder:text-sm text-neutral-900"
              />
            </label>
            {/* Email */}
            <label className="mt-4 flex flex-col gap-1 text-neutral-700">
              <span>
                Email <span className="text-red-500">*</span>
              </span>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleInputChange}
                className="py-2 px-3 outline-none border border-neutral-200 rounded-md placeholder:text-sm text-neutral-900"
              />
            </label>
            {/* City */}
            <label
              htmlFor="city"
              className="mt-4 flex flex-col gap-1 text-neutral-700"
            >
              <span>
                City <span className="text-red-500">*</span>
              </span>
              <input
                type="text"
                name="city"
                id="city"
                placeholder="Enter your city"
                value={formData.city}
                onChange={handleInputChange}
                className="py-2 px-3 outline-none border border-neutral-200 rounded-md placeholder:text-sm text-neutral-900"
              />
            </label>

            <div>
              <button
                className="mt-4 block ml-auto px-3 py-1 font-medium text-neutral-800 rounded-lg bg-primary-500 hover:bg-primary-600 transition-all duration-300"
                type="button"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </div>
        ) : currentState === 2 ? (
          // property details
          <div>
            <h3 className="text-neutral-800 font-medium text-lg w-fit mx-auto mb-4">
              About your property
            </h3>
            <div className="flex flex-col gap-4">
              {/* property type */}
              <div className="flex flex-col gap-2">
                <span className="text-neutral-700 font-medium">
                  Type of Property <span className="text-red-500">*</span>
                </span>
                <div className="flex flex-wrap gap-4">
                  <ButtonInput
                    labelInputs={[
                      "Apartment",
                      "Independent House",
                      "Villa",
                      "Duplex or Penthouse",
                    ]}
                    label={"propertyType"}
                    selectedValue={formData.propertyType}
                    onButtonInputClick={onButtonInputClick}
                  />
                </div>
              </div>
              {/* property status */}
              <div className="mt-4 flex flex-col gap-2">
                <span className="text-neutral-700 font-medium">
                  Property Status <span className="text-red-500">*</span>
                </span>
                <div className="flex flex-wrap gap-2">
                  <ButtonInput
                    labelInputs={[
                      "Newly Purchased",
                      "Under Construction",
                      "Handover Expected Soon",
                      "Ready for Interiors",
                    ]}
                    label={"propertyStatus"}
                    selectedValue={formData.propertyStatus}
                    onButtonInputClick={onButtonInputClick}
                  />
                </div>
              </div>

              {/* carpet size  */}
              <div className="mt-4 flex flex-col gap-2">
                <span className="text-neutral-700 font-medium">
                  Approx. Carpet Area (Sq.ft.){" "}
                  <span className="text-red-500">*</span>
                </span>
                <div className="flex flex-wrap gap-2">
                  <ButtonInput
                    labelInputs={[
                      "Below 800",
                      "800 – 1200",
                      "1200 – 1800",
                      "Above 1800",
                    ]}
                    label="carpetArea"
                    selectedValue={formData.carpetArea}
                    onButtonInputClick={onButtonInputClick}
                  />
                </div>
              </div>
            </div>
            {/* next and back buttons */}
            <div className="w-fit ml-auto flex gap-4 mt-4  ">
              <button
                type="button"
                onClick={decrementCurrentState}
                className="px-3 py-1 font-medium text-neutral-500 rounded-lg border border-neutral-300  hover:opacity-80 transition-all duration-300 "
              >
                Back
              </button>
              <button
                className="px-3 py-1 font-medium text-neutral-800 rounded-lg bg-primary-500 hover:bg-primary-600 transition-all duration-300"
                type="button"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </div>
        ) : currentState === 3 ? (
          // Interior Planning stage
          <div>
            <h3 className="text-neutral-800 font-medium text-lg w-fit mx-auto mb-4">
              Your Interior Plans
            </h3>

            {/* Start Timeline */}
            <div className="mt-4 flex flex-col gap-2">
              <span className="text-neutral-700 font-medium">
                When are you planning to start interiors?{" "}
                <span className="text-red-500">*</span>
              </span>
              <div className="flex flex-wrap gap-2">
                <ButtonInput
                  labelInputs={[
                    "Immediately",
                    "Within 1–3 months",
                    "3–6 months",
                    "Just exploring / Planning stage",
                  ]}
                  label={"startTimeline"}
                  selectedValue={formData.startTimeline}
                  onButtonInputClick={onButtonInputClick}
                />
              </div>
            </div>

            {/* Designer Status */}
            <div className="mt-4 flex flex-col gap-2">
              <span className="text-neutral-700 font-medium">
                Have you finalized any interior designer yet?{" "}
                <span className="text-red-500">*</span>
              </span>
              <div className="flex flex-wrap gap-2">
                <ButtonInput
                  labelInputs={[
                    "No, looking for guidance",
                    "In discussion with few",
                    "Yes, but open to better options",
                  ]}
                  label={"designerStatus"}
                  selectedValue={formData.designerStatus}
                  onButtonInputClick={onButtonInputClick}
                />
              </div>
            </div>

            <div className="flex items-start gap-2 mt-4">
              <input
                type="checkbox"
                name="consent"
                id="consent"
                required
                className="mt-1 accent-primary-500"
                onChange={(e) =>
                  setFormData({ ...formData, consent: e.target.checked })
                }
              />
              <label htmlFor="consent" className="text-sm text-neutral-600">
                I agree to be contacted by Benchmark Buildtech regarding my
                consultation request.
              </label>
            </div>

            {/*  back and submit */}
            <div className="w-fit ml-auto flex gap-4 mt-4 ">
              <button
                type="button"
                onClick={decrementCurrentState}
                className="px-3 py-1 font-medium text-neutral-500 rounded-lg border border-neutral-300  hover:opacity-80 transition-all duration-300 "
              >
                Back
              </button>
              <button
                className="px-3 py-1 font-medium text-neutral-800 rounded-lg bg-primary-500 hover:bg-primary-600 transition-all duration-300"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        ) : null}
      </form>
    </div>
  );
}

export function ButtonInput({
  labelInputs,
  label,
  selectedValue,
  onButtonInputClick,
}) {
  return labelInputs.map((option) => (
    <button
      key={option}
      type="button"
      onClick={() => onButtonInputClick(label, option)}
      className={`px-3 py-2 border rounded-lg text-sm transition-all duration-200 ${
        selectedValue === option
          ? "border-primary-500 bg-primary-50 text-primary-600 "
          : "border-neutral-300 text-neutral-600"
      }`}
    >
      {option}
    </button>
  ));
}
