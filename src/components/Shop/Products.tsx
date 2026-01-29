// src/components/Shop/Products.tsx
import React from 'react';
import ProductCard from './ProductCard';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: number;
}

interface ProductsProps {
  addToCart: (item: any) => void;
  limit?: number;
}

const allProducts: Product[] = [
  {
    id: 1,
    name: 'Мармелад Клубника',
    price: 150,
    description: 'Нежный мармелад из сока клубники с сахаром и пектином',
    image: '🍓',
    category: 'Ягодные',
    rating: 4.8,
  },
  {
    id: 2,
    name: 'Мармелад Апельсин',
    price: 140,
    description: 'Яркий и сочный мармелад с ароматом свежего апельсина',
    image: '🍊',
    category: 'Цитрусовые',
    rating: 4.7,
  },
  {
    id: 3,
    name: 'Мармелад Лимон',
    price: 140,
    description: 'Кислый и бодрящий мармелад со вкусом лимона',
    image: '🍋',
    category: 'Цитрусовые',
    rating: 4.6,
  },
  {
    id: 4,
    name: 'Мармелад Виноград',
    price: 160,
    description: 'Насыщенный фиолетовый мармелад с вкусом спелого винограда',
    image: '🍇',
    category: 'Ягодные',
    rating: 4.9,
  },
  {
    id: 5,
    name: 'Мармелад Вишня',
    price: 160,
    description: 'Глубокий вкус спелой вишни в нежном мармеладе',
    image: '🍒',
    category: 'Ягодные',
    rating: 4.8,
  },
  {
    id: 6,
    name: 'Мармелад Яблоко',
    price: 130,
    description: 'Свежий и сладкий мармелад из спелых яблок',
    image: '🍎',
    category: 'Фрукты',
    rating: 4.5,
  },
  {
    id: 7,
    name: 'Мармелад Груша',
    price: 135,
    description: 'Нежный мармелад с тонким ароматом груши',
    image: '🍐',
    category: 'Фрукты',
    rating: 4.7,
  },
  {
    id: 8,
    name: 'Мармелад Персик',
    price: 155,
    description: 'Сладкий мармелад со вкусом спелого персика',
    image: '🍑',
    category: 'Фрукты',
    rating: 4.8,
  },
  {
    id: 9,
    name: 'Микс Ягод',
    price: 180,
    description: 'Ассортимент из клубники, черники и малины',
    image: '🎯',
    category: 'Ассортимент',
    rating: 5.0,
  },
  {
    id: 10,
    name: 'Экзотик Микс',
    price: 200,
    description: 'Манго, ананас, кокос - вкус экзотики в мармеладе',
    image: '🥭',
    category: 'Экзотические',
    rating: 4.9,
  },
  {
    id: 11,
    name: 'Чёрная смородина',
    price: 165,
    description: 'Терпкий и благородный вкус чёрной смородины',
    image: '⚫',
    category: 'Ягодные',
    rating: 4.6,
  },
  {
    id: 12,
    name: 'Малина Premium',
    price: 170,
    description: 'Премиум мармелад из малины высшего качества',
    image: '🟥',
    category: 'Ягодные',
    rating: 4.9,
  },
];

const Products: React.FC<ProductsProps> = ({ addToCart, limit }) => {
  const products = limit ? allProducts.slice(0, limit) : allProducts;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Products;
export { allProducts };
