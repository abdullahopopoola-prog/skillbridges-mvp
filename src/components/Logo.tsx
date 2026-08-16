export default function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="SkillBridge logo"
    >
      <defs>
        <linearGradient id="sb-logo-grad" x1="2" y1="4" x2="38" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#8f7dff" />
          <stop offset="1" stopColor="#ff6ec7" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill="url(#sb-logo-grad)" />
      <path
        d="M12 25.5C12 21 15.5 18.5 20 18.5C24.5 18.5 28 21 28 25.5"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="12" cy="25.5" r="2.4" fill="white" />
      <circle cx="28" cy="25.5" r="2.4" fill="white" />
      <circle cx="20" cy="13.5" r="2.6" fill="white" />
    </svg>
  );
}
