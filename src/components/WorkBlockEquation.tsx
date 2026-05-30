export default function WorkBlockEquation() {
  return (
    <section className="bg-black py-20">
      <div className="max-w-3xl mx-auto px-8 md:px-12">

        {/* Section label */}
        <p className="text-zinc-600 text-xs tracking-widest mb-12 font-mono">
          §2&nbsp;&nbsp;&nbsp;The Work Block Equation
        </p>

        {/* Core formula */}
        <div className="mb-10">
          <p className="text-zinc-500 text-xs font-mono mb-1">Definition 2.1 (Useful Focus).</p>
          <p className="text-zinc-400 text-sm leading-relaxed mb-5">
            Let A(t), J(t), D denote alertness, jitter, and dependence accumulation over a work block [t₀, t₁]:
          </p>
          <Formula>F(t) = α·A(t) − β·J(t) − γ·D</Formula>
          <p className="text-zinc-600 text-xs font-mono mt-3">
            α, β, γ &gt; 0 are subject-specific weighting constants.
          </p>
        </div>

        <div className="border-t border-zinc-900 mb-10" />

        {/* Mechanisms — compact two-column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div>
            <p className="text-zinc-500 text-xs font-mono mb-2">Mechanism 2.1 (Caffeine).</p>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              Competitive antagonist at adenosine A₁ and A₂ₐ receptors. Reduces adenosine
              binding occupancy, increasing alertness.
            </p>
            <Formula small>Kᵢ(A₁) ≈ 17 μM · Kᵢ(A₂ₐ) ≈ 12 μM</Formula>
            <p className="text-zinc-600 text-xs font-mono mt-2">
              Tmax ≈ 45 min · net: ↑ A(t)
            </p>
            <p className="text-zinc-700 text-xs font-mono mt-1">Fredholm et al. (2001) Pharmacol. Rev.</p>
          </div>
          <div>
            <p className="text-zinc-500 text-xs font-mono mb-2">Mechanism 2.2 (L-Theanine).</p>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              Increases posterior alpha-band EEG power and attenuates the anxiogenic response to
              caffeine. Studied ratio:
            </p>
            <Formula small>L-Theanine : Caffeine ≈ 2:1</Formula>
            <p className="text-zinc-600 text-xs font-mono mt-2">
              Δα &gt; 0 · net: ↓ J(t)
            </p>
            <p className="text-zinc-700 text-xs font-mono mt-1">Nobre et al. (2008) · Foxe et al. (2012)</p>
          </div>
        </div>

        <div className="border-t border-zinc-900 mb-10" />

        {/* Proposition */}
        <div className="mb-10">
          <p className="text-zinc-500 text-xs font-mono mb-1">Proposition 2.1 (EIGEN by construction).</p>
          <p className="text-zinc-400 text-sm leading-relaxed mb-5">
            EIGEN contains no nicotine. Dependence accumulation is zero by design. Combined
            with ↑ A(t) and ↓ J(t):
          </p>
          <Formula>F(t) = α·A(t) − β·J(t) − 0 ≥ F₀(t)&nbsp;&nbsp;∀t ∈ [t₀, t₁]&nbsp;&nbsp;∎</Formula>
          <p className="text-zinc-600 text-xs font-mono mt-3">F₀(t) = baseline focus without supplementation.</p>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-zinc-900 pt-6">
          <p className="text-zinc-700 text-xs font-mono leading-relaxed">
            Conceptual design framework, not a medical claim. Not evaluated by the FDA.
          </p>
        </div>

      </div>
    </section>
  );
}

function Formula({ children, small }: { children: React.ReactNode; small?: boolean }) {
  return (
    <div
      className={`font-mono text-zinc-200 text-center py-3 px-4 border border-zinc-800 rounded-lg bg-zinc-950 ${
        small ? "text-xs" : "text-sm"
      }`}
    >
      {children}
    </div>
  );
}
