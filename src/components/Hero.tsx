import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #f7f2e8 0%, #eef5e8 40%, #f5f0e0 100%)",
      }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(https://cdn.poehali.dev/projects/51ed0136-427f-4f55-9ebb-708734497941/files/dfa69a53-5118-4448-9fc6-ab9a68093966.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Decorative orbs */}
      <div className="absolute top-16 right-16 w-72 h-72 rounded-full opacity-20 blur-3xl" style={{ background: "radial-gradient(circle, #c9922a, transparent)" }} />
      <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full opacity-15 blur-3xl" style={{ background: "radial-gradient(circle, #2d7a2d, transparent)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left content */}
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-gold-300 rounded-full px-5 py-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-forest-500" />
            <span className="font-golos text-sm text-forest-700 font-medium tracking-wide uppercase">
              Психолог по личностным установкам
            </span>
          </div>

          <h1 className="font-cormorant text-5xl lg:text-7xl font-bold text-forest-800 leading-tight mb-6">
            Перепиши свой{" "}
            <span
              className="italic"
              style={{
                background: "linear-gradient(90deg, #c9922a, #f4b942)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              сценарий
            </span>
          </h1>

          <p className="font-golos text-lg text-forest-700 leading-relaxed mb-4 max-w-lg">
            Для тех, кто устал начинать и сливаться, боится проявляться и сомневается в себе — и хочет наконец выйти в реализацию, деньги и новую жизнь.
          </p>

          <p className="font-golos text-base text-forest-600 leading-relaxed mb-10 max-w-lg">
            6 недель работы с внутренними сценариями, которые держат вас на месте. Групповой или личный формат — вместе с психологом, не в одиночку.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://t.me/GUM_GUM8"
              target="_blank"
              rel="noopener noreferrer"
              className="font-golos font-semibold px-8 py-4 rounded-full text-white transition-all duration-300 hover:scale-105 hover:shadow-xl inline-block"
              style={{ background: "linear-gradient(135deg, #2d7a2d, #4d9e4d)" }}
            >
              Хочу участвовать
            </a>
            <button
              className="font-golos font-semibold px-8 py-4 rounded-full border-2 border-forest-500 text-forest-700 bg-white/60 backdrop-blur-sm transition-all duration-300 hover:bg-forest-50 hover:scale-105"
            >
              Узнать подробнее
            </button>
          </div>

          {/* Stats */}
          <div className="mt-14 flex gap-10">
            {[
              { value: "6", label: "недель\nсопровождения" },
              { value: "200+", label: "человек\nпрошли программу" },
              { value: "10", label: "лет\nпрактики" },
            ].map((stat) => (
              <div key={stat.value} className="text-center">
                <div className="font-cormorant text-4xl font-bold text-gold-500">{stat.value}</div>
                <div className="font-golos text-xs text-forest-600 mt-1 whitespace-pre-line leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: photo */}
        <div className="relative flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="relative">
            {/* Decorative ring */}
            <div
              className="absolute -inset-4 rounded-3xl opacity-30"
              style={{ background: "linear-gradient(135deg, #c9922a40, #2d7a2d40)" }}
            />
            <img
              src="https://cdn.poehali.dev/projects/51ed0136-427f-4f55-9ebb-708734497941/bucket/9cd8230b-341b-468f-8150-a48d2432fd4b.png"
              alt="Психолог по личностным установкам"
              className="relative rounded-3xl object-cover w-full max-w-md lg:max-w-lg shadow-2xl"
              style={{ maxHeight: "600px", objectPosition: "top center" }}
            />
            {/* Floating card */}
            <div
              className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-xl border border-gold-200"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #2d7a2d, #4d9e4d)" }}>
                  <Icon name="Heart" size={18} className="text-white" />
                </div>
                <div>
                  <div className="font-golos font-semibold text-forest-800 text-sm">Любой сценарий</div>
                  <div className="font-golos text-forest-600 text-xs">можно изменить</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-forest-500 opacity-60">
        <span className="font-golos text-xs tracking-widest uppercase">Листайте</span>
        <Icon name="ChevronDown" size={20} className="animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;