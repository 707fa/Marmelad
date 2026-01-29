import React from 'react';
import { Link } from 'react-router-dom';
import type { CartItem } from '../components/Shop/Cart';

interface CartPageProps {
  cart: CartItem[];
  removeFromCart: (id: number) => void;
  incrementQuantity: (id: number) => void;
  decrementQuantity: (id: number) => void;
}

const CartPage: React.FC<CartPageProps> = ({ cart, removeFromCart, incrementQuantity, decrementQuantity }) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Корзина</h1>
          <p className="text-lg text-gray-600">Товаров в корзине: <span className="font-semibold text-gray-900">{itemCount}</span></p>
        </div>

        {cart.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-16 text-center border border-gray-100">
            <p className="text-xl text-gray-600 mb-6">Корзина пуста</p>
            <Link 
              to="/products" 
              className="inline-block px-8 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              Перейти к товарам
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="md:col-span-2 space-y-4">
              {cart.map(item => (
                <div key={item.id} className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">{item.name}</h3>
                      <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-600 font-bold text-xl transition"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-2">
                      <button 
                        onClick={() => decrementQuantity(item.id)}
                        className="px-4 py-2 bg-gray-200 text-gray-900 rounded hover:bg-gray-300 transition font-semibold"
                      >
                        −
                      </button>
                      <span className="w-12 text-center font-semibold">{item.quantity}</span>
                      <button 
                        onClick={() => incrementQuantity(item.id)}
                        className="px-4 py-2 bg-gray-200 text-gray-900 rounded hover:bg-gray-300 transition font-semibold"
                      >
                        +
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="text-gray-600 text-sm">{item.price} ₽ × {item.quantity}</p>
                      <p className="text-2xl font-bold text-gray-900">{item.price * item.quantity} ₽</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-8 sticky top-24 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Итого</h2>
                
                <div className="space-y-3 mb-8 pb-8 border-b border-gray-200">
                  {cart.map(item => (
                    <div key={item.id} className="flex justify-between text-sm text-gray-600">
                      <span>{item.name} ({item.quantity}x)</span>
                      <span className="font-semibold text-gray-900">{item.price * item.quantity} ₽</span>
                    </div>
                  ))}
                </div>

                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg text-gray-900 font-semibold">Сумма:</span>
                    <span className="text-3xl font-bold text-gray-900">{total} ₽</span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>Доставка:</span>
                    <span className="font-semibold">Бесплатно</span>
                  </div>
                </div>

                <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition text-lg mb-4">
                  Оформить заказ
                </button>

                <Link 
                  to="/products" 
                  className="block text-center py-2.5 text-gray-900 hover:text-gray-700 transition font-semibold border border-gray-200 rounded-lg"
                >
                  Продолжить покупки
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default CartPage;
