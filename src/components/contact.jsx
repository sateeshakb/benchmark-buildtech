import Button from "./button";
import ContactModal from "./contactModal";
import QualifiedLead from "./qualifiedLead";

export default function Contact({ isModalOpen, toggleModal }) {
  return (
    <section id="contact" className=" pt-20 pb-84 bg-warm-50">
      <div className="max-w-360 mx-auto px-4 flex flex-col lg:flex-row gap-12 lg:gap-4">
        {/* contact text */}
        <div className="flex-1 flex flex-col">
          {/* label */}
          <div className="flex items-center gap-3">
            <span className="w-6 h-0.5 bg-primary-600"></span>
            <p className="text-primary-600 tracking-widest">
              Get Started Today
            </p>
          </div>

          {/* title */}
          <h2 className=" mt-4 text-[clamp(2rem,4vw,3.8rem)] font-primary font-semibold ">
            Let's Build{" "}
            <span className="text-secondary-500">Your Dream Space</span>
          </h2>
          <p className="mt-4 text-md tracking-wider">
            Tell us about your project and our experts will craft a personalized
            interior plan for you.
          </p>
          <div className="mt-8 flex flex-col gap-8 items-start">
            <p>
              Not ready to fill the form?{" "}
              <span className=" italic font-medium text-secondary-500">
                Click the below button to have a free consultation.
              </span>
            </p>
            <Button
              buttonText="Book Free Consultation"
              ariaLabel="Book Free Consultation"
              variant={"primary"}
              onClickHandler={toggleModal}
            />
          </div>
        </div>
        {/* qualified contact form */}
        <div className="flex-1">
          <QualifiedLead />
        </div>
      </div>
    </section>
  );
}
