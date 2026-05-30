export default function WhyNoNicotine() {
  return (
    <section className="py-24 border-t border-zinc-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-zinc-400 tracking-[0.22em] text-xs font-medium uppercase mb-4">
              Why no nicotine
            </p>
            <h2 className="text-4xl font-light text-zinc-900 leading-snug tracking-tight">
              No nicotine.
              <br />
              On purpose.
            </h2>
          </div>

          {/* Right */}
          <div className="space-y-5">
            <p className="text-zinc-600 font-light leading-relaxed text-base">
              Nicotine makes people come back to nicotine. That is not the product we wanted to
              build.
            </p>
            <p className="text-zinc-600 font-light leading-relaxed text-base">
              EIGEN is a pouch for focused work, not nicotine dependence. We leave nicotine out
              because focus should not require it.
            </p>
            <div className="pt-4 border-t border-zinc-100">
              <p className="text-zinc-400 text-sm font-light italic">
                Not nicotine. Not a prescription shortcut. Built for work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
