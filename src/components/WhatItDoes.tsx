const steps = [
  {
    n: "01",
    title: "Place",
    desc: "Put one pouch between your gum and lip.",
  },
  {
    n: "02",
    title: "Start",
    desc: "Open the work and begin.",
  },
  {
    n: "03",
    title: "Remove",
    desc: "Dispose after 20–45 minutes.",
  },
];

export default function WhatItDoes() {
  return (
    <section id="how-it-works" className="py-24 border-t border-zinc-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-zinc-400 tracking-[0.22em] text-xs font-medium uppercase mb-4">
              What it does
            </p>
            <h2 className="text-4xl font-light text-zinc-900 leading-snug tracking-tight mb-6">
              Built for the start of a work block.
            </h2>
            <p className="text-zinc-500 font-light leading-relaxed text-base max-w-sm">
              Use one before a study block, coding sprint, writing session, or late-night build.
              The pouch helps you begin — the work does the rest.
            </p>
            <p className="text-zinc-400 font-light text-sm mt-4 max-w-sm">
              No prescription. No crash. No dependency.
            </p>
          </div>

          {/* Right: steps */}
          <div className="space-y-0 divide-y divide-zinc-100">
            {steps.map((step) => (
              <div key={step.n} className="flex items-baseline gap-6 py-5">
                <span
                  className="text-zinc-300 text-xs shrink-0 tabular-nums"
                  style={{ fontFamily: "ui-monospace, Menlo, monospace" }}
                >
                  {step.n}
                </span>
                <div>
                  <span className="text-zinc-900 font-medium text-sm">{step.title}</span>
                  <span className="text-zinc-400 text-sm font-light ml-3">{step.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
