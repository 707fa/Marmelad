import React, { useState } from 'react';
import { allProducts } from '../components/Shop/Products';
import ProductCard from '../components/Shop/ProductCard';

interface ProductsPageProps {
  addToCart: (item: any) => void;
}

const ProductsPage: React.FC<ProductsPageProps> = ({ addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Все');
  const [sortBy, setSortBy] = useState<string>('rating');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['Все', 'Ягодные', 'Цитрусовые', 'Фрукты', 'Ассортимент', 'Экзотические'];

  let filteredProducts = allProducts;

  // Фильтр по категории
  if (selectedCategory !== 'Все') {
    filteredProducts = filteredProducts.filter(p => p.category === selectedCategory);
  }

  // Фильтр по поиску
  if (searchQuery) {
    filteredProducts = filteredProducts.filter(p =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Сортировка
  if (sortBy === 'price-asc') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-desc') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating);
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Каталог мармелада</h1>
          <p className="text-lg text-gray-600">Качественные мармеладные конфеты разных вкусов</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24 border border-gray-100">
              {/* Search */}
              <div className="mb-8">
                <label className="text-sm font-semibold text-gray-900 mb-2 block">Поиск</label>
                <input
                  type="text"
                  placeholder="Найти товар..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 transition text-sm"
                />
              </div>

              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">Категория</h3>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left px-4 py-2.5 rounded-lg transition text-sm font-medium ${
                        selectedCategory === cat
                          ? 'bg-gray-900 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort */}
              <div className="mb-8">
                <label className="text-sm font-semibold text-gray-900 mb-2 block">Сортировка</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 transition text-sm"
                >
                  <option value="rating">По рейтингу</option>
                  <option value="price-asc">Дешевле</option>
                  <option value="price-desc">Дороже</option>
                </select>
              </div>

              {/* Results Count */}
              <div className="text-sm text-gray-600">
                Товаров: <span className="font-semibold text-gray-900">{filteredProducts.length}</span>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} addToCart={addToCart} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-12 text-center border border-gray-100">
                <p className="text-lg text-gray-600 mb-6">По вашему запросу ничего не найдено</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('Все');
                  }}
                  className="px-6 py-2.5 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition"
                >
                  Сбросить фильтры
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;
