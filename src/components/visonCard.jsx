export default function VisionCard({ icon, text, title, variant }) {
  const themes = {
    primary: {
      iconBg: "bg-primary-100",
      iconBorder: "border-primary-300",
      glow: "bg-primary-500/30",
    },
    secondary: {
      iconBg: "bg-secondary-100",
      iconBorder: "border-secondary-300",
      glow: "bg-secondary-500/30",
    },
  };
  const activeTheme = themes[variant] || themes.secondary;

  return (
    <div className="w-full h-full px-6 py-8 border border-neutral-200 bg-warm-50 rounded-xl flex flex-col gap-4 justify-center items-center relative overflow-hidden">
      {/* Icon and title */}
      <div className="">
        <div
          className={`px-2 py-2 w-fit mx-auto rounded-xl  border-2 ${activeTheme.iconBg} ${activeTheme.iconBorder}`}
        >
          {icon}
        </div>
        <h4 className="mt-3 text-xl font-semibold"> {title} </h4>
      </div>

      {/* text block */}
      <p className=""> {text} </p>
      {/* glow */}
      <div
        className={`absolute w-1/2 h-1/2 bottom-[-20%] left-[-20%] blur-3xl ${activeTheme.glow} `}
      ></div>
    </div>
  );
}
