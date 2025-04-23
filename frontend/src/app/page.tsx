"use client";

import { useEffect, useState } from "react";
import { api } from "@/utils/api"; // Путь зависит от вашей структуры проекта
import Header from "@/components/Header";
import Categories from "@/components/Categories";
import Slider from "@/components/Slider";
import '../styles/globals.scss';




const bestSellers = [
  {
    id: 1,
    image: "/images/teapot.png",
    title: "Медный чайник с фарфоровой ручкой",
    price: "1 953",
  },
  {
    id: 2,
    image: "/images/teapot.png",
    title: "Медный чайник с фарфоровой ручкой",
    price: "1 953",
  },
  {
    id: 3,
    image: "/images/teapot.png",
    title: "Медный чайник с фарфоровой ручкой",
    price: "1 953",
  },
];

export default function Home() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    api
      .get("/items") 
      .then((res) => setData(res.data))
      .catch((error) => console.error("Ошибка при получении данных:", error));
  }, []);

  return (
    <main>
      <Header />
      <Categories />
      <Slider
        title="Лучшие продажи"
        backgroundColor=""
        cardBackground=""
        buttonBackground=""
      />
      <Slider
        title="Новинки"
        backgroundColor="white"
        cardBackground="#EDF2FC"
        buttonBackground="white"
      />
      <div className="stocks">
        <div className="left-stocks">
          <h2>1 + 1 = 3</h2>
          <p>Закажите два товара и получите третий бесплатно</p>
          <button>Перейти в каталог</button>
        </div>
          <h2 className="logo">Яна <br></br>Творит</h2>
      </div>
      <Slider
        title="Мы рекомендуем"
        backgroundColor="white"
        cardBackground="#EDF2FC"
        buttonBackground="white"
      />
      <Slider
        title="Скидки"
        backgroundColor=""
        cardBackground=""
        buttonBackground=""
      />
    </main>
  );
}
