"use client";
import styles from "./styles/Navbar.module.scss";

export default function NavbarRegister() {
  return (
    <nav className={styles.navbar}>
      {/* Логотип по центру */}
      <img src="/icons/Logo.svg" alt="Яна творит" className={styles.logoCenter} />

      {/* Иконки справа */}
      <div className={styles.icons}>
        <img src="/icons/Home.svg" />
        <img src="/icons/Heart.svg" />
        <img src="/icons/Cart.svg" />
        <img src="/icons/User.svg" />
      </div>
    </nav>
  );
}
