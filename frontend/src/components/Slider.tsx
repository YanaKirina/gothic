import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import styles from "./styles/Slider.module.scss";

interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
}

interface SliderProps {
  title: string;
  products: Product[];
  backgroundColor?: string;
  cardBackground?: string;
  buttonBackground?: string;
}


// const products = [
//   { id: 1, image: "/clozes/dress.svg", title: "Шифоновая блузка", price: 2000 },
//   { id: 2, image: "/clozes/dress.svg", title: "Готическая юбка", price: 3000 },
//   { id: 3, image: "/clozes/dress.svg", title: "Платье", price: 4000 },
//   { id: 4, image: "/clozes/dress.svg", title: "Куртка", price: 3500 },
//   { id: 5, image: "/clozes/dress.svg", title: "Пальто", price: 5000 },
// ];

const Slider: React.FC<SliderProps> = ({ 
  title,
  products,
  backgroundColor = "white",
  cardBackground, 
  buttonBackground}) => {
  const swiperRef = useRef<any>(null);

  return (
    <div className={styles.container} style={{ backgroundColor }}>
      <h2>{title}</h2>
  
      <button className={styles.prev} onClick={() => swiperRef.current?.slidePrev()}>
        ❮
      </button>
      <button className={styles.next} onClick={() => swiperRef.current?.slideNext()}>
        ❯
      </button>
  
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          100:{slidesPerView : 1},
          450: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className={styles.productCarousel}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className={styles.productCard}>
              <div className={styles.Card}  style={{ backgroundColor: cardBackground }} >
                <img src={product.image} alt={product.title} className={styles.img}/>
                <button style={{ backgroundColor: buttonBackground }}>
                  <img src="/icons/Heart.svg" alt="" className={styles.img}/>
                </button>
              </div>
              <div className={styles.CardBottom}>
                <h3>{product.title}</h3>
                <p>{product.price} ₽</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
  
      <button className={styles.navigationButton}>Перейти в каталог</button>
    </div>
  );
  
};

export default Slider;
