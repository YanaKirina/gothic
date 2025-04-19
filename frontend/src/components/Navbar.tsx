"use client";
import Link from "next/link";
import styles from "./styles/Navbar.module.scss";
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
      <Link href="/" className={styles.logo}>
        <img src="/icons/Logo.svg" alt="" />
        <p>Яна творит</p>
      </Link>

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
        <Link href="/">
          <button>
            <img src="/icons/Home.svg" />
          </button>
        </Link>
          <button>
            <img src="/icons/Heart.svg" />
          </button>
          <button>
            <img src="/icons/Cart.svg" />
          </button>
          <Link href="/profile">
            <button>
              <img src="/icons/User.svg" />
            </button>
          </Link>
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
