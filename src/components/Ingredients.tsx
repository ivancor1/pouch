const ingredients = [
  {
    name: "Caffeine",
    role: "Clean lift",
    desc: "A moderate, measured dose for alertness, without the jitteriness of a strong coffee or energy drink.",
  },
  {
    name: "L-Theanine",
    role: "Calm focus",
    desc: "Commonly paired with caffeine. Supports a smooth, focused feeling without the edge.",
  },
  {
    name: "Citicoline",
    role: "Cognitive support",
    desc: "A compound studied for its role in brain health and mental clarity. Present in meaningful amounts.",
  },
  {
    name: "B Vitamins",
    role: "Energy metabolism",
    desc: "B6 and B12 support normal energy-yielding metabolism. Standard, well-understood, widely researched.",
  },
];

export default function Ingredients() {
  return (
    <section id="ingredients" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left copy */}
          <div className="lg:sticky lg:top-24">
            <p className="text-zinc-400 tracking-[0.22em] text-xs font-medium uppercase mb-4">
              What&apos;s inside
            </p>
            <h2 className="text-4xl font-light text-zinc-900 leading-snug tracking-tight">
              Ingredients you can pronounce.
            </h2>
            <p className="text-zinc-500 font-light mt-4 leading-relaxed text-sm max-w-sm">
              No proprietary blends. No hidden stimulants. No tobacco. Each ingredient is here
              because it has a clear, well-understood purpose.
            </p>

            <div className="mt-8 p-5 rounded-2xl bg-zinc-50 border border-zinc-100">
              <p className="text-zinc-400 text-xs leading-relaxed">
                These statements have not been evaluated by the FDA. EIGEN is not intended to
                diagnose, treat, cure, or prevent any disease or medical condition.
              </p>
            </div>
          </div>

          {/* Right ingredient cards */}
          <div className="space-y-3">
            {ingredients.map((ing, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-zinc-100 bg-white hover:border-zinc-200 hover:shadow-sm transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-zinc-900 font-medium text-sm">{ing.name}</h3>
                  <span className="shrink-0 text-xs text-zinc-500 bg-zinc-50 border border-zinc-100 px-3 py-1 rounded-full">
                    {ing.role}
                  </span>
                </div>
                <p className="text-zinc-500 text-sm font-light leading-relaxed">{ing.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
