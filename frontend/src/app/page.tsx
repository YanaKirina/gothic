"use client"; 

import { useEffect, useState } from 'react';
import { api } from '@/utils/api'; // Путь зависит от вашей структуры проекта


export default function Home() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    api.get('/items') // Предположим, что /items - это маршрут на вашем бэкенде
      .then((res) => setData(res.data))
      .catch((error) => console.error('Ошибка при получении данных:', error));
  }, []);

  return (
    <div>
      <h1>Товары</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li> // Выводим товары
        ))}
      </ul>
    </div>
  );
}
