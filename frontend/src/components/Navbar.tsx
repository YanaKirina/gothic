"use client";
import Link from "next/link";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <img src="/icons/Logo.svg" alt="Яна творит" className={styles.logo} />

      <ul className={styles.menu}>
        <li><Link href="/catalog">Каталог</Link></li>
        <li><Link href="/news">Новости</Link></li>
        <li><Link href="/delivery">Доставка</Link></li>
        <li><Link href="/about">О нас</Link></li>
        <li><Link href="/contacts">Контакты</Link></li>
      </ul>

      <div className={styles.icons}>
        <button><img src="/icons/Home.svg" /></button>
        <button><img src="/icons/Heart.svg" /></button>
        <button><img src="/icons/Cart.svg" /></button>
        <button><img src="/icons/User.svg" /></button>
      </div>
      
    </nav>
    
  );
}