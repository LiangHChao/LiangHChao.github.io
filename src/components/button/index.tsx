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
      "text-zinc-950 hover:text-zinc-700",
      "bg-zinc-50 rounded-lg"
    )}
      href={href}
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
    <a href={href} className="flex justify-center items-center gap-2 text-sm px-3 py-2 cursor-pointer text-zinc-50 hover:text-zinc-300">
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