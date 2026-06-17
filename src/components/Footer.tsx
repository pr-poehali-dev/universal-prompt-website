import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <>
      {/* Final CTA Section */}
      <section
        className="py-24 px-6 lg:px-12 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #f7f2e8 0%, #eef5e8 100%)" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-20 blur-3xl -translate-y-1/2" style={{ background: "radial-gradient(ellipse, #c9922a, transparent)" }} />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/70 border border-gold-200 rounded-full px-5 py-2 mb-8">
            <Icon name="Sparkles" size={14} className="text-gold-500" />
            <span className="font-golos text-sm text-gold-600 font-medium uppercase tracking-wide">Сейчас подходящий момент</span>
          </div>

          <h2 className="font-cormorant text-4xl lg:text-6xl font-bold text-forest-800 mb-6 leading-tight">
            Ваш сценарий —<br />
            <span className="italic text-gold-500">это не приговор</span>
          </h2>

          <p className="font-golos text-lg text-forest-700 leading-relaxed mb-4 max-w-2xl mx-auto">
            Этот сайт для тех, кто устал от повторяющихся кругов и готов сделать реальный шаг. Не завтра, не «когда будет время» — а сейчас.
          </p>
          <p className="font-golos text-base text-forest-600 leading-relaxed mb-10 max-w-xl mx-auto">
            Любой сценарий, который начал формироваться — можно переписать. Это не метафора. Это то, с чем я работаю каждый день.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button
              className="font-golos font-semibold px-10 py-4 rounded-full text-white transition-all duration-300 hover:scale-105 hover:shadow-xl text-lg"
              style={{ background: "linear-gradient(135deg, #2d7a2d, #4d9e4d)" }}
            >
              Хочу участвовать
            </button>
            <button
              className="font-golos font-semibold px-10 py-4 rounded-full border-2 border-gold-400 text-gold-600 bg-white/70 backdrop-blur-sm transition-all duration-300 hover:bg-gold-50 hover:scale-105 text-lg"
            >
              Узнать подробнее
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-8 px-6 lg:px-12 border-t border-forest-100"
        style={{ background: "#f7f2e8" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-cormorant text-xl font-bold text-forest-800">Перепиши свой сценарий</div>
            <div className="font-golos text-sm text-forest-500 mt-1">Психолог по личностным установкам</div>
          </div>
          <div className="font-golos text-sm text-forest-400">
            © 2025 · Все права защищены
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
