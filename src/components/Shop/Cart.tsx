// src/components/Shop/Cart.tsx
import React from 'react';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  description?: string;
  category?: string;
  image?: string;
}

interface CartProps {
  cart: CartItem[];
  removeFromCart: (id: number) => void;
  incrementQuantity: (id: number) => void;
  decrementQuantity: (id: number) => void;
}

const Cart: React.FC<CartProps> = ({ cart, removeFromCart, incrementQuantity, decrementQuantity }) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="w-96 bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4 text-purple-700">🛒 Корзина</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500 text-center py-10">Корзина пуста</p>
      ) : (
        <ul>
          {cart.map(item => (
            <li key={item.id} className="flex justify-between items-center mb-3 bg-white p-3 rounded-lg shadow-sm">
              <div>
                <p className="font-semibold text-purple-800">{item.name}</p>
                <p className="text-sm text-gray-600">{item.price} ₽ × {item.quantity}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button onClick={() => decrementQuantity(item.id)} className="px-3 py-1 bg-purple-200 rounded-lg hover:bg-purple-300">−</button>
                <button onClick={() => incrementQuantity(item.id)} className="px-3 py-1 bg-purple-200 rounded-lg hover:bg-purple-300">+</button>
                <button onClick={() => removeFromCart(item.id)} className="px-2 py-1 text-red-600 font-bold hover:text-red-700">✕</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <p className="font-bold mt-4 text-right text-purple-700 text-lg">Итого: {total} ₽</p>
      <button
        className="mt-4 w-full bg-purple-600 text-white py-2 rounded-xl font-semibold hover:bg-purple-700 transition"
        disabled={cart.length === 0}
        onClick={() => alert('Заказ оформлен!')}
      >
        Оформить заказ
      </button>
    </div>
  );
};

export default Cart;
