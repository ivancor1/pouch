import { CheckIcon, XIcon } from "./icons";

const features = [
  "No nicotine",
  "No sugar",
  "No drink required",
  "Mess-free",
  "Designed for work sessions",
  "No jittery edge",
];

type TriBool = true | false | null;

const products: { name: string; values: TriBool[]; highlight?: boolean }[] = [
  { name: "EIGEN", values: [true, true, true, true, true, true], highlight: true },
  { name: "Coffee", values: [true, false, false, false, false, false] },
  { name: "Energy drink", values: [true, false, false, true, false, false] },
  { name: "Nicotine pouch", values: [false, true, true, true, false, null] },
  { name: "Generic caffeine", values: [true, true, true, true, false, null] },
];

function Cell({ val, highlight }: { val: TriBool; highlight?: boolean }) {
  if (val === null) {
    return <span className="text-zinc-300 text-sm">N/A</span>;
  }
  if (val === true) {
    return (
      <span
        className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${
          highlight ? "bg-zinc-900 text-white" : "text-zinc-400"
        }`}
      >
        <CheckIcon />
      </span>
    );
  }
  return (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full text-zinc-200">
      <XIcon />
    </span>
  );
}

export default function Comparison() {
  return (
    <section className="py-24 bg-zinc-50/60">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-14">
          <p className="text-zinc-400 tracking-[0.22em] text-xs font-medium uppercase mb-4">
            Why EIGEN
          </p>
          <h2 className="text-4xl font-light text-zinc-900 leading-snug tracking-tight">
            Designed for work, not caffeine delivery.
          </h2>
          <p className="text-zinc-500 font-light mt-4 text-sm leading-relaxed max-w-sm">
            Most focus products are built for athletes or gamers. EIGEN is built for people with
            deadlines.
          </p>
        </div>

        <div className="overflow-x-auto -mx-6 px-6">
          <div className="min-w-[560px]">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left pb-6 text-sm text-zinc-400 font-normal w-44" />
                  {products.map((p, i) => (
                    <th
                      key={i}
                      className="pb-6 text-center"
                    >
                      {p.highlight ? (
                        <span className="inline-block bg-zinc-900 text-white px-4 py-1.5 rounded-full text-xs font-medium tracking-wide">
                          {p.name}
                        </span>
                      ) : (
                        <span className="text-xs text-zinc-400 font-normal">{p.name}</span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feat, fi) => (
                  <tr key={fi} className="border-t border-zinc-100">
                    <td className="py-4 text-sm text-zinc-600 font-light pr-6">{feat}</td>
                    {products.map((p, pi) => (
                      <td
                        key={pi}
                        className={`py-4 text-center ${
                          p.highlight ? "bg-zinc-50" : ""
                        } ${
                          p.highlight && fi === 0 ? "rounded-t-xl" : ""
                        } ${
                          p.highlight && fi === features.length - 1 ? "rounded-b-xl" : ""
                        }`}
                      >
                        <Cell val={p.values[fi]} highlight={p.highlight} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
