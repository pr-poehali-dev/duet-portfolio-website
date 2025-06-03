const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Исследование",
      description:
        "Анализируем ваш бизнес, аудиторию и конкурентов для понимания задач",
    },
    {
      number: "02",
      title: "Стратегия",
      description: "Разрабатываем концепцию и выбираем оптимальные решения",
    },
    {
      number: "03",
      title: "Дизайн",
      description: "Создаем макеты, прототипы и финальный дизайн",
    },
    {
      number: "04",
      title: "Реализация",
      description:
        "Доводим проект до готового результата с вниманием к деталям",
    },
  ];

  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Наш процесс
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl font-bold text-gray-200 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#F8F9FA] rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Почему мы?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4
                className="font-bold text-lg mb-2"
                style={{ color: "#4A6FA5" }}
              >
                Комплексный подход
              </h4>
              <p className="text-gray-600">
                Покрываем все этапы: от исследований до реализации
              </p>
            </div>
            <div>
              <h4
                className="font-bold text-lg mb-2"
                style={{ color: "#D6809F" }}
              >
                Индивидуальность
              </h4>
              <p className="text-gray-600">
                Каждый проект уникален и отражает ваш бренд
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-gray-900">
                Результат
              </h4>
              <p className="text-gray-600">
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
