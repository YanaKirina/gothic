"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/styles/globals.scss";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isRegisterPage = pathname === "/register";

  return (
    <html lang="ru">
      <body className={isRegisterPage ? "no-scroll" : ""}>
        <div className="layout">
          <Navbar />
          <main className="content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
    
  );
}