import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-screen max-h-screen flex items-center justify-center">
      {/* container */}
      <div className="w-fit flex flex-col p-4 gap-4 items-center justify-center">
        <p className="text-xl text-neutral-900  font-medium">Page Not Found</p>
        <Link
          href={"/"}
          className="px-4 py-2 border-2 border-secondary-500 text-secondary-500 text-center scale-95 hover:scale-100 transition-all duration-300"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
}
