export const WaveLogo = ({ className = "w-8 h-6" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 40 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 5 C8 1,14 1,20 5 C26 9,32 9,38 5"
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
    />
    <path
      d="M2 13 C8 9,14 9,20 13 C26 17,32 17,38 13"
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
    />
    <path
      d="M2 21 C8 17,14 17,20 21 C26 25,32 25,38 21"
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
    />
  </svg>
);

export const CheckIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

export const XIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const ChevronDown = ({ open, className = "" }: { open: boolean; className?: string }) => (
  <svg
    className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""} ${className}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);
