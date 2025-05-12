"use client";

import styles from "./Catalog.module.scss";

const products = [
  { id: 2, image: "/clozes/dress.svg", title: "Готическая юбка", price: 3000 },
  { id: 3, image: "/clozes/backpack.svg", title: "Платье", price: 4000 },
  { id: 4, image: "/clozes/dress.svg", title: "Куртка", price: 3500 },
  { id: 5, image: "/clozes/dress.svg", title: "Пальто", price: 5000 },
  { id: 6, image: "/clozes/dress.svg", title: "Тренч", price: 4600 },
];

export default function CatalogPage() {
  return (
    <div className={styles.container}>
      <h2 className={styles.pageTitle}>Каталог</h2>
      <div className={styles.categories}>
        <div className={styles.categoryCard}>
          <img src="/clozes/dress.svg" />
          <span>Одежда</span>
        </div>
        <div className={styles.categoryCard}>
          <img src="/clozes/backpack.svg" />
          <span>Сумки</span>
        </div>
        <div className={styles.categoryCard}>
          <img src="/clozes/horns.svg" />
          <span>Аксессуары</span>
        </div>
        <div className={styles.categoryCard}>
          <img src="/clozes/shoes.svg" />
          <span>Обувь</span>
        </div>
      </div>
      <div className={styles.controls}>
        <input type="text" placeholder="Поиск" className={styles.search} />
        <div className={styles.sort}>
          Сортировка: <strong>По цене ⌄</strong>
        </div>
      </div>
      <div className={styles.grid}>
        {products.map((p) => (
          <div key={p.id} className={styles.card}>
            <div className={styles.productCard}>
              <div className={styles.Card}>
                <img src={p.image} alt={p.title} className={styles.img} />
                <button>
                  <img src="/icons/Heart.svg" alt=""/>
                </button>
              </div>
              <div className={styles.CardBottom}>
                <h3>{p.title}</h3>
                <p>{p.price} ₽</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
