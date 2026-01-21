import Header from "../components/layout/Header";
import Products from "../components/Shop/Products";
import WhyUs from "../components/Home/WhyUs";
import Reviews from "../components/Home/Reviews";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
   <main className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50">
  {/* Decorative colorful blobs */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink-300 rounded-full blur-3xl opacity-30 animate-blob"></div>
  <div className="absolute top-1/4 -right-32 w-96 h-96 bg-yellow-300 rounded-full blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
  <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-orange-300 rounded-full blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
  <div className="relative z-10">
      <Header />
      <Products />
      <WhyUs />
      <Reviews />
      <Footer />
  </div>
    </main>
  );
};

export default Home;
