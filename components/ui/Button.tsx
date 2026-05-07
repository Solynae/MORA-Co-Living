import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "ghost";
};

export function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  const variants = {
    primary:
      "bg-[#22C55E] text-white shadow-[0_10px_24px_rgba(34,197,94,0.22)] hover:brightness-95",
    ghost: "bg-white text-[#1F2937] border border-gray-100 hover:bg-gray-50",
  };

  return (
    <button
      className={`inline-flex w-full items-center justify-center rounded-[28px] px-5 py-4 text-sm font-semibold transition duration-150 active:scale-95 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
