"use client";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <nav className={styles.navbar}>
      <img src="/icons/Logo.svg" alt="Яна творит" className={styles.logo} />

      <div className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ""}`}>
        <ul>
          <li>
            <Link href="/catalog">Каталог</Link>
          </li>
          <li>
            <Link href="/news">Новости</Link>
          </li>
          <li>
            <Link href="/delivery">Доставка</Link>
          </li>
          <li>
            <Link href="/about">О нас</Link>
          </li>
          <li>
            <Link href="/contacts">Контакты</Link>
          </li>
        </ul>

        <div className={styles.icons}>
          <button>
            <img src="/icons/Home.svg" />
          </button>
          <button>
            <img src="/icons/Heart.svg" />
          </button>
          <button>
            <img src="/icons/Cart.svg" />
          </button>
          <button>
            <img src="/icons/User.svg" />
          </button>
        </div>
      </div>

      <button
        className={`${styles.burger} ${isMenuOpen ? styles.burgerOpen : ""}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}
