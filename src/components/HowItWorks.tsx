const steps = [
  {
    n: "01",
    title: "Pop one in",
    desc: "Place the pouch between your gum and lip. No drink, no setup. It takes a few seconds.",
  },
  {
    n: "02",
    title: "Lock into your work block",
    desc: "The ingredients take effect gradually. Use it as a cue: work starts now. Open your task. Begin.",
  },
  {
    n: "03",
    title: "Dispose after 20–45 min",
    desc: "Remove and dispose when you're ready. The work block continues. The pouch was just how you started.",
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
            stay in for the entire work session. It is designed to help start a focused work block,
            not to stay in all day.
          </p>
        </div>
      </div>
    </section>
  );
}
