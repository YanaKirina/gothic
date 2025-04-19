"use client";

import Link from "next/link";
import styles from "./styles/Categories.module.scss";

const Categories = () => {
    return (
        <div className={styles.container}>
            <h2>Наша продукция</h2>
            <div>
                <button>
                    <img src="/clozes/dress.svg" />
                    <span>Одежда</span>
                </button>
                <button>
                    <img src="/clozes/backpack.svg" />
                    <span>Сумки</span>
                </button>
                <button>
                    <img src="/clozes/horns.svg" />
                    <span>Аксессуары</span>
                </button>
                <button>
                    <img src="/clozes/shoes.svg" />
                    <span>Обувь</span>
                </button>
                <button>
                    <img src="/clozes/order.svg" />
                    <span>Индивидуальный заказ</span>
                </button>
                <button>
                    <img src="/clozes/sales.svg" />
                    <span>Скидки и предложения</span>
                </button>
            </div>
        </div>
    );
};

export default Categories;
