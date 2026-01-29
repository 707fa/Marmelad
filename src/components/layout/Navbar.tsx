import { Link } from 'react-router-dom';

interface NavbarProps {
  cartCount: number;
}

const Navbar = ({ cartCount }: NavbarProps) => {
  return (
    <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <span className="text-2xl font-bold text-gray-900">Marmelad</span>
          </Link>

          {/* Menu */}
          <ul className="hidden md:flex gap-8 text-gray-700 font-medium text-sm">
            <li>
              <Link to="/products" className="cursor-pointer hover:text-gray-900 transition">
                Каталог
              </Link>
            </li>
            <li className="cursor-pointer hover:text-gray-900 transition">
              О нас
            </li>
            <li className="cursor-pointer hover:text-gray-900 transition">
              Контакты
            </li>
          </ul>

          {/* Cart Button */}
          <Link 
            to="/cart"
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition font-semibold text-sm"
          >
            Корзина
            {cartCount > 0 && <span className="bg-red-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">{cartCount}</span>}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;