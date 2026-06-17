import Icon from "@/components/ui/icon";

const results = [
  {
    icon: "Compass",
    title: "Ясность внутри",
    text: "Вы поймёте, какие установки управляли вашей жизнью — и перестанете жить по негативному сценарию.",
  },
  {
    icon: "TrendingUp",
    title: "Движение без слива",
    text: "Научитесь начинать и доводить до конца. Не потому что «надо», а потому что внутри есть опора.",
  },
  {
    icon: "Shield",
    title: "Устойчивость",
    text: "Тревога, контроль, страх оценки — всё это станет управляемым. Вы перестанете зависеть от внешнего одобрения.",
  },
  {
    icon: "DollarSign",
    title: "Рост дохода и возможностей",
    text: "Когда уходят внутренние блоки — открываются внешние результаты: деньги, проекты, отношения.",
  },
  {
    icon: "Users",
    title: "Другое качество отношений",
    text: "Вы перестанете повторять одни и те же сценарии в общении — и начнёте строить то, что хотите.",
  },
  {
    icon: "Sun",
    title: "Принятие себя",
    text: "Не «полюбить себя» как лозунг. А реально перестать воевать с собой и начать себе доверять.",
  },
];

const Results = () => {
  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gold-50 border border-gold-200 rounded-full px-5 py-2 mb-6">
            <Icon name="Star" size={14} className="text-gold-500" />
            <span className="font-golos text-sm text-gold-600 font-medium uppercase tracking-wide">Результаты</span>
          </div>
          <h2 className="font-cormorant text-4xl lg:text-6xl font-bold text-forest-800 mb-5">
            Что изменится
            <br />
            <span className="italic text-gold-500">в вашей жизни</span>
          </h2>
          <p className="font-golos text-lg text-forest-600 max-w-2xl mx-auto leading-relaxed">
            Не обещаем «легко и быстро». Обещаем реальную работу и ощутимый сдвиг — уже в процессе.
          </p>
        </div>

        {/* Results grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {results.map((result, i) => (
            <div
              key={i}
              className="relative bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
            >
              {/* Number */}
              <div
                className="absolute top-4 right-5 font-cormorant text-6xl font-bold opacity-5 text-forest-800 select-none"
              >
                {i + 1}
              </div>
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: "linear-gradient(135deg, #c9922a20, #f4b94230)" }}
              >
                <Icon name={result.icon} size={22} className="text-gold-500" />
              </div>
              <h3 className="font-cormorant text-xl font-bold text-forest-800 mb-3">{result.title}</h3>
              <p className="font-golos text-sm text-forest-600 leading-relaxed">{result.text}</p>
              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                style={{ background: "linear-gradient(90deg, #2d7a2d, #c9922a)" }}
              />
            </div>
          ))}
        </div>

        {/* Story block */}
        <div
          className="rounded-3xl p-8 lg:p-12 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #1e5e1e, #2d7a2d)" }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 blur-3xl" style={{ background: "#c9922a" }} />
          <div className="relative z-10 max-w-3xl">
            <Icon name="Quote" size={36} className="text-gold-400 mb-6 opacity-60" />
            <p className="font-cormorant text-2xl lg:text-3xl italic text-white leading-relaxed mb-6">
              «Мама, представляешь… я сегодня понял, что иду по коридору с ребятами, мы смеёмся, шутим… и у меня теперь много друзей»
            </p>
            <p className="font-golos text-sm text-white/70 leading-relaxed">
              Мой сын сказал это после нескольких месяцев работы с установками. Тогда я окончательно убедилась: любой сценарий можно переписать — в любом возрасте.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            className="font-golos font-semibold px-8 py-4 rounded-full text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{ background: "linear-gradient(135deg, #2d7a2d, #4d9e4d)" }}
          >
            Хочу такой результат
          </button>
        </div>
      </div>
    </section>
  );
};

export default Results;