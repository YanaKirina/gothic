"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import NavbarRegister from "@/components/NavbarRegister";
import Footer from "@/components/Footer";
import "@/styles/globals.scss";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isRegisterPage = pathname === "/register";

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