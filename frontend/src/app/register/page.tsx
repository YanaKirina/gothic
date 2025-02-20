import styles from "./Register.module.scss";

export default function RegisterPage() {
  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h2 className={styles.title}>Регистрация</h2>
        <form className={styles.form}>
          <input type="email" placeholder="E-mail" className={styles.input} />
          <input type="password" placeholder="Пароль" className={styles.input} />
          <input type="password" placeholder="Повторите пароль" className={styles.input} />
          <button type="submit" className={styles.button}>Регистрация</button>
        </form>
        <div className={styles.footer}>
          <span>Есть аккаунт ?</span>
          <a href="/login" className={styles.loginLink}>Войти</a>
        </div>
      </div>
    </div>
  );
}
