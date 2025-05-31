const HeroSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center px-4">
      {/* Анимированный фон */}
      <div className="absolute inset-0 surreal-gradient"></div>

      {/* Плавающие элементы */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-600 morphing opacity-70"></div>
      <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-600 floating opacity-60"></div>
      <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-yellow-400 to-orange-600 morphing opacity-50"></div>
      <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-br from-green-400 to-teal-600 floating opacity-65"></div>

      {/* Геометрические формы */}
      <div className="absolute top-1/3 left-10 w-16 h-16 border-4 border-white/30 transform rotate-45 floating"></div>
      <div className="absolute bottom-1/3 right-16 w-20 h-20 rounded-full border-4 border-white/40 pulse-glow"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight text-shimmer leading-tight">
          Алиса и Анна
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed drop-shadow-lg">
          Два взгляда, одна цель: идеальный дизайн для вас.
        </p>

        <div className="relative group">
          <button className="relative px-8 py-4 rounded-full font-medium text-white border-2 border-white/50 dream-blur wobble-hover overflow-hidden group-hover:scale-105 transition-all duration-300">
            <span className="relative z-10">Смотреть работы</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      {/* Дополнительные декоративные элементы */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>
    </section>
  );
};

export default HeroSection;
