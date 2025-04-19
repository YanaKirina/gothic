"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./styles/Footer.module.scss";

export default function Footer() {
  const pathname = usePathname();
  const isRegisterPage = pathname === "/register"; // Проверяем, страница регистрации или нет

  return (
    <footer className={`${styles.footer} ${isRegisterPage ? styles.registerFooter : ""}`}>
      {isRegisterPage ? (
        <div className={styles.registerContent}>
          <img src="/icons/Logo.svg" alt="Яна творит" className={styles.logo} />
          <p>© 2021 "Яна творит"</p>
          <p>Все права защищены</p>
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.leftSection}>
              <img src="/icons/Logo.svg" alt="Яна творит" />
              <p>© 2021 "Яна творит"</p>
              <p>Все права защищены</p>
              <Link href="/privacy-policy" className={styles.privacy}>
                Политика конфиденциальности
              </Link>
            </div>
            <div className={styles.rightSection}>
              <nav className={styles.navigation}>
                <h3 className={styles.navTitle}>Навигация</h3>
                <ul className={styles.navList}>
                  <li><Link href="/catalog">Каталог</Link></li>
                  <li><Link href="/news">Новости</Link></li>
                  <li><Link href="/delivery">Доставка</Link></li>
                  <li><Link href="/about">О нас</Link></li>
                  <li><Link href="/contacts">Контакты</Link></li>
                </ul>
              </nav>
              <div className={styles.contacts}>
                <h3 className={styles.contactsTitle}>Контакты</h3>
                <p></p>
                <p>+</p>
                <p>
                  <a href="mailto:a.alambik@gmail.com" className={styles.email}></a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
  
}