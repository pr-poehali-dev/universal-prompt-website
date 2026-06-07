import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Zap",
    title: "Это не курс",
    text: "Никаких видеоуроков и домашних заданий ради галочки. Это живая работа вместе с автором — по вашему конкретному запросу.",
  },
  {
    icon: "Layers",
    title: "Глубина, а не поверхность",
    text: "Мы не работаем с симптомами. Мы находим и меняем то, что стоит за повторяющимися сценариями.",
  },
  {
    icon: "Heart",
    title: "Безопасное пространство",
    text: "Здесь можно быть собой — без осуждения, без «правильных ответов», без масок.",
  },
  {
    icon: "Target",
    title: "Результат, а не процесс",
    text: "Каждая встреча ведёт к конкретному сдвигу. Вы чувствуете изменения уже в ходе работы.",
  },
];

const weeks = [
  {
    period: "Неделя 1–2",
    title: "Диагностика сценария",
    text: "Находим повторяющиеся паттерны. Понимаем, откуда они берутся и как работают именно у вас.",
    icon: "Search",
  },
  {
    period: "Неделя 3–4",
    title: "Работа с корнем",
    text: "Идём вглубь: убеждения, детские решения, страхи. Мягко, но честно — туда, где реально застряло.",
    icon: "TreePine",
  },
  {
    period: "Неделя 5–6",
    title: "Новая опора и выход",
    text: "Выстраиваем новую внутреннюю базу. Начинаете действовать из силы, а не из страха или долга.",
    icon: "Sunrise",
  },
];

const ProgramDescription = () => {
  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gold-50 border border-gold-200 rounded-full px-5 py-2 mb-6">
            <Icon name="BookOpen" size={14} className="text-gold-500" />
            <span className="font-golos text-sm text-gold-600 font-medium uppercase tracking-wide">Программа</span>
          </div>
          <h2 className="font-cormorant text-4xl lg:text-6xl font-bold text-forest-800 mb-5">
            Как устроена
            <br />
            <span className="italic text-gold-500">программа</span>
          </h2>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex gap-5 p-7 rounded-2xl border border-gray-100 bg-cream hover:shadow-md transition-all duration-300"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "linear-gradient(135deg, #c9922a20, #f4b94230)" }}
              >
                <Icon name={f.icon} size={22} className="text-gold-500" />
              </div>
              <div>
                <h3 className="font-cormorant text-xl font-bold text-forest-800 mb-2">{f.title}</h3>
                <p className="font-golos text-sm text-forest-600 leading-relaxed">{f.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-10 left-1/2 -translate-x-1/2 w-[calc(66%-2rem)] h-0.5 bg-gradient-to-r from-forest-200 via-gold-300 to-forest-200" />

          <div className="grid md:grid-cols-3 gap-8">
            {weeks.map((w, i) => (
              <div key={i} className="relative flex flex-col items-center text-center">
                {/* Step number */}
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6 relative z-10 shadow-lg"
                  style={{ background: "linear-gradient(135deg, #2d7a2d, #4d9e4d)" }}
                >
                  <Icon name={w.icon} size={28} className="text-white" />
                </div>
                <span className="font-golos text-xs font-semibold text-gold-500 uppercase tracking-widest mb-2">{w.period}</span>
                <h3 className="font-cormorant text-2xl font-bold text-forest-800 mb-3">{w.title}</h3>
                <p className="font-golos text-sm text-forest-600 leading-relaxed max-w-xs">{w.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="https://t.me/GUM_GUM8"
            target="_blank"
            rel="noopener noreferrer"
            className="font-golos font-semibold px-10 py-4 rounded-full text-white transition-all duration-300 hover:scale-105 hover:shadow-xl inline-block text-lg"
            style={{ background: "linear-gradient(135deg, #2d7a2d, #4d9e4d)" }}
          >
            Записаться на программу
          </a>
        </div>

      </div>
    </section>
  );
};

export default ProgramDescription;
