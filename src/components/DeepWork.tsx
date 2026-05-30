const useCases = [
  {
    n: "01",
    label: "Study blocks",
    desc: "Exam prep, lecture review, problem sets. Lock in before you open the textbook.",
  },
  {
    n: "02",
    label: "Coding sprints",
    desc: "Features, debugging, shipping. Start clean, stay sharp.",
  },
  {
    n: "03",
    label: "Writing sessions",
    desc: "Essays, reports, copy, ideas. The blank page gets easier.",
  },
  {
    n: "04",
    label: "Finance prep",
    desc: "Modeling, recruiting, case practice. High-stakes focus on demand.",
  },
  {
    n: "05",
    label: "Startup building",
    desc: "Strategy, decks, product decisions. One thing at a time.",
  },
  {
    n: "06",
    label: "Late-night work",
    desc: "When the calendar says go, but the brain says stop.",
  },
];

export default function DeepWork() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-14">
          <p className="text-zinc-400 tracking-[0.22em] text-xs font-medium uppercase mb-4">
            Built for deep work
          </p>
          <h2 className="text-4xl font-light text-zinc-900 leading-snug tracking-tight">
            For anyone who needs to lock in.
          </h2>
          <p className="text-zinc-500 font-light mt-4 leading-relaxed text-base">
            EIGEN is built around one moment: when you sit down and need to actually get it done.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {useCases.map((uc) => (
            <div
              key={uc.n}
              className="group p-6 rounded-2xl border border-zinc-100 bg-white hover:border-zinc-200 hover:shadow-sm transition-all duration-200"
            >
              <div className="w-8 h-8 rounded-xl bg-zinc-50 group-hover:bg-zinc-100 transition-colors duration-200 flex items-center justify-center mb-5">
                <span className="text-zinc-400 text-xs font-medium tabular-nums">{uc.n}</span>
              </div>
              <h3 className="text-zinc-900 font-medium text-sm mb-2">{uc.label}</h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">{uc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
