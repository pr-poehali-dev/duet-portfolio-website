const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "ИССЛЕДОВАНИЕ",
      description:
        "Анализируем ваш бизнес, аудиторию и конкурентов для понимания задач",
    },
    {
      number: "02",
      title: "СТРАТЕГИЯ",
      description: "Разрабатываем концепцию и выбираем оптимальные решения",
    },
    {
      number: "03",
      title: "ДИЗАЙН",
      description: "Создаем макеты, прототипы и финальный дизайн",
    },
    {
      number: "04",
      title: "РЕАЛИЗАЦИЯ",
      description:
        "Доводим проект до готового результата с вниманием к деталям",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-6xl font-light text-black mb-8 tracking-tight">
            ПРОЦЕСС
          </h2>
          <div className="w-24 h-1 bg-black mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-4 gap-12 mb-24">
          {steps.map((step, index) => (
            <div key={index} className="group">
              <div className="relative mb-8">
                <div className="text-8xl font-light text-gray-100 group-hover:text-gray-200 transition-colors">
                  {step.number}
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-black group-hover:w-full transition-all duration-500"></div>
              </div>
              <h3 className="text-xl font-medium text-black mb-4 tracking-wide">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="border border-gray-200 p-12">
          <h3 className="text-3xl font-light text-black mb-12 text-center tracking-wide">
            ПОЧЕМУ МЫ
          </h3>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-4 h-4 bg-emerald-500 mx-auto mb-6"></div>
              <h4 className="font-medium text-lg mb-4 tracking-wide">
                КОМПЛЕКСНЫЙ ПОДХОД
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Покрываем все этапы: от исследований до реализации
              </p>
            </div>

            <div className="text-center">
              <div className="w-4 h-4 bg-emerald-600 mx-auto mb-6"></div>
              <h4 className="font-medium text-lg mb-4 tracking-wide">
                ИНДИВИДУАЛЬНОСТЬ
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Каждый проект уникален и отражает ваш бренд
              </p>
            </div>

            <div className="text-center">
              <div className="w-4 h-4 bg-black mx-auto mb-6"></div>
              <h4 className="font-medium text-lg mb-4 tracking-wide">
                РЕЗУЛЬТАТ
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ориентируемся на бизнес-цели и рост показателей
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
