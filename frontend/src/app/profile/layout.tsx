"use client"
import Link from "next/link";
import { ReactNode } from "react";
import styles from "./Profile.module.scss"; // если хочешь стилизовать отдельно

export default function ProfileLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <h2>Личный кабинет</h2>
        <button>
            <img src="/icons/User.svg"/>
            <p>Детали профиля</p>
        </button>
        <button>
            <img src="/icons/Cart.svg"/>
            <p>Заказы</p>
        </button>
        <button>
            <img src="/icons/Heart.svg"/>
            <p>Список желаемого</p>
        </button>
        <button>
            <img src="/icons/Exit.svg"/>
            <p>Выйти</p>
        </button>
      </div>
      <main className={styles.content}>
        {children}
      </main>
    </div>
  );
}
