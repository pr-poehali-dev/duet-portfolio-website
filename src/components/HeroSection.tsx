import Header from "@/components/Header";

const HeroSection = () => {
  return (
    <>
      <Header />
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 grid-dot opacity-40"></div>

        <div className="relative z-10 text-center max-w-7xl mx-auto px-6">
          <div className="animate-fade-in">
            <h1 className="text-[clamp(3rem,8vw,12rem)] font-black leading-[0.85] tracking-tighter mb-8">
              АЛИСА
              <br />
              <span className="text-emerald-500">×</span>
              <br />
              АННА
            </h1>

            <div className="max-w-2xl mx-auto mb-12">
              <p className="text-xl md:text-2xl font-light text-muted-foreground leading-relaxed text-balance">
                Дизайн-дуэт для цифровых решений.
                <br />
                Минимализм встречает функциональность.
              </p>
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
        <div className="absolute top-1/4 right-12 w-2 h-32 bg-emerald-500 hidden lg:block"></div>
        <div className="absolute bottom-1/4 left-12 w-2 h-24 bg-emerald-600 hidden lg:block"></div>
      </section>
    </>
  );
};

export default HeroSection;
