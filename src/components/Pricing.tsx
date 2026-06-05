import Icon from "@/components/ui/icon";

const plans = [
  {
    name: "Групповое сопровождение",
    duration: "6 недель",
    price: "от 20 900 ₽",
    accent: "forest",
    accentGrad: "linear-gradient(135deg, #2d7a2d, #4d9e4d)",
    badge: null,
    description: "Работа в группе единомышленников под моим руководством. Живые эфиры, разборы, поддержка сообщества.",
    features: [
      "6 еженедельных групповых встреч",
      "Разборы участников в прямом эфире",
      "Доступ в закрытый чат поддержки",
      "Материалы и практики на каждую неделю",
      "Обратная связь от куратора",
    ],
    cta: "Записаться в группу",
  },
  {
    name: "Личное сопровождение",
    duration: "6 недель",
    price: "от 19 900 ₽",
    accent: "gold",
    accentGrad: "linear-gradient(135deg, #c9922a, #f4b942)",
    badge: "Популярный",
    description: "Индивидуальная работа один на один. Глубже, быстрее, точнее — под ваш конкретный запрос и темп.",
    features: [
      "6 индивидуальных сессий (по 60 мин)",
      "Личная диагностика установок",
      "Персональный план изменений",
      "Поддержка в мессенджере между сессиями",
      "Материалы под ваш запрос",
    ],
    cta: "Записаться на личную работу",
  },
  {
    name: "Глубокое сопровождение",
    duration: "10 недель",
    price: "30 500 ₽",
    accent: "forest",
    accentGrad: "linear-gradient(135deg, #1e5e1e, #2d7a2d)",
    badge: "Максимум",
    description: "Самый полный формат. Для тех, кто готов к серьёзной трансформации и хочет стабильного результата.",
    features: [
      "10 индивидуальных сессий (по 60–90 мин)",
      "Глубокая работа с корневыми сценариями",
      "Разбор всех ключевых сфер жизни",
      "Поддержка на протяжении всего курса",
      "Персональные практики и задания",
      "Доступ к записям и материалам навсегда",
    ],
    cta: "Оплатить и начать",
  },
];

const Pricing = () => {
  return (
    <section
      className="py-24 px-6 lg:px-12"
      style={{ background: "linear-gradient(180deg, #ffffff 0%, #f7f2e8 100%)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-forest-50 border border-forest-200 rounded-full px-5 py-2 mb-6">
            <Icon name="CreditCard" size={14} className="text-forest-600" />
            <span className="font-golos text-sm text-forest-600 font-medium uppercase tracking-wide">Форматы и цены</span>
          </div>
          <h2 className="font-cormorant text-4xl lg:text-6xl font-bold text-forest-800 mb-5">
            Выберите свой формат
          </h2>
          <p className="font-golos text-lg text-forest-600 max-w-xl mx-auto leading-relaxed">
            Все форматы — живая работа со мной, не записанный курс. Разница в глубине и темпе.
          </p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-3xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${plan.badge === "Популярный" ? "ring-2 ring-gold-400 shadow-xl scale-[1.02]" : "border border-gray-100 shadow-md"}`}
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className="absolute top-4 right-4 font-golos text-xs font-bold text-white px-3 py-1 rounded-full z-10"
                  style={{ background: plan.accentGrad }}
                >
                  {plan.badge}
                </div>
              )}

              {/* Top accent */}
              <div className="h-2 w-full" style={{ background: plan.accentGrad }} />

              <div className="bg-white flex flex-col flex-1 p-7">
                {/* Name & duration */}
                <div className="mb-4">
                  <h3 className="font-cormorant text-2xl font-bold text-forest-800 mb-1">{plan.name}</h3>
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" size={14} className="text-forest-400" />
                    <span className="font-golos text-sm text-forest-500">{plan.duration}</span>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-5 pb-5 border-b border-gray-100">
                  <div className="font-cormorant text-4xl font-bold text-forest-800">{plan.price}</div>
                </div>

                {/* Description */}
                <p className="font-golos text-sm text-forest-600 leading-relaxed mb-6">{plan.description}</p>

                {/* Features */}
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                        style={{ background: plan.accentGrad }}
                      >
                        <Icon name="Check" size={11} className="text-white" />
                      </div>
                      <span className="font-golos text-sm text-forest-700">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className="w-full font-golos font-semibold py-4 rounded-2xl text-white transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
                  style={{ background: plan.accentGrad }}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="text-center">
          <p className="font-golos text-sm text-forest-500">
            Не уверены, какой формат подойдёт?{" "}
            <button className="text-forest-700 font-semibold underline underline-offset-2 hover:text-gold-500 transition-colors">
              Напишите мне — разберёмся вместе
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;