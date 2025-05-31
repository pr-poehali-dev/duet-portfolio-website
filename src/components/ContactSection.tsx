const ContactSection = () => {
  return (
    <section className="py-32 bg-black text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-light mb-8 tracking-tight">КОНТАКТЫ</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-12"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Расскажите о вашем проекте, и мы предложим оптимальное решение
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="group cursor-pointer">
            <div className="border border-gray-700 p-12 hover:border-blue-500 transition-colors">
              <div className="w-4 h-4 bg-blue-500 mb-8"></div>
              <h3 className="text-2xl font-light mb-2 tracking-wide">АЛИСА</h3>
              <p className="text-gray-400 mb-6 text-sm">
                UX/UI ДИЗАЙН, ИССЛЕДОВАНИЯ
              </p>
              <a
                href="mailto:alice@example.com"
                className="text-white hover:text-blue-400 transition-colors font-medium"
              >
                alice@example.com
              </a>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="border border-gray-700 p-12 hover:border-red-500 transition-colors">
              <div className="w-4 h-4 bg-red-500 mb-8"></div>
              <h3 className="text-2xl font-light mb-2 tracking-wide">АННА</h3>
              <p className="text-gray-400 mb-6 text-sm">
                БРЕНДИНГ, ГРАФИЧЕСКИЙ ДИЗАЙН
              </p>
              <a
                href="mailto:anna@example.com"
                className="text-white hover:text-red-400 transition-colors font-medium"
              >
                anna@example.com
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="bg-white text-black px-12 py-4 font-medium hover:bg-gray-100 transition-colors tracking-wide">
            НАПИСАТЬ НАМ
          </button>
          <button className="border border-white text-white px-12 py-4 font-medium hover:bg-white hover:text-black transition-colors tracking-wide">
            ПОРТФОЛИО
          </button>
        </div>

        <div className="text-center pt-12 border-t border-gray-800">
          <p className="text-gray-500 text-sm tracking-wide">
            © 2024 АЛИСА И АННА. ВСЕ ПРАВА ЗАЩИЩЕНЫ.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
