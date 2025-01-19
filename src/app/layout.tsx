import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import JosefinSans from "./Fonts/font";
import Footer from "@/components/Footer";
import { CartFunctionality } from '@/components/cartcontext';



export const metadata: Metadata = {
  title: "Hekto",
  description: "auther Aliza batool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${JosefinSans.className} antialiased bg-white text-black`}
      >
        <CartFunctionality>
        <Header/>
        {children}
        <Footer/>
        </CartFunctionality>
      </body>
    </html>
  );
}
