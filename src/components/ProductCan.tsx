import { WaveLogo } from "./icons";

type Size = "sm" | "md" | "lg" | "xl";

const sizes: Record<Size, { outer: string; inner1: string; inner2: string; latch: string; shadow: string; logo: string; title: string; sub: string }> = {
  sm: {
    outer: "w-28 h-28",
    inner1: "inset-2",
    inner2: "inset-2",
    latch: "w-1.5 h-4 right-0.5",
    shadow: "w-24 h-4",
    logo: "w-5 h-3.5",
    title: "text-[7px] tracking-[0.3em]",
    sub: "text-[5px] tracking-[0.15em]",
  },
  md: {
    outer: "w-44 h-44",
    inner1: "inset-3",
    inner2: "inset-2",
    latch: "w-2 h-6 right-1",
    shadow: "w-40 h-6",
    logo: "w-7 h-5",
    title: "text-[10px] tracking-[0.35em]",
    sub: "text-[7px] tracking-[0.18em]",
  },
  lg: {
    outer: "w-64 h-64",
    inner1: "inset-4",
    inner2: "inset-3",
    latch: "w-2 h-8 right-1.5",
    shadow: "w-56 h-8",
    logo: "w-9 h-6",
    title: "text-sm tracking-[0.38em]",
    sub: "text-[9px] tracking-[0.2em]",
  },
  xl: {
    outer: "w-80 h-80",
    inner1: "inset-5",
    inner2: "inset-4",
    latch: "w-2.5 h-10 right-2",
    shadow: "w-72 h-10",
    logo: "w-12 h-8",
    title: "text-base tracking-[0.4em]",
    sub: "text-[10px] tracking-[0.22em]",
  },
};

export default function ProductCan({ size = "lg" }: { size?: Size }) {
  const s = sizes[size];

  return (
    <div className="relative flex flex-col items-center select-none">
      {/* Can lid */}
      <div
        className={`relative ${s.outer} rounded-full`}
        style={{
          background: "linear-gradient(145deg, #ffffff 60%, #f4f4f4 100%)",
          boxShadow:
            "0 30px 70px rgba(0,0,0,0.10), 0 10px 24px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -1px 0 rgba(0,0,0,0.03)",
          border: "1px solid rgba(0,0,0,0.07)",
        }}
      >
        {/* Groove ring outer */}
        <div
          className={`absolute ${s.inner1} rounded-full`}
          style={{ border: "1px solid rgba(0,0,0,0.05)" }}
        >
          {/* Groove ring inner */}
          <div
            className={`absolute ${s.inner2} rounded-full flex flex-col items-center justify-center gap-1.5`}
            style={{ border: "1px solid rgba(0,0,0,0.04)" }}
          >
            <WaveLogo className={`${s.logo} text-zinc-900`} />
            <p className={`text-zinc-900 font-medium ${s.title} leading-none`}>EIGEN</p>
            <p className={`text-zinc-400 ${s.sub} leading-none`}>FOCUS POUCHES</p>
          </div>
        </div>

        {/* Latch detail */}
        <div
          className={`absolute ${s.latch} top-1/2 -translate-y-1/2 rounded-full`}
          style={{
            background: "linear-gradient(to bottom, #e8e8e8, #d0d0d0)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6)",
          }}
        />
      </div>

      {/* Floating shadow */}
      <div
        className={`${s.shadow} -mt-1 rounded-full blur-xl`}
        style={{
          background: "radial-gradient(ellipse, rgba(0,0,0,0.12) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
