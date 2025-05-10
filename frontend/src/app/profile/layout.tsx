"use client"
import { ReactNode } from "react";
import styles from "./Profile.module.scss"; // если хочешь стилизовать отдельно
import { useRouter } from "next/navigation";

export default function ProfileLayout({ children }: { children: ReactNode }) {
  const router = useRouter();

  // const handleLogout = () => {
  //   localStorage.removeItem('user');
  //   localStorage.removeItem('accessToken');
  //   router.push('/login');
  // };

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
        <button onClick={handleLogout}>
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
