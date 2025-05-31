const ContactSection = () => {
  return (
    <section className="py-20 bg-gray-900 text-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Готовы к сотрудничеству?</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Расскажите о вашем проекте, и мы предложим оптимальное решение
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-800 p-8 rounded-lg">
            <div
              className="w-16 h-16 rounded-full mx-auto mb-4"
              style={{ backgroundColor: "#4A6FA5" }}
            ></div>
            <h3 className="text-xl font-bold mb-2">Алиса</h3>
            <p className="text-gray-300 mb-4">UX/UI дизайн, исследования</p>
            <a
              href="mailto:alice@example.com"
              className="text-blue-400 hover:text-blue-300"
            >
              alice@example.com
            </a>
          </div>

          <div className="bg-gray-800 p-8 rounded-lg">
            <div
              className="w-16 h-16 rounded-full mx-auto mb-4"
              style={{ backgroundColor: "#D6809F" }}
            ></div>
            <h3 className="text-xl font-bold mb-2">Анна</h3>
            <p className="text-gray-300 mb-4">Брендинг, графический дизайн</p>
            <a
              href="mailto:anna@example.com"
              className="text-pink-400 hover:text-pink-300"
            >
              anna@example.com
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-gray-900 px-8 py-3 rounded-sm font-medium hover:bg-gray-100 transition-colors">
            Написать нам
          </button>
          <button className="border border-white text-white px-8 py-3 rounded-sm font-medium hover:bg-white hover:text-gray-900 transition-colors">
            Скачать портфолио
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-gray-400">
          <p>&copy; 2024 Алиса и Анна. Все права защищены.</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
