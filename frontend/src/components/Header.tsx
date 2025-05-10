"use client";

import styles from "./styles/Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.info}>
        <h1>Хит продаж</h1>
        <h2>Пальто</h2>
        <span>
          <p>Цена</p>
          <p>20 000р</p>
        </span>
        <button>Купить</button>
      </div>
      <img src="/clozes/main.svg" />
    </header>
  );
};

export default Header;
