"use client";

import Link from "next/link";
import styles from "./Navbar.module.scss";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>

      <img src="/icons/Logo.svg" alt="Яна творит" />
      
      <ul className={styles.menu}>
        <li><Link href="/catalog">Каталог</Link></li>
        <li><Link href="/news">Новости</Link></li>
        <li><Link href="/delivery">Доставка</Link></li>
        <li><Link href="/about">О нас</Link></li>
        <li><Link href="/contacts">Контакты</Link></li>
      </ul>

      <div className={styles.icons}>
        <img src="/icons/Home.svg" />
        <img src="/icons/Heart.svg"/>
        <img src="/icons/Cart.svg"/>
        <img src="/icons/User.svg"/>
      </div>
    </nav>
  );
}
