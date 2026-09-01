const common = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.3,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function YantraIcon() {
  return (
    <svg className="r-icon" viewBox="0 0 40 40" {...common}>
      <polygon points="20,6 34,30 6,30" />
      <polygon points="20,34 6,10 34,10" />
      <circle cx="20" cy="20" r="16" strokeOpacity="0.5" />
    </svg>
  );
}

export function CrystalIcon() {
  return (
    <svg className="r-icon" viewBox="0 0 40 40" {...common}>
      <polygon points="20,4 30,14 25,36 15,36 10,14" />
      <line x1="10" y1="14" x2="30" y2="14" />
      <line x1="15" y1="36" x2="20" y2="4" />
      <line x1="25" y1="36" x2="20" y2="4" />
    </svg>
  );
}

export function SwitchWordIcon() {
  return (
    <svg className="r-icon" viewBox="0 0 40 40" {...common}>
      <rect x="6" y="12" width="28" height="16" rx="1" />
      <line x1="11" y1="18" x2="17" y2="18" />
      <line x1="20" y1="18" x2="29" y2="18" />
      <line x1="11" y1="22" x2="23" y2="22" />
    </svg>
  );
}

export function SaltIcon() {
  return (
    <svg className="r-icon" viewBox="0 0 40 40" {...common}>
      <path d="M13 8h14l3 22a3 3 0 0 1-3 4H13a3 3 0 0 1-3-4z" />
      <line x1="12.5" y1="16" x2="27.5" y2="16" />
      <circle cx="17" cy="22" r="0.8" fill="currentColor" />
      <circle cx="22" cy="24" r="0.8" fill="currentColor" />
      <circle cx="19" cy="27" r="0.8" fill="currentColor" />
    </svg>
  );
}

export function BayLeafIcon() {
  return (
    <svg className="r-icon" viewBox="0 0 40 40" {...common}>
      <path d="M8 30C8 16 22 8 32 8 32 22 20 32 8 30Z" />
      <line x1="9" y1="29" x2="29" y2="9" />
    </svg>
  );
}
