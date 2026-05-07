import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return <section className={`rounded-[28px] border border-[#F1F5F9] bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.04)] ${className}`}>{children}</section>;
}
