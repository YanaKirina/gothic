"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./styles/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftSection}>
            <Link href="/" className={styles.logo}>
              <img src="/icons/Logo.svg" alt="" />
              <p>Яна творит</p>
            </Link>
            <div>

              <p>© 2025 "Яна творит"</p>
              <p>Все права защищены</p>
            </div>
            <Link href="/privacy-policy" className={styles.privacy}>
              Политика конфиденциальности
            </Link>
          </div>
          <div className={styles.rightSection}>
            <nav className={styles.navigation}>
              <h3 className={styles.navTitle}>Навигация</h3>
              <ul className={styles.navList}>
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
            </nav>
            <div className={styles.contacts}>
              <h3 className={styles.contactsTitle}>Контакты</h3>
              <p>Платона Кляты 5, Ростов-на-Дону, 
              344016 Россия</p>
              <p>+7 (998) 547-84-32</p>
              <p>
                <a
                  href="mailto:yanakirinayana@gmail.com"
                  className={styles.email}
                >yanakirinayana@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
