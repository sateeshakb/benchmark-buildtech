"use client";

import Link from "next/link";

export default function Nav({ mobile, onMenuItemClick, scrolled, active }) {
  const navLinks = [
    { href: "/", label: "Home", id: "home" },
    { href: "#about", label: "About", id: "about" },
    { href: "#services", label: "Services", id: "services" },
    { href: "#portfolio", label: "Portfolio", id: "portfolio" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  const isActive = (id) => active === id;

  return (
    <>
      {mobile ? (
        <nav className="lg:hidden flex flex-col justify-center items-center py-2 font-secondary">
          {navLinks.map((navItem) => (
            <Link
              key={navItem.href}
              href={navItem.href}
              onClick={onMenuItemClick}
              className={`text-center transition-all duration-500 px-4 py-2 border-b-2
                ${
                  isActive(navItem.id)
                    ? "text-secondary-500 border-secondary-500"
                    : `border-transparent ${
                        scrolled
                          ? "text-white hover:text-secondary-500"
                          : "text-black hover:text-secondary-500"
                      }`
                }`}
            >
              {navItem.label}
            </Link>
          ))}
        </nav>
      ) : (
        <nav className="flex justify-center items-center gap-8 font-secondary">
          {navLinks.map((navItem) => (
            <Link
              key={navItem.href}
              href={navItem.href}
              className={`font-medium transition-all duration-500 px-4 py-2 border-b-2
                ${
                  isActive(navItem.id)
                    ? "text-secondary-500 border-secondary-500"
                    : `border-transparent ${
                        scrolled
                          ? "text-white hover:text-secondary-500"
                          : "text-black hover:text-secondary-500"
                      }`
                }`}
            >
              {navItem.label}
            </Link>
          ))}
        </nav>
      )}
    </>
  );
}
// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export default function Nav({ mobile, onMenuItemClick, scrolled }) {
//   const pathname = usePathname();

//   const navLinks = [
//     { href: "/", label: "Home" },
//     { href: "/about", label: "About" },
//     { href: "/services", label: "Services" },
//     { href: "/portfolio", label: "Portfolio" },
//     { href: "/contact", label: "Contact" },
//   ];

//   return (
//     <>
//       {mobile ? (
//         // mobile nav-links
//         <nav className="lg:hidden flex flex-col justify-center items-center py-2 font-secondary ">
//           {navLinks.map((navItem) => (
//             <Link
//               key={navItem.href}
//               href={navItem.href}
//               onClick={onMenuItemClick}
//               className={`text-center transition-all duration-500 px-4 py-2 border-b-2
//             ${
//               navItem.href === pathname
//                 ? "text-secondary-500 border-secondary-500"
//                 : ` border-transparent ${scrolled ? "text-white  hover:text-secondary-500" : "text-black  hover:text-secondary-500"}`
//             }`}
//             >
//               {navItem.label}
//             </Link>
//           ))}
//         </nav>
//       ) : (
//         // desktop nav-links
//         <nav
//           className={`flex justify-center items-center gap-8 font-secondary `}
//         >
//           {navLinks.map((navItem) => (
//             <Link
//               key={navItem.href}
//               href={navItem.href}
//               className={`font-medium transition-all duration-500 px-4 py-2 border-b-2
//             ${
//               navItem.href === pathname
//                 ? "text-secondary-500 border-secondary-500"
//                 : `border-transparent ${scrolled ? "text-white  hover:text-secondary-500" : "text-black hover:text-secondary-500"}`
//             }`}
//             >
//               {" "}
//               {navItem.label}{" "}
//             </Link>
//           ))}
//         </nav>
//       )}
//     </>
//   );
// }
