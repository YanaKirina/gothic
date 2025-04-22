'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from "../register/Register.module.scss";

export default function AuthorizationPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Ошибка авторизации');
      }

      const data = await response.json();
      
      // Сохраняем данные пользователя в localStorage
      localStorage.setItem('user', JSON.stringify(data.user));
      
      // Перенаправляем на страницу профиля
      router.push('/profile');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Произошла ошибка при авторизации');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h2 className={styles.title}>Авторизация</h2>
        {error && <div className={styles.error}>{error}</div>}
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            className={styles.input}
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Пароль"
            className={styles.input}
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className={styles.button}>Войти</button>
        </form>
        <button className={styles.button}>
          <span>Нет аккаунт?</span>
          <a href="/register" className={styles.loginLink}>Регистрация</a>
        </button>
      </div>
    </div>
  );
}
