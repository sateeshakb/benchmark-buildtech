import { Poppins, Bodoni_Moda } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "sonner";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500"],
});

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni-moda",
});

export const metadata = {
  title: "Benchmark BuildTech",
  description: "Benchmark Buildtech | Luxurious Interior Design Agency",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${bodoniModa.variable} ${poppins.variable} scroll-smooth custom-scrollbar `}
    >
      <body>
        <main className="">{children}</main>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
