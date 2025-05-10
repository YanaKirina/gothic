"use client";


import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/styles/globals.scss";

export default function RootLayout({ children }: { children: React.ReactNode }) {



  return (
    <html lang="ru">
      <body>
          <Navbar/>
          <main>{children}</main>
          <Footer />
      </body>
    </html>
    
  );
}