import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/atomic/organisms/layout/NavBar";
import Footer from "@/components/atomic/organisms/layout/Footer";


export const metadata: Metadata = {
  title: "Saul Suazo",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
