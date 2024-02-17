
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const roboto = Roboto({ subsets: ["latin"], weight: ['400']});

export const metadata = {
  title: "Create E-commerce web application",
  description: "Sale topics in html, css, JavaScript, React, Typescript",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className={roboto.className}>
        <div className="min-h-screen">
      <Navbar />
        {children}
        </div>

      <Footer />
      </body>
    </html>
  );
}
