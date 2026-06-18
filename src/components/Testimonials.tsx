const testimonials = [
  {
    name: "Клиентка Гульмиры",
    role: "Реальный отзыв",
    text: "Перестала оглядываться на других, принимаю решения сама. Почувствовала веру в себя, пропало желание оправдываться. Это удивительно — я действительно изменилась.",
    result: "Вера в себя",
    initial: "★",
    real: true,
  },
  {
    name: "Алина, 34 года",
    role: "Предприниматель",
    text: "Я три года не могла выйти на новый уровень дохода. Казалось, всё делаю правильно — но что-то всегда шло не так. После работы с Гульмирой поняла, где именно был блок. За два месяца доход вырос вдвое.",
    result: "Доход ×2 за 2 месяца",
    initial: "А",
    real: false,
  },
  {
    name: "Артём, 36 лет",
    role: "Руководитель отдела",
    text: "Думал, психология — не для мужчин. Пришёл, потому что застрял на одной позиции три года и не понимал почему. Оказалось — страх ответственности, зашитый ещё с детства. Сейчас получил повышение.",
    result: "Карьерный рост",
    initial: "А",
    real: false,
  },
  {
    name: "Марина, 29 лет",
    role: "Менеджер",
    text: "Я постоянно саботировала себя — начинала и бросала. Думала, это лень. Оказалось — глубинный сценарий «я не достойна». Сейчас я запустила свой проект и не отступаю.",
    result: "Запустила свой проект",
    initial: "М",
    real: false,
  },
  {
    name: "Дмитрий, 41 год",
    role: "Собственник бизнеса",
    text: "Бизнес рос, а я всё равно чувствовал тревогу и пустоту. Работа с Гульмирой помогла понять, что гнал себя из страха, а не из желания. Теперь принимаю решения спокойно и с удовольствием.",
    result: "Спокойствие и ясность",
    initial: "Д",
    real: false,
  },
  {
    name: "Светлана, 41 год",
    role: "Руководитель",
    text: "Долго не могла выйти из отношений, которые разрушали меня. Работа с установками дала понимание, почему я снова и снова выбирала одно и то же. Сейчас строю здоровые отношения.",
    result: "Вышла из абьюза",
    initial: "С",
    real: false,
  },
  {
    name: "Максим, 33 года",
    role: "IT-специалист",
    text: "Я избегал любых конфликтов, всё время соглашался с другими — даже когда был не согласен. Через месяц работы начал говорить «нет» без вины. Это изменило буквально всё.",
    result: "Научился говорить «нет»",
    initial: "М",
    real: false,
  },
  {
    name: "Диана, 26 лет",
    role: "Фрилансер",
    text: "Боялась проявляться — не вела соцсети, отказывалась от выступлений, прятала свою экспертность. После программы начала вести блог. Первые клиенты пришли уже через месяц.",
    result: "Начала проявляться",
    initial: "Д",
    real: false,
  },
  {
    name: "Камила, 32 года",
    role: "HR-специалист",
    text: "Принимала решения с огромным трудом — всё время сомневалась, откладывала. После работы с установками стало легче в разы. Коллеги заметили изменения раньше, чем я сама.",
    result: "Лёгкость в решениях",
    initial: "К",
    real: false,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6 lg:px-12 bg-cream">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          {/* Photo */}
          <div className="shrink-0 relative">
            <div
              className="absolute -inset-3 rounded-3xl opacity-30 blur-lg"
              style={{ background: "linear-gradient(135deg, #c9922a, #2d7a2d)" }}
            />
            <img
              src="https://cdn.poehali.dev/projects/51ed0136-427f-4f55-9ebb-708734497941/bucket/e3b10b31-16ba-48cd-b7f3-5c5a568d41c1.png"
              alt="Гульмира Абу"
              className="relative rounded-3xl object-cover shadow-xl w-48 h-60 lg:w-56 lg:h-72"
              style={{ objectPosition: "top center" }}
            />
          </div>
          {/* Text */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 border border-gold-300 rounded-full px-5 py-2 bg-white/60 mb-6">
              <span className="text-gold-500 text-sm">★★★★★</span>
              <span className="font-golos text-sm text-forest-700 font-medium uppercase tracking-wide">Отзывы клиентов</span>
            </div>
            <h2 className="font-cormorant text-4xl lg:text-5xl font-bold text-forest-800 mb-4">
              Результаты говорят<br />
              <span
                className="italic"
                style={{
                  background: "linear-gradient(90deg, #c9922a, #f4b942)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                сами за себя
              </span>
            </h2>
            <p className="font-golos text-forest-600 max-w-xl">
              Реальные истории людей, которые изменили свои внутренние сценарии
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`rounded-3xl p-7 flex flex-col gap-5 hover:shadow-md transition-shadow duration-300 ${
                t.real
                  ? "shadow-lg border-2 border-gold-300 lg:col-span-3"
                  : "bg-white shadow-sm border border-stone-100"
              }`}
              style={t.real ? { background: "linear-gradient(135deg, #fffbf0, #f0f8f0)" } : {}}
            >
              {t.real && (
                <div className="inline-flex self-start items-center gap-2 bg-gold-100 border border-gold-300 rounded-full px-4 py-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                  <span className="font-golos text-xs text-gold-700 font-semibold uppercase tracking-wide">Реальный отзыв</span>
                </div>
              )}

              {/* Stars */}
              <div className="text-gold-400 text-sm tracking-wider">★★★★★</div>

              {/* Text */}
              <p className={`font-golos text-forest-700 leading-relaxed flex-1 ${t.real ? "text-lg lg:text-xl italic" : "text-sm"}`}>
                «{t.text}»
              </p>

              {/* Result badge */}
              <div
                className="inline-flex self-start items-center gap-2 rounded-full px-4 py-1.5"
                style={{ background: "linear-gradient(135deg, #f7f2e8, #eef5e8)" }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-forest-500" />
                <span className="font-golos text-xs text-forest-700 font-medium">{t.result}</span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-stone-100">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-golos font-bold text-sm shrink-0"
                  style={{ background: t.real ? "linear-gradient(135deg, #c9922a, #f4b942)" : "linear-gradient(135deg, #2d7a2d, #4d9e4d)" }}
                >
                  {t.initial}
                </div>
                <div>
                  <div className="font-golos font-semibold text-forest-800 text-sm">{t.name}</div>
                  <div className="font-golos text-forest-500 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;