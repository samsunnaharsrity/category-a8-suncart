import { Geist } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "animate.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata = {
  title: "SunCart",
  description: "Summer Essentials Store",
  icon: "/logo2.png",
};
// export const metadata = {
//   icons: {
//     icon: "/icon.png",
//   },
// };
export default function RootLayout({ children }) {
  return (
    <html
      lang="en" suppressHydrationWarning
      className={`${geistSans.className} ${montserrat.variable} h-full antialiased light`}
    >
      <body className="min-h-screen flex flex-col bg-white text-black">

          <Navbar></Navbar>
        <main className="container mx-auto">
          {children}
        </main>
          <Footer></Footer>

      </body>
    </html>
  );
}
