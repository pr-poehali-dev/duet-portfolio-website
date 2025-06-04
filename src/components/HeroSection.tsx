const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-4xl mx-auto px-6">
        <h1 className="text-[clamp(4rem,10vw,8rem)] font-bold leading-tight tracking-tight mb-8 text-gray-900">
          Алиса и Анна
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Два взгляда, одна цель: идеальный дизайн для вас
        </p>

        <button className="bg-gray-900 text-white px-8 py-4 text-lg font-medium hover:bg-gray-800 transition-colors duration-200">
          Смотреть работы
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
