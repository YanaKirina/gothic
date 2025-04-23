"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Register.module.scss";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Пароли не совпадают");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          firstName: formData.firstName,
          lastName: formData.lastName,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Ошибка при регистрации");
      }

      const data = await response.json();
      
      // Сохраняем данные пользователя в localStorage
      localStorage.setItem('user', JSON.stringify(data.user));
      
      // Перенаправляем на страницу профиля
      router.push("/profile");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ошибка при регистрации");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h2 className={styles.title}>Регистрация</h2>
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
            type="text"
            name="firstName"
            placeholder="Имя"
            className={styles.input}
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Фамилия"
            className={styles.input}
            value={formData.lastName}
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
          <input
            type="password"
            name="confirmPassword"
            placeholder="Подтвердите пароль"
            className={styles.input}
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <button type="submit" className={styles.button}>
            Зарегистрироваться
          </button>
          <Link href="/login">
        <button className={styles.button}>
          Авторизация
        </button>
        </Link>
        </form>
      </div>
    </div>
  );
}
