"use client";

// import { useEffect, useState } from "react";
import styles from "./Profile.module.scss";
import { useRouter } from "next/navigation";

interface UserData {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
}

export default function Profile() {
  // const router = useRouter();
  // const [userData, setUserData] = useState<UserData | null>(null);

  // const handleLogout = () => {
  //   localStorage.removeItem('user');
  //   router.push('/login');
  // };

  // useEffect(() => {
  //   const user = localStorage.getItem('user');
  //   if (!user) {
  //     router.push('/login');
  //     return;
  //   }
    
  //   try {
  //     const parsedUser = JSON.parse(user);
  //     setUserData(parsedUser);
  //   } catch (error) {
  //     console.error('Ошибка при парсинге данных пользователя:', error);
  //     router.push('/login');
  //   }
  // }, [router]);

  // if (!userData) {
  //   return <div>Загрузка...</div>;
  // }

  return (
    <div className={styles.profile}>
      <div className={styles.top}>
        <div className={styles.avatar}>
          <img 
            // src={userData.avatar || "/avatar.png"} 
            alt="Фото профиля" 
          />
        </div>
        <div>
          <h3>
            {/* <em>{`${userData.firstName} ${userData.lastName}`}</em> */}
          </h3>
          <label className={styles.upload}>
            <input type="file" hidden />⬇ Загрузить фото{" "}
            <span>(jpeg, png)</span>
          </label>
        </div>
      </div>

      <div className={styles.grid}>
        <div className={styles.field}>
          <label>Имя</label>
          <input 
            type="text" 
            // value={userData.firstName}
            readOnly
          />
        </div>
        <div className={styles.field}>
          <label>Фамилия</label>
          <input 
            type="text" 
            // value={userData.lastName}
            readOnly
          />
        </div>
        <div className={styles.field}>
          <label>E-mail</label>
          <input 
            type="email" 
            // value={userData.email}
            readOnly
          />
        </div>
      </div>

      <div className={styles.passwordSection}>
        <h3>Пароль</h3>
        <input type="password" value="********" readOnly />
        <button type="button">Сменить пароль</button>
      </div>

      <button 
        type="button" 
        className={styles.editButton}
        // onClick={() => router.push('/profile/edit')}
      >
        Редактировать профиль
      </button>
    </div>
  );
}
