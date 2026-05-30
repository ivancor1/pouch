function Formula({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="inline-block border border-zinc-700 rounded-lg px-5 py-3 text-zinc-200 text-sm"
      style={{ fontFamily: "ui-monospace, 'SFMono-Regular', Menlo, monospace" }}
    >
      {children}
    </div>
  );
}

export default function WorkBlockEquation() {
  return (
    <section className="bg-zinc-900 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-zinc-600 tracking-[0.22em] text-xs font-medium uppercase mb-6">
            The Work Block
          </p>
          <h2 className="text-4xl font-light text-white leading-snug tracking-tight mb-6">
            Built for controlled output, not maximum intensity.
          </h2>
          <p className="text-zinc-400 font-light leading-relaxed text-base mb-12 max-w-lg">
            Most energy products optimize for how hard you feel it. EIGEN is built around a
            different idea: enough lift to begin, enough calm to stay, and no nicotine dependence.
          </p>

          <div className="space-y-4">
            <Formula>Focus ≠ max stimulation</Formula>
            <div className="block" />
            <Formula>Output = Focus × Time</Formula>
          </div>

          <p className="text-zinc-600 text-sm font-light mt-10 leading-relaxed max-w-sm">
            A work block is a contiguous period of focused output. EIGEN is designed to help
            start one — not to keep you wired.
          </p>
        </div>
      </div>
    </section>
  );
}
