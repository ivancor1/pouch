const steps = [
  {
    n: "01",
    title: "Pop one in",
    desc: "Place the pouch comfortably between your gum and lip. No water, no prep, no ritual required. It takes a few seconds.",
  },
  {
    n: "02",
    title: "Lock into your work block",
    desc: "The ingredients take effect gradually. Use the pouch as a signal to yourself: it's time to focus. Open your work. Start.",
  },
  {
    n: "03",
    title: "Dispose after 20–45 min",
    desc: "Remove and dispose of the pouch when you're ready. The session continues.  The pouch was just how you began.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-16">
          <p className="text-zinc-600 tracking-[0.22em] text-xs font-medium uppercase mb-4">
            How it works
          </p>
          <h2 className="text-4xl font-light text-white leading-snug tracking-tight">
            Simple by design.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="p-8 rounded-2xl border border-zinc-800 bg-zinc-800/30 h-full">
                <span className="text-zinc-600 text-xs font-medium tracking-widest tabular-nums">
                  {step.n}
                </span>
                <h3 className="text-white font-medium text-lg mt-4 mb-3">{step.title}</h3>
                <p className="text-zinc-400 font-light leading-relaxed text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 rounded-2xl border border-zinc-800/60 bg-zinc-800/20 max-w-2xl">
          <p className="text-zinc-500 text-sm font-light leading-relaxed">
            <span className="text-zinc-400 font-medium">Note:</span> The pouch does not need to
            stay in for the entire work session. It is designed as a ritual, something that helps
            you begin, not something that lasts the whole time.
          </p>
        </div>
      </div>
    </section>
  );
}
