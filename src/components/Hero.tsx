import Image from "next/image";
import { existsSync } from "fs";
import path from "path";
import ProductCan from "./ProductCan";

const hasProductImage = existsSync(
  path.join(process.cwd(), "public", "eigen-can.png")
) || existsSync(
  path.join(process.cwd(), "public", "eigen-can.jpg")
) || existsSync(
  path.join(process.cwd(), "public", "eigen-can.webp")
);

function getImageSrc() {
  if (existsSync(path.join(process.cwd(), "public", "eigen-can.png"))) return "/eigen-can.png";
  if (existsSync(path.join(process.cwd(), "public", "eigen-can.jpg"))) return "/eigen-can.jpg";
  if (existsSync(path.join(process.cwd(), "public", "eigen-can.webp"))) return "/eigen-can.webp";
  return null;
}

const imageSrc = getImageSrc();

export default function Hero() {
  return (
    <section className="min-h-screen pt-16 flex items-center overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-24 w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Copy */}
        <div className="space-y-8">
          <div className="space-y-5">
            <p className="text-zinc-400 tracking-[0.22em] text-xs font-medium uppercase">
              Nicotine-free &middot; Sugar-free
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-[4.25rem] font-light text-zinc-900 leading-[1.04] tracking-tight">
              One pouch.
              <br />
              One work block.
            </h1>
            <p className="text-lg text-zinc-500 font-light leading-relaxed max-w-md">
              Nicotine-free focus pouches for studying, coding, writing, and building.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="#buy"
              className="bg-zinc-900 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-zinc-700 transition-all duration-150 hover:scale-[1.02] active:scale-[0.98]"
            >
              Buy EIGEN
            </a>
            <a
              href="#how-it-works"
              className="text-zinc-500 text-sm font-medium hover:text-zinc-900 transition-colors duration-150 flex items-center gap-1.5 group"
            >
              See how it works
              <span className="inline-block group-hover:translate-x-0.5 transition-transform duration-150">
                →
              </span>
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-1">
            {["No nicotine", "No sugar", "No drink required"].map((label) => (
              <div key={label} className="flex items-center gap-2 text-zinc-400 text-xs">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Product visual */}
        <div className="flex justify-center lg:justify-end">
          {imageSrc ? (
            <div className="relative">
              <Image
                src={imageSrc}
                alt="EIGEN Focus Pouches"
                width={520}
                height={520}
                priority
                className="object-contain drop-shadow-2xl"
                style={{ filter: "drop-shadow(0 30px 50px rgba(0,0,0,0.10))" }}
              />
            </div>
          ) : (
            <div className="relative">
              <div
                className="absolute inset-0 -m-20 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(0,0,0,0.015) 0%, transparent 70%)",
                }}
              />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-72 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
              <ProductCan size="xl" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
