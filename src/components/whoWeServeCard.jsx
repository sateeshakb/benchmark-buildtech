export default function WhoWeServeCard({ icon, title, text }) {
  return (
    <div className="p-8 border bg-warm-50 border-neutral-200 rounded-lg flex flex-col gap-4 items-center scale-95 hover:scale-100 hover:border-secondary-200 hover:shadow-lg hover:shadow-secondary-200 transition-all duration-300">
      {/* icon */}
      <div className="bg-secondary-100 w-fit max-auto p-2 border-2 border-secondary-300 rounded-lg s">
        {icon}
      </div>

      {/* title */}
      <h4 className="text-lg font-medium text-neutral-900 text-center">
        {" "}
        {title}
      </h4>

      {/* text content */}
      <p className="text-base tracking-wide text-neutral-900">{text}</p>
    </div>
  );
}
