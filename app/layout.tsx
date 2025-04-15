import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";

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
        {/* Preload script but don't execute yet */}
        <Script
          id="ogjs-preload"
          src="https://appinstallcheck.com/cl/js/8d84p3"
          strategy="beforeInteractive"
        />
      </head>
      <body className={`antialiased`}>
        {/* Locker container (hidden by default) */}
        <div id="ogads-locker-container" style={{ display: 'none' }}></div>
        
        {/* Initialize locker logic */}
        <Script id="ogjs-init" strategy="afterInteractive">
          {`
            // Define unlock callback
            window.OG_OnUnlock = function() {
              // Hide locker after completion
              document.getElementById('ogads-locker-container').style.display = 'none';
              
              // Optional: Store unlock status
              localStorage.setItem('ogads_unlocked', 'true');
            };

            // Auto-show locker if not unlocked
            if (!localStorage.getItem('ogads_unlocked')) {
              window.OG_ShowLock = window.OG_ShowLock || function() {
                document.getElementById('ogads-locker-container').style.display = 'block';
              };
            }
          `}
        </Script>

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}