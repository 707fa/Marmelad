const Header = () => {
  return (
    <header className="bg-[radial-gradient(circle,_#fce7f3_1px,_transparent_1px)] bg-[length:24px_24px]">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Самый вкусный  
            <span className="text-pink-500"> мармелад </span>
            для радости каждый день 🍬
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Натуральные ингредиенты, яркие вкусы и быстрая доставка прямо к твоему дому
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition">
              В каталог
            </button>

            <button className="border-2 border-pink-500 text-pink-500 hover:bg-pink-50 px-8 py-3 rounded-full text-lg font-semibold transition">
              Акции 🎁
            </button>
          </div>
        </div>

        {/* Image / Illustration */}
        <div className="relative flex justify-center">
          <div className="w-72 h-72 md:w-96 md:h-96 bg-pink-100 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-8xl md:text-9xl">🍓</span>
          </div>

          {/* floating candies */}
          <span className="absolute top-6 left-10 text-3xl">🍋</span>
          <span className="absolute bottom-10 right-12 text-4xl">🍊</span>
          <span className="absolute top-16 right-6 text-2xl">🍏</span>
        </div>

      </div>
    </header>
  );
};

export default Header;
