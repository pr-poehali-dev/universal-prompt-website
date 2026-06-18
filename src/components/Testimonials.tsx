const testimonials = [
  {
    name: "Алина, 34 года",
    role: "Предприниматель",
    text: "Я три года не могла выйти на новый уровень дохода. Казалось, всё делаю правильно — но что-то всегда шло не так. После работы с Гульмирой поняла, где именно был блок. За два месяца доход вырос вдвое.",
    result: "Доход ×2 за 2 месяца",
    initial: "А",
  },
  {
    name: "Марина, 29 лет",
    role: "Менеджер",
    text: "Я постоянно саботировала себя — начинала и бросала. Думала, это лень. Оказалось — глубинный сценарий «я не достойна». Сейчас я запустила свой проект и не отступаю.",
    result: "Запустила свой проект",
    initial: "М",
  },
  {
    name: "Светлана, 41 год",
    role: "Руководитель",
    text: "Долго не могла выйти из отношений, которые разрушали меня. Работа с установками дала понимание, почему я снова и снова выбирала одно и то же. Сейчас строю здоровые отношения.",
    result: "Вышла из абьюза",
    initial: "С",
  },
  {
    name: "Диана, 26 лет",
    role: "Фрилансер",
    text: "Боялась проявляться — не вела соцсети, отказывалась от выступлений, прятала свою экспертность. После программы начала вести блог. Первые клиенты пришли уже через месяц.",
    result: "Начала проявляться",
    initial: "Д",
  },
  {
    name: "Ольга, 38 лет",
    role: "Коуч",
    text: "Ходила по одному и тому же кругу в отношениях и деньгах годами. Не понимала, почему. Гульмира помогла найти точку, где всё блокировалось. Ощущение — как будто жизнь наконец сдвинулась.",
    result: "Вышла из замкнутого круга",
    initial: "О",
  },
  {
    name: "Камила, 32 года",
    role: "HR-специалист",
    text: "Принимала решения с огромным трудом — всё время сомневалась, откладывала. После работы с установками стало легче в разы. Коллеги заметили изменения раньше, чем я сама.",
    result: "Лёгкость в решениях",
    initial: "К",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6 lg:px-12 bg-cream">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
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
          <p className="font-golos text-forest-600 max-w-xl mx-auto">
            Реальные истории людей, которые изменили свои внутренние сценарии
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-7 shadow-sm border border-stone-100 flex flex-col gap-5 hover:shadow-md transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="text-gold-400 text-sm tracking-wider">★★★★★</div>

              {/* Text */}
              <p className="font-golos text-forest-700 text-sm leading-relaxed flex-1">
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
                  style={{ background: "linear-gradient(135deg, #2d7a2d, #4d9e4d)" }}
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
