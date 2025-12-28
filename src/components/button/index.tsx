import { ReactNode } from "react";
import cn from "classnames";

interface ButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  icon?: ReactNode;
}

export function PrimaryButton({ label, icon, href }: ButtonProps) {
  return href ? (
    <a className={cn(
      "flex justify-center items-center gap-2 text-sm px-3 py-2 cursor-pointer",
      "bg-zinc-50 rounded-lg"
    )}
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {icon}
      {label}
    </a>
  ) : (
    <button className={cn(
      "flex justify-center items-center gap-2 text-sm px-3 py-2 cursor-pointer",
      "text-zinc-950 hover:text-zinc-700",
      "bg-zinc-50 rounded-lg"
    )}
    >
      {icon}
      {label}
    </button>
  )
}

export function SecondaryButton({ label, icon, href, onClick }: ButtonProps) {
  return href ? (
    <a 
      href={href} 
      className="flex justify-center items-center gap-2 text-sm px-3 py-2 cursor-pointer text-zinc-50 hover:text-zinc-300"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {icon}
      {label}
    </a>
  ) : (
    <button
      onClick={onClick}
      className="flex justify-center items-center gap-2 text-sm px-3 py-2 cursor-pointer text-zinc-50 hover:text-zinc-300"
    >
      {icon}
      {label}
    </button>
  )
}

// Theme toggle button component
interface ThemeToggleButtonProps {
  onClick?: () => void;
}

export function ThemeToggleButton({ onClick }: ThemeToggleButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex justify-center items-center gap-2 text-sm px-3 py-2 cursor-pointer text-zinc-50 hover:text-zinc-300"
      aria-label="Toggle theme"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-sun-moon"
      >
        <path d="M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.9 4.9 1.4 1.4" />
        <path d="m17.7 17.7 1.4 1.4" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.3 17.7-1.4 1.4" />
        <path d="m19.1 6.9-1.4 1.4" />
      </svg>
    </button>
  );
}