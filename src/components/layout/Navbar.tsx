const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="text-2xl">🍬</span>
            <span className="text-xl font-bold text-gray-800">
              Marmelad
            </span>
          </div>

          {/* Menu */}
          <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
            <li className="cursor-pointer hover:text-pink-500 transition">
              Каталог
            </li>
            <li className="cursor-pointer hover:text-pink-500 transition">
              О нас
            </li>
            <li className="cursor-pointer hover:text-pink-500 transition">
              Акции
            </li>
            <li className="cursor-pointer hover:text-pink-500 transition">
              Контакты
            </li>
          </ul>

          {/* Cart */}
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-full font-semibold transition">
            Корзина
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
