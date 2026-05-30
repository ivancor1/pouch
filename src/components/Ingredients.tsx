const items = [
  { name: "Caffeine", role: "Measured lift" },
  { name: "L-Theanine", role: "Calm support" },
  { name: "Theacrine", role: "Sustained energy" },
  { name: "Citicoline", role: "Cognitive support" },
  { name: "B Vitamins", role: "Energy metabolism" },
];

export default function Ingredients() {
  return (
    <section id="ingredients" className="py-24 border-t border-zinc-100 bg-zinc-50/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-zinc-400 tracking-[0.22em] text-xs font-medium uppercase mb-4">
              Inside each pouch
            </p>
            <h2 className="text-4xl font-light text-zinc-900 leading-snug tracking-tight mb-4">
              What&apos;s in it.
            </h2>
            <p className="text-zinc-500 font-light text-sm leading-relaxed max-w-xs">
              Final formula and exact dosages will be published before launch — we&apos;re
              still optimizing.
            </p>
            <p className="text-zinc-400 text-xs mt-6 leading-relaxed max-w-xs">
              These statements have not been evaluated by the FDA. Not intended to diagnose,
              treat, cure, or prevent any disease.
            </p>
          </div>

          {/* Right: ingredient list */}
          <div className="divide-y divide-zinc-100">
            {items.map((item) => (
              <div key={item.name} className="flex items-center justify-between py-4">
                <span className="text-zinc-900 font-medium text-sm">{item.name}</span>
                <span className="text-zinc-400 text-sm font-light">{item.role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
