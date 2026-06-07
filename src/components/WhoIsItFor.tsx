import Icon from "@/components/ui/icon";

const signs = [
  {
    icon: "RefreshCw",
    text: "Вы снова и снова попадаете в одни и те же ситуации — в социуме, в отношениях, работе, деньгах",
  },
  {
    icon: "VolumeX",
    text: "Хочется проявиться, заявить о себе — но что-то внутри останавливает",
  },
  {
    icon: "Loader",
    text: "Начинаете с энтузиазмом и через время сливаетесь, не доводите до результата",
  },
  {
    icon: "ShieldOff",
    text: "Чувствуете тревогу, когда теряете контроль над ситуацией или людьми",
  },
  {
    icon: "UserX",
    text: "Сложно принять себя — сравниваете, осуждаете, не верите в себя",
  },
  {
    icon: "TrendingDown",
    text: "Ресурсы, знания, желания есть — а жизнь будто стоит на месте",
  },
];

const WhoIsItFor = () => {
  return (
    <section className="py-24 px-6 lg:px-12" style={{ background: "linear-gradient(180deg, #f7f2e8 0%, #ffffff 100%)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-forest-50 border border-forest-200 rounded-full px-5 py-2 mb-6">
            <Icon name="Users" size={14} className="text-forest-600" />
            <span className="font-golos text-sm text-forest-600 font-medium uppercase tracking-wide">Кому подойдёт</span>
          </div>
          <h2 className="font-cormorant text-4xl lg:text-6xl font-bold text-forest-800 mb-5">
            Вы узнаёте себя?
          </h2>
          <p className="font-golos text-lg text-forest-600 max-w-2xl mx-auto leading-relaxed">
            Если хотя бы несколько пунктов откликаются — значит, вы попали туда, куда нужно.
          </p>
        </div>

        {/* Signs grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {signs.map((sign, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-6 border border-forest-100 shadow-sm hover:shadow-md hover:border-gold-300 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                style={{ background: "linear-gradient(135deg, #eef5e8, #d4e8d4)" }}
              >
                <Icon name={sign.icon} size={22} className="text-forest-600" />
              </div>
              <p className="font-golos text-forest-700 leading-relaxed text-sm">{sign.text}</p>
            </div>
          ))}
        </div>

        {/* Why old methods don't work */}
        <div
          className="rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row gap-8 items-start"
          style={{ background: "linear-gradient(135deg, #1e5e1e08, #c9922a0a)", border: "1px solid #c9922a30" }}
        >
          <div className="flex-1">
            <h3 className="font-cormorant text-3xl font-bold text-forest-800 mb-4">
              Почему прежние попытки не дали результата?
            </h3>
            <p className="font-golos text-forest-700 leading-relaxed mb-4">
              Книги, марафоны, мотивационные видео работают на уровне сознания. Но сценарии живут глубже — в убеждениях, реакциях, привычных паттернах поведения, которые сформировались давно.
            </p>
            <p className="font-golos text-forest-700 leading-relaxed">
              Без работы с этим слоем любой новый старт рано или поздно упирается в то же самое. Не потому что вы «слабый» — а потому что работает сформированный сценарий. Мы вместе изменим ваш сценарий, и вы получите тот результат, к которому действительно стремитесь 👍
            </p>
          </div>
          <div className="flex-shrink-0 w-full lg:w-72">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gold-200">
              <div className="font-cormorant text-2xl font-bold text-gold-500 mb-3">Здесь иначе</div>
              <ul className="space-y-3">
                {[
                  "Работа с глубинными установками",
                  "Живое сопровождение, не курс",
                  "Поддержка в моменте изменений",
                  "Конкретные инструменты на каждый день",
                  "Ориентированность на результат, к которому вы стремитесь",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5" style={{ background: "linear-gradient(135deg, #2d7a2d, #4d9e4d)" }}>
                      <Icon name="Check" size={12} className="text-white" />
                    </div>
                    <span className="font-golos text-sm text-forest-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="https://t.me/GUM_GUM8"
            target="_blank"
            rel="noopener noreferrer"
            className="font-golos font-semibold px-8 py-4 rounded-full text-white transition-all duration-300 hover:scale-105 hover:shadow-xl inline-block"
            style={{ background: "linear-gradient(135deg, #c9922a, #f4b942)" }}
          >
            Записаться на консультацию
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;