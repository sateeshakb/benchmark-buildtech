export default function WhoWeServeCard({ icon, title, text }) {
  return (
    <div className="px-4 py-4 border-2   border-warm-600 rounded-lg shadow-lg flex flex-col gap-4 items-center scale-95 hover:scale-100 hover:shadow-warm-700 transition-all duration-300">
      {/* icon */}
      <div className="p-2  mx-auto bg-warm-600/40 rounded-lg border-2 border-warm-700">
        {icon}
      </div>

      {/* title */}
      <h4 className="text-lg font-medium text-warm-900"> {title}</h4>

      {/* text content */}
      <p className="text-base tracking-wide text-neutral-600">{text}</p>
    </div>
  );
}
