import Icon from "@/components/ui/icon";

const reviews = [
  {
    name: "Анна К.",
    age: "34 года",
    avatar: "АК",
    text: "Три года я думала, что просто «такой человек» — тревожный, неуверенный. После курса поняла: это был сценарий из детства. Сейчас живу совсем иначе.",
    result: "Ушла тревога и страх оценки",
  },
  {
    name: "Михаил Р.",
    age: "41 год",
    avatar: "МР",
    text: "Начинал десятки проектов и бросал на полпути. Думал, что ленивый. Оказалось — срабатывал сценарий «я недостаточно хорош». Теперь довожу дела до конца.",
    result: "Запустил свой бизнес",
  },
  {
    name: "Елена В.",
    age: "29 лет",
    avatar: "ЕВ",
    text: "Повторяла один и тот же тип отношений снова и снова. После работы со сценариями наконец увидела паттерн — и остановила его. Это было как прозрение.",
    result: "Вышла из токсичных отношений",
  },
  {
    name: "Дмитрий С.",
    age: "37 лет",
    avatar: "ДС",
    text: "Скептически относился к «психологическим» вещам. Пошёл за компанию с женой. В итоге это стало одним из самых важных решений в моей жизни. Доход вырос в 2 раза.",
    result: "Рост дохода в 2 раза за 4 месяца",
  },
  {
    name: "Ольга П.",
    age: "45 лет",
    avatar: "ОП",
    text: "Всю жизнь жила для других — дети, муж, работа. Себя не было в этом списке вообще. Курс помог найти себя и перестать бояться своих желаний.",
    result: "Наконец начала жить для себя",
  },
  {
    name: "Игорь Т.",
    age: "32 года",
    avatar: "ИТ",
    text: "Работал много, зарабатывал мало — и не мог понять почему. Сценарий «деньги — это грязно» шёл из семьи. После осознания и проработки всё изменилось.",
    result: "Снял денежный блок",
  },
];

const avatarColors = [
  "linear-gradient(135deg, #2d7a2d, #4d9e4d)",
  "linear-gradient(135deg, #c9922a, #f4b942)",
  "linear-gradient(135deg, #1e5e1e, #2d7a2d)",
  "linear-gradient(135deg, #a07020, #c9922a)",
  "linear-gradient(135deg, #4d9e4d, #7bc47b)",
  "linear-gradient(135deg, #c9922a, #a07020)",
];

const Reviews = () => {
  return (
    <section className="py-24 px-6 lg:px-12 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gold-50 border border-gold-200 rounded-full px-5 py-2 mb-6">
            <Icon name="Star" size={14} className="text-gold-500" />
            <span className="font-golos text-sm text-gold-600 font-medium uppercase tracking-wide">Отзывы</span>
          </div>
          <h2 className="font-cormorant text-4xl lg:text-6xl font-bold text-forest-800 mb-5">
            Что говорят
            <br />
            <span className="italic text-gold-500">участники курса</span>
          </h2>
          <p className="font-golos text-lg text-forest-600 max-w-2xl mx-auto leading-relaxed">
            Реальные истории людей, которые прошли путь от осознания к изменениям.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white font-golos font-bold text-sm shrink-0"
                  style={{ background: avatarColors[i] }}
                >
                  {review.avatar}
                </div>
                <div>
                  <p className="font-golos font-semibold text-forest-800 text-sm">{review.name}</p>
                  <p className="font-golos text-xs text-forest-500">{review.age}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(5)].map((_, s) => (
                    <Icon key={s} name="Star" size={12} className="text-gold-400 fill-gold-400" />
                  ))}
                </div>
              </div>

              <p className="font-golos text-sm text-forest-700 leading-relaxed flex-1">
                «{review.text}»
              </p>

              <div
                className="rounded-xl px-4 py-2.5 flex items-center gap-2"
                style={{ background: "linear-gradient(135deg, #c9922a15, #f4b94225)" }}
              >
                <Icon name="CheckCircle" size={14} className="text-gold-500 shrink-0" />
                <span className="font-golos text-xs font-medium text-gold-700">{review.result}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
