// src/components/Shop/ProductCard.tsx
import React from 'react';
import type { Product } from './Products';

interface ProductCardProps {
  product: Product;
  addToCart: (item: any) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description,
      image: product.image,
      category: product.category,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group">
      {/* Image/Icon */}
      <div className="h-48 bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center text-5xl group-hover:from-slate-100 group-hover:to-slate-200 transition-colors">
        {product.image}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-semibold text-gray-900 text-base line-clamp-2">{product.name}</h3>
        </div>
        
        {/* Category & Rating */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full font-medium">
            {product.category}
          </span>
          <div className="flex items-center gap-1.5">
            <span className="text-amber-400 text-sm">★</span>
            <span className="text-sm text-gray-600 font-semibold">{product.rating}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-2 h-10 leading-relaxed">
          {product.description}
        </p>

        {/* Price & Button */}
        <div className="flex justify-between items-center pt-3 border-t border-gray-100">
          <span className="text-xl font-bold text-gray-900">{product.price} ₽</span>
          <button
            className="bg-gray-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors active:scale-95"
            onClick={handleAddToCart}
          >
            Добавить
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
