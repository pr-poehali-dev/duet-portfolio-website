const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-6xl font-light text-black mb-8 tracking-tight relative">
            О НАС
            <div className="absolute -top-2 -right-8 w-1 h-1 bg-blue-500 rounded-full"></div>
          </h2>
          <div className="w-24 h-1 bg-black mx-auto mb-12 relative">
            <div className="absolute -right-6 top-0 w-1 h-1 bg-red-500 rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Веб-дизайн дуэт. Создаем цифровые решения с фокусом на маркетинг,
            дизайн и креатив
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-20 mb-24">
          {/* Алиса */}
          <div className="group">
            <div className="relative mb-8">
              <div className="w-full aspect-square bg-gray-100 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/files/c9872d54-df69-4e41-9776-e782ebb8be5f.jpg"
                  alt="Алиса"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-500"></div>
            </div>
            <h3 className="text-3xl font-light text-black mb-4 tracking-wide">
              АЛИСА
            </h3>
            <div className="space-y-2 text-gray-600">
              <p>Веб-дизайн, графический дизайн</p>
              <p>Исследования, маркетинг, аналитика</p>
              <p className="font-medium">4 года опыта</p>
            </div>
          </div>

          {/* Анна */}
          <div className="group">
            <div className="relative mb-8">
              <div className="w-full aspect-square bg-gray-100 overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/files/2ee07880-6c78-43a5-b496-7ad6d5387238.png"
                  alt="Анна"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-red-500"></div>
            </div>
            <h3 className="text-3xl font-light text-black mb-4 tracking-wide">
              АННА
            </h3>
            <div className="space-y-2 text-gray-600">
              <p>Графический дизайн, брендинг</p>
              <p>Предпечатная подготовка, лендинги</p>
              <p className="font-medium">4 года опыта</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="w-2 h-2 bg-black mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Мы объединили силы, чтобы предлагать полный цикл дизайна: от
            маркетингового исследования до реализации креативных подходов
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
