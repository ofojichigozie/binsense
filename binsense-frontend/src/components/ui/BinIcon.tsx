interface BinIconProps {
  size?: number;
  className?: string;
}

const BinIcon = ({ size = 32, className }: BinIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    fill="none"
    width={size}
    height={size}
    className={className}
    aria-hidden="true"
  >
    {/* Handle */}
    <path
      d="M24 13V10a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3"
      stroke="#0284c7"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Lid */}
    <rect x="10" y="13" width="44" height="8" rx="4" fill="#0ea5e9" />
    {/* Body */}
    <path d="M15 21h34l-3 30a3 3 0 0 1-3 3H21a3 3 0 0 1-3-3L15 21z" fill="#0ea5e9" />
    {/* Vertical ribbing */}
    <line
      x1="24"
      y1="27"
      x2="23"
      y2="49"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      opacity="0.45"
    />
    <line
      x1="32"
      y1="27"
      x2="32"
      y2="49"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      opacity="0.45"
    />
    <line
      x1="40"
      y1="27"
      x2="41"
      y2="49"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      opacity="0.45"
    />
  </svg>
);

export default BinIcon;
