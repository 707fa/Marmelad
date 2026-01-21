const reviews = [
  { id: 1, name: "Анна", text: "Лучший мармелад, который я пробовала!" },
  { id: 2, name: "Иван", text: "Очень вкусно и доставка быстрая." },
  { id: 3, name: "Мария", text: "Дети в восторге, покупаем снова!" },
];

const Reviews = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Отзывы клиентов 🗣️</h2>
        <div className="flex flex-col gap-6">
          {reviews.map((r) => (
            <div key={r.id} className="bg-pink-50 rounded-xl p-6 shadow-sm">
              <p className="text-gray-700 mb-2">"{r.text}"</p>
              <span className="font-semibold text-gray-900">— {r.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
