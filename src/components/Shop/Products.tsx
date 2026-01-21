interface Product {
  id: number;
  name: string;
  price: string;
  emoji: string;
  tag?: string;
}

const products: Product[] = [
  { id: 1, name: "Клубничный мармелад", price: "150₽", emoji: "🍓", tag: "Хит" },
  { id: 2, name: "Лимонный мармелад", price: "120₽", emoji: "🍋" },
  { id: 3, name: "Апельсиновый мармелад", price: "130₽", emoji: "🍊", tag: "Акция" },
  { id: 4, name: "Яблочный мармелад", price: "140₽", emoji: "🍏" },
];

const Products = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
        Наш мармелад 🍬
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform"
          >
            <div className="text-6xl mb-4">{p.emoji}</div>
            <h3 className="text-lg font-semibold text-gray-800">{p.name}</h3>
            <p className="text-pink-500 font-bold mt-2">{p.price}</p>
            {p.tag && (
              <span className="mt-2 px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-medium">
                {p.tag}
              </span>
            )}
            <button className="mt-4 bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full font-semibold transition">
              Купить
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
