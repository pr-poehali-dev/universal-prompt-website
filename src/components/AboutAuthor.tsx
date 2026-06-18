import Icon from "@/components/ui/icon";

const points = [
  "Перестают саботировать себя и начинают проявляться",
  "Выходят на новый уровень дохода",
  "Выходят из абьюза и строят здоровые отношения",
  "Начинают жить свою настоящую жизнь",
];

const AboutAuthor = () => {
  return (
    <section
      className="py-24 px-6 lg:px-12"
      style={{ background: "linear-gradient(135deg, #1a3d1a 0%, #0f2b0f 50%, #1e4a1e 100%)" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Badge */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex items-center gap-2 border border-white/20 rounded-full px-5 py-2 bg-white/5">
            <Icon name="User" size={14} className="text-gold-400" />
            <span className="font-golos text-sm text-gold-400 font-medium uppercase tracking-wide">Об авторе</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Photo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Glow ring */}
              <div
                className="absolute -inset-4 rounded-3xl opacity-40 blur-xl"
                style={{ background: "linear-gradient(135deg, #c9922a, #2d7a2d)" }}
              />
              <img
                src="https://cdn.poehali.dev/projects/51ed0136-427f-4f55-9ebb-708734497941/bucket/9cd8230b-341b-468f-8150-a48d2432fd4b.png"
                alt="Гульмира Абу — психолог"
                className="relative rounded-3xl object-cover shadow-2xl w-full max-w-sm"
                style={{ maxHeight: "520px", objectPosition: "top center" }}
              />
              {/* Floating badge */}
              <div
                className="absolute -bottom-5 -right-5 rounded-2xl px-5 py-4 shadow-xl border border-gold-400/30"
                style={{ background: "linear-gradient(135deg, #c9922a, #f4b942)" }}
              >
                <div className="text-center">
                  <div className="font-cormorant text-3xl font-bold text-white">7+</div>
                  <div className="font-golos text-xs text-white/90">лет практики</div>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <h2 className="font-cormorant text-4xl lg:text-5xl font-bold text-white mb-2 leading-tight">
              Гульмира Абу
            </h2>
            <p className="font-golos text-gold-400 text-lg font-medium mb-8">
              Психолог по корректировке внутренних установок
            </p>

            <p className="font-golos text-white/80 leading-relaxed mb-5">
              Более 7 лет я работаю с внутренними сценариями, которые незаметно управляют жизнью человека.
            </p>
            <p className="font-golos text-white/70 leading-relaxed mb-5">
              Если вы постоянно откатываетесь назад, боитесь проявляться, не можете выйти на новый уровень дохода или снова попадаете в одни и те же ситуации — причина часто не во внешних обстоятельствах.
            </p>
            <p className="font-golos text-white/80 leading-relaxed mb-8 font-medium">
              За 7 лет практики я чётко выявила закономерность: человеку мешают не обстоятельства, а сценарии, по которым он живёт. Мы меняем эти сценарии.
            </p>

            {/* Results list */}
            <div className="mb-10">
              <p className="font-golos text-white/60 text-sm mb-4 uppercase tracking-wide">После работы со мной клиенты:</p>
              <ul className="space-y-3">
                {points.map((p, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: "linear-gradient(135deg, #c9922a, #f4b942)" }}
                    >
                      <Icon name="Check" size={11} className="text-white" />
                    </div>
                    <span className="font-golos text-white/80 text-sm leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="https://t.me/GUM_GUM8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-golos font-semibold px-8 py-4 rounded-full text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ background: "linear-gradient(135deg, #c9922a, #f4b942)" }}
            >
              <Icon name="MessageCircle" size={18} className="text-white" />
              Написать Гульмире
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutAuthor;
