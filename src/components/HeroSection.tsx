const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#F8F9FA] px-4">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-6 tracking-tight">
          Алиса и Анна
        </h1>
        <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
          Веб-дизайн дуэт | Создаем цифровые решения с фокусом на маркетинг,
          дизайн и креатив
        </p>
        <button className="bg-gray-900 text-white px-8 py-4 rounded-sm font-medium hover:bg-gray-800 transition-colors duration-200">
          Смотреть работы
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
