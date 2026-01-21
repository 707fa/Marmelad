const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-4">Marmelad</h3>
          <p>Самый вкусный мармелад для радости каждый день 🍬</p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Контакты</h3>
          <p>email@example.com</p>
          <p>+7 999 123-45-67</p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Соцсети</h3>
          <div className="flex gap-4">
            <span>📘</span>
            <span>📸</span>
            <span>🐦</span>
          </div>
        </div>
      </div>
      <p className="text-center mt-8 text-sm text-gray-400">
        © 2026 Marmelad. Все права защищены.
      </p>
    </footer>
  );
};

export default Footer;
