import Header from "@/components/Header";

const HeroSection = () => {
  return (
    <>
      <Header />
      <section className="min-h-screen flex items-center justify-center relative bg-white">
        {/* Левая вертикальная линия */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 w-1 h-96 bg-emerald-500"></div>

        {/* Правая вертикальная линия */}
        <div className="absolute right-8 top-1/4 w-1 h-80 bg-emerald-500"></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="animate-fade-in">
            <h1 className="text-[clamp(4rem,10vw,8rem)] font-black leading-[0.9] tracking-tight mb-4 text-black">
              АЛИСА
              <br />
              <span className="text-emerald-500 text-[clamp(3rem,8vw,6rem)]">
                ×
              </span>
              <br />
              АННА
            </h1>

            <div className="max-w-2xl mx-auto mb-12 mt-8">
              <p className="text-lg text-gray-600 leading-relaxed mb-2">
                Дизайн-дуэт для цифровых решений.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Минимализм встречает функциональность.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-emerald-500 text-white px-8 py-3 font-medium text-sm tracking-wide hover:bg-emerald-600 transition-colors">
                СМОТРЕТЬ РАБОТЫ
              </button>

              <button className="font-medium text-sm px-8 py-3 border-2 border-gray-300 text-gray-700 hover:border-emerald-500 hover:text-emerald-500 transition-all duration-300 tracking-wide">
                СВЯЗАТЬСЯ
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
