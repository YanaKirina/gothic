"use client";

import Header from "@/components/Header";
import Categories from "@/components/Categories";
import Slider from "@/components/Slider";
import Reviews from "@/components/Reviews";
import WhyChooseUs from "@/components/WhyChooseUs"
import '../styles/globals.scss';

const sales = [
    { id: 1, image: "/clozes/1.png", title: "Шифоновая блузка", price: 2000 },
    { id: 2, image: "/clozes/2.png", title: "Готическая юбка", price: 3000 },
    { id: 3, image: "/clozes/3.png", title: "Платье", price: 4000 },
    { id: 4, image: "/clozes/1.png", title: "Куртка", price: 3500 },

  ];

export default function Home() {

  return (
    <main>
      <Header />
      <Categories />
      <Slider
        title="Лучшие продажи"
        products={sales}
        backgroundColor=""
        cardBackground=""
        buttonBackground=""
      />
      <Slider
        title="Новинки"
        products={sales}
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
        products={sales}
        backgroundColor="white"
        cardBackground="#EDF2FC"
        buttonBackground="white"
      />
      <Slider
        title="Скидки"
        products={sales}
        backgroundColor=""
        cardBackground=""
        buttonBackground=""
      />
      <Reviews/>
      <WhyChooseUs/>
    </main>
  );
}
