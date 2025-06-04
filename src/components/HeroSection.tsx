const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-dot opacity-40"></div>

      <div className="relative z-10 text-center max-w-7xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="text-[clamp(3rem,8vw,12rem)] font-black leading-[0.8] tracking-[-0.03em] mb-8 relative">
            <span className="inline-block hover:rotate-1 transition-transform duration-300">
              АЛИСА
            </span>
            <br />
            <span className="text-accent inline-block hover:scale-110 transition-transform duration-200 origin-center">
              ×
            </span>
            <br />
            <span className="inline-block hover:-rotate-1 transition-transform duration-300">
              АННА
            </span>
            {/* Floating accent dots */}
            <div className="absolute -top-4 right-0 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 -left-8 w-2 h-2 bg-primary rounded-full animate-pulse delay-500"></div>
          </h1>

          <div className="max-w-2xl mx-auto mb-12 relative">
            <p className="text-xl md:text-2xl font-light text-muted-foreground leading-relaxed text-balance">
              Создаём цифровые продукты, которые работают.
              <br />
              <span className="font-medium">
                От концепции до запуска — полный цикл разработки.
              </span>
            </p>
            {/* Subtle line accent */}
            <div className="absolute -left-4 top-4 w-px h-16 bg-gradient-to-b from-accent to-transparent hidden md:block"></div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative overflow-hidden bg-primary text-primary-foreground px-12 py-4 font-medium text-lg transition-all duration-300 hover:scale-[1.02]">
              <span className="relative z-10">СМОТРЕТЬ РАБОТЫ</span>
              <div className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>

            <button className="font-medium text-lg px-12 py-4 border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              СВЯЗАТЬСЯ
            </button>
          </div>
        </div>
      </div>

      {/* Geometric accent */}
      <div className="absolute top-1/4 right-12 w-2 h-32 bg-accent hidden lg:block"></div>
      <div className="absolute bottom-1/4 left-12 w-2 h-24 bg-primary hidden lg:block"></div>
    </section>
  );
};

export default HeroSection;
