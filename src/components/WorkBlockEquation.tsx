const mono: React.CSSProperties = {
  fontFamily: "ui-monospace, 'SFMono-Regular', Menlo, 'Courier New', monospace",
};

function Display({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center py-3 text-zinc-200 text-sm" style={mono}>
      {children}
    </div>
  );
}

export default function WorkBlockEquation() {
  return (
    <section className="bg-black py-20">
      <div className="max-w-2xl mx-auto px-8 md:px-12" style={mono}>

        <p className="text-zinc-600 text-xs mb-10 tracking-widest">
          §2&nbsp;&nbsp;&nbsp;The Work Block
        </p>

        {/* Definition */}
        <p className="text-sm mb-8 leading-relaxed">
          <span className="text-white font-bold">Definition 2.1 (Work Block).</span>{" "}
          <span className="text-zinc-400">
            A contiguous interval [t₀, t₁] during which sustained cognitive output C(t) exceeds
            a task-relevant threshold θ.{" "}
            <span className="text-zinc-300">EIGEN is designed to initiate this interval.</span>
          </span>
        </p>

        <div className="border-t border-zinc-900 mb-8" />

        {/* Mechanism 2.1 */}
        <p className="text-sm mb-2 leading-relaxed">
          <span className="text-white font-bold">Mechanism 2.1 — Caffeine.</span>{" "}
          <span className="text-zinc-400">
            Acts as a <span className="text-zinc-200 font-medium">competitive inhibitor</span> at{" "}
            <span className="text-zinc-200 font-medium">adenosine A₁ and A₂ₐ receptors</span>,
            reducing fatigue signaling. Receptor occupancy:
          </span>
        </p>
        <Display>
          θ&#x2090; = [A] / ( [A] + K&#x1d62; · (1 + [C] / K&#x1d62;c) )
        </Display>
        <p className="text-xs text-zinc-600 mb-1">
          K&#x1d62;(A₁) ≈ 17 μM · K&#x1d62;(A₂ₐ) ≈ 12 μM · T&#x2098;&#x2090;&#x2093; ≈ 45 min
        </p>
        <p className="text-xs text-zinc-700 mb-8">
          Fredholm et al. (2001) <em>Pharmacological Reviews</em>, 51(1)
        </p>

        {/* Mechanism 2.2 */}
        <p className="text-sm mb-2 leading-relaxed">
          <span className="text-white font-bold">Mechanism 2.2 — L-Theanine.</span>{" "}
          <span className="text-zinc-400">
            In a <span className="text-zinc-200 font-medium">double-blind RCT</span>,
            L-Theanine + caffeine at a{" "}
            <span className="text-zinc-200 font-medium">1:2 ratio</span> significantly improved{" "}
            <span className="text-zinc-200 font-medium">
              speed and accuracy on attention-switching tasks
            </span>{" "}
            versus caffeine alone — with reduced susceptibility to distraction.
          </span>
        </p>
        <p className="text-xs text-zinc-700 mb-8">
          Owen et al. (2008) <em>Psychopharmacology</em>, 195(4), 569–577
        </p>

        <div className="border-t border-zinc-900 mb-8" />

        {/* Proposition */}
        <p className="text-sm leading-relaxed">
          <span className="text-white font-bold">Proposition 2.1 — EIGEN.</span>{" "}
          <span className="text-zinc-400">
            Contains <span className="text-zinc-200 font-medium">no nicotine</span> — no
            nicotine dependence by design. The goal is focus without physiological debt:{" "}
            <span className="text-zinc-300">a work block you can repeat tomorrow.</span>
          </span>
        </p>

        <div className="border-t border-zinc-900 mt-10 pt-5">
          <p className="text-zinc-700 text-xs leading-relaxed">
            Kᵢ values from Fredholm et al. (2001). Not a medical claim. Not evaluated by the FDA.
          </p>
        </div>

      </div>
    </section>
  );
}
