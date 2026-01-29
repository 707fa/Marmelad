import Header from "../components/layout/Header";
import WhyUs from "../components/Home/WhyUs";
import Reviews from "../components/Home/Reviews";
import Footer from "../components/layout/Footer";
import Products from "../components/Shop/Products";
import { Link } from 'react-router-dom';

interface HomeProps {
  addToCart: (item: any) => void;
}

const Home = ({ addToCart }: HomeProps) => {
  return (
   <main className="bg-white">
  
  <div>
      <Header />
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900">Популярные товары</h2>
            <p className="text-gray-600 mt-2">Лучший выбор мармеладов от проверенных производителей</p>
          </div>
          <Link to="/products" className="px-6 py-2.5 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition">
            Смотреть все →
          </Link>
        </div>
        <Products addToCart={addToCart} limit={8} />
      </section>
      <WhyUs />
      <Reviews />
      <Footer />
  </div>
    </main>
  );
};

export default Home;
