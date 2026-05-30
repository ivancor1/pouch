import { WaveLogo } from "./icons";

const links = [
  { label: "Ingredients", href: "#ingredients" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "mailto:hello@eigenpouch.com" },
  { label: "Privacy", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-100 py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <WaveLogo className="w-5 h-3.5 text-zinc-900" />
              <span className="font-medium tracking-[0.28em] text-zinc-900 text-sm">EIGEN</span>
            </div>
            <p className="text-zinc-400 text-xs tracking-wide">One pouch. One work block.</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-7 gap-y-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-zinc-400 text-xs hover:text-zinc-700 transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-zinc-50 pt-8 space-y-3">
          <p className="text-zinc-300 text-xs leading-relaxed max-w-2xl">
            EIGEN is not a medical product. These statements have not been evaluated by the Food
            and Drug Administration. This product is not intended to diagnose, treat, cure, or
            prevent any disease. Keep out of reach of children. Consult a healthcare professional
            before use if you are pregnant, nursing, or have a medical condition.
          </p>
          <p className="text-zinc-300 text-xs">© 2025 EIGEN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
