"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./styles/Navbar.module.scss";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    router.push(path);
  };

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
            <a href="/catalog" onClick={(e) => handleLinkClick(e, "/catalog")}>Каталог</a>
          </li>
          <li>
            <a href="/news" onClick={(e) => handleLinkClick(e, "/news")}>Новости</a>
          </li>
          <li>
            <a href="/delivery" onClick={(e) => handleLinkClick(e, "/delivery")}>Доставка</a>
          </li>
          <li>
            <a href="/about" onClick={(e) => handleLinkClick(e, "/about")}>О нас</a>
          </li>
          <li>
            <a href="/contacts" onClick={(e) => handleLinkClick(e, "/contacts")}>Контакты</a>
          </li>
        </ul>

        <div className={styles.icons}>
          <a href="/" onClick={(e) => handleLinkClick(e, "/")}>
            <button>
              <img src="/icons/Home.svg" />
            </button>
          </a>
          <button>
            <img src="/icons/Heart.svg" />
          </button>
          <button>
            <img src="/icons/Cart.svg" />
          </button>
          <a href="/profile" onClick={(e) => handleLinkClick(e, "/profile")}>
            <button>
              <img src="/icons/User.svg" />
            </button>
          </a>
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
