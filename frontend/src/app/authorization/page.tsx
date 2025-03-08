import styles from "../register/Register.module.scss";

export default function AuthorizationPage() {
  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h2 className={styles.title}>Авторизация</h2>
        <form className={styles.form}>
          <input type="email" placeholder="E-mail" className={styles.input} />
          <input type="password" placeholder="Пароль" className={styles.input} />
        </form>
        <button type="submit" className={styles.button}>Войти</button>
        <button className={styles.button}>
          <span>Нет аккаунт?</span>
          <a href="/register" className={styles.loginLink}>Регистрация</a>
        </button>
      </div>
    </div>
  );
}
