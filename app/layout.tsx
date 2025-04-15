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
      <script type="text/javascript" id="ogjs" src="https://appinstallcheck.com/cl/js/8d84p3"></script>
      </head>
      <body
        className={`antialiased`}
      >
        <div id="ogads-locker-container"></div>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
