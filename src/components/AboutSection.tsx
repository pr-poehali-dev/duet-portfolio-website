const AboutSection = () => {
  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          О нас
        </h2>
        <h3 className="text-xl md:text-2xl text-gray-600 mb-16 font-light text-center">
          Веб-дизайн дуэт | Создаем цифровые решения с фокусом на маркетинг,
          дизайн и креатив
        </h3>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Алиса */}
          <div className="text-center">
            <div className="w-48 h-48 bg-[#4A6FA5] rounded-full mx-auto mb-6 flex items-center justify-center">
              <img
                src="https://cdn.poehali.dev/files/c9872d54-df69-4e41-9776-e782ebb8be5f.jpg"
                alt="Алиса"
                className="w-44 h-44 rounded-full object-cover"
              />
            </div>
            <h3
              className="text-2xl font-bold mb-2"
              style={{ color: "#4A6FA5" }}
            >
              Алиса
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Фокус нас исследования, маркетинг, аналитический подход.
              <br />
              Веб-дизайн, графический дизайн.
              <br />
              Опыт: 4 года.
              <br />
              Инструменты: Figma, Метрики, Tilda, Illustrator, Photoshop.
              <br />
              Люблю креатив и исследования пользовательского опыта.
            </p>
          </div>

          {/* Анна */}
          <div className="text-center">
            <div className="w-48 h-48 bg-[#D6809F] rounded-full mx-auto mb-6 flex items-center justify-center">
              <img
                src="https://cdn.poehali.dev/files/2ee07880-6c78-43a5-b496-7ad6d5387238.png"
                alt="Анна"
                className="w-44 h-44 rounded-full object-cover"
              />
            </div>
            <h3
              className="text-2xl font-bold mb-2"
              style={{ color: "#D6809F" }}
            >
              Анна
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Яркие лендинг, брендинг, графический дизайн.
              <br />
              Опыт: 4 года.
              <br />
              Инструменты: Illustrator, Photoshop.
              <br />
              Люблю рисовать и смелые типографические решения.
            </p>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 leading-relaxed">
            Мы объединили силы, чтобы предлагать вам полный цикл дизайна: от
            маркетингового исследования до реализации креативных подходов
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
