import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "فلاي للسفريات",
  description: "تطبيق لخدمات العامة والسفريات",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
      
      </head>
      <body className={`antialiased`}>
       

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}