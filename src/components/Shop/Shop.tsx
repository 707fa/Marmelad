import React, { useState, useEffect } from 'react';
import Products from './Products';
import Cart from './Cart';
import type { CartItem } from './Cart';

const Shop: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: any) => {
    setCart(prevCart => {
      const index = prevCart.findIndex(ci => ci.id === item.id);
      if (index >= 0) {
        const newCart = [...prevCart];
        newCart[index].quantity += 1;
        return newCart;
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => setCart(prev => prev.filter(item => item.id !== id));
  const incrementQuantity = (id: number) => setCart(prev => prev.map(item => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)));
  const decrementQuantity = (id: number) => setCart(prev => prev.map(item => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item)).filter(item => item.quantity > 0));

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-6 bg-gray-50 min-h-screen">
      <div className="flex-1">
        <Products addToCart={addToCart} />
      </div>
      <div>
        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
        />
      </div>
    </div>
  );
};

export default Shop;
