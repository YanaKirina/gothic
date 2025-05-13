"use client";

import styles from "./Catalog.module.scss";

const products = [
  { id: 2, image: "/clozes/1.png", title: "Блузка", price: 3000 },
  { id: 3, image: "/clozes/2.png", title: "Юбка", price: 4000 },
  { id: 4, image: "/clozes/3.png", title: "Платье", price: 3500 },
  { id: 5, image: "/bags/1.png", title: "Сумка", price: 5000 },
  { id: 6, image: "/bags/2.png", title: "Сумка", price: 4600 },
  { id: 7, image: "/bags/3.png", title: "Сумка", price: 4600 },
  { id: 8, image: "/shoes/1.png", title: "Туфли", price: 5000 },
  { id: 9, image: "/shoes/2.png", title: "Туфли", price: 4600 },
  { id: 10, image: "/shoes/3.png", title: "Туфли", price: 4600 },
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
