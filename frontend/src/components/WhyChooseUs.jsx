'use client';
import styles from './styles/WhyChooseUs.module.scss';

const benefits = [
  {
    icon: '/icons/choose/Star.svg',
    title: 'Аутентичность',
    description: 'Каждая вещь в нашем ассортименте создана с уважением к традициям готической субкультуры.'
  },
  {
    icon: '/icons/choose/Moon.svg',
    title: 'Изысканность',
    description: 'Наши коллекции сочетают в себе мрачную элегантность и неповторимый стиль.'
  },
  {
    icon: '/icons/choose/Money.svg',
    title: 'Честная оплата',
    description: 'Предлагаем различные способы оплаты, включая рассрочку для дорогих коллекционных вещей.'
  },
  {
    icon: '/icons/choose/Assortment.svg',
    title: 'Большой ассортимент',
    description: 'От бархатных корсетов до кожаных аксессуаров с серебряной фурнитурой.'
  },
  {
    icon: '/icons/choose/Hands.svg',
    title: 'Доставка по всему миру',
    description: 'Вы можете получить нашу продукцию в кратчайший срок в любую точку земного шара.'
  },
  {
    icon: '/icons/choose/Shield.svg',
    title: 'Гарантия качества',
    description: 'Все изделия проходят строгий контроль перед отправкой клиенту.'
  },
  {
    icon: '/icons/choose/Potion.svg',
    title: 'Удобство в использовании',
    description: 'Продуманные фасоны и качественные материалы обеспечивают комфорт в носке.'
  },
  {
    icon: '/icons/choose/Landscape.svg',
    title: 'Забота об окружающей среде',
    description: 'Используем переработанные материалы и экологичные методы производства.'
  }
];

export default function WhyChooseUs() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Почему выбирают нас</h2>
      <div className={styles.grid}>
        {benefits.map((benefit, index) => (
          <div key={index} className={styles.card}>
            <img className={styles.icon} src={benefit.icon}></img>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
