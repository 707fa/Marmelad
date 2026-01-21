const advantages = [
  { title: "Натуральные ингредиенты", emoji: "🌿" },
  { title: "Быстрая доставка", emoji: "🚀" },
  { title: "Яркие вкусы", emoji: "🍓🍋🍊" },
  { title: "Веселый дизайн", emoji: "🎨" },
];

const WhyUs = () => {
  return (
    <section className="bg-pink-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {advantages.map((adv, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="text-5xl mb-4">{adv.emoji}</div>
            <h3 className="text-lg font-semibold text-gray-800">{adv.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
