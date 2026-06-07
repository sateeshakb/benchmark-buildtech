export default function ServiceCard({ icon, title, text }) {
  return (
    <div className="px-4 py-6 flex flex-col gap-4 shadow-lg border border-neutral-200 rounded-lg scale-95 hover:scale-100 hover:shadow-lg hover:shadow-secondary-200 transition-all duration-300 ">
      {/* icon */}
      <div className="bg-secondary-100 w-fit max-auto p-2 border-2 border-secondary-300 rounded-lg  ">
        {icon}
      </div>

      {/* title */}
      <h4 className="text-lg font-medium ">{title}</h4>
      <p className="text-base tracking-wide">{text}</p>
    </div>
  );
}
