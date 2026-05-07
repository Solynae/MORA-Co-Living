"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5.5 9.8V21h13V9.8" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

function ProfileIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c1.2-3.4 3.9-5 7-5s5.8 1.6 7 5" />
    </svg>
  );
}

function LedgerIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="6.5" width="17" height="11" rx="2.5" />
      <path d="M15.5 12h5" />
    </svg>
  );
}

const navItems = [
  { href: "/", label: "Home", icon: <HomeIcon /> },
  { href: "/listings", label: "Search", icon: <SearchIcon /> },
  { href: "/ledger", label: "Ledger", icon: <LedgerIcon /> },
  { href: "/profile", label: "Profile", icon: <ProfileIcon /> },
];

export function BottomNavbar() {
  const pathname = usePathname();

  if (pathname === "/login" || pathname === "/register") {
    return null;
  }

  return (
    <nav className="fixed bottom-0 left-1/2 z-50 w-full max-w-[420px] -translate-x-1/2 border-t border-[#F1F5F9] bg-white/85 px-5 py-2 backdrop-blur-md">
      <ul className="flex items-center justify-between">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`inline-flex min-w-14 flex-col items-center justify-center rounded-2xl px-2 py-1 transition duration-150 active:scale-95 ${
                  isActive ? "-translate-y-0.5 text-[#22C55E]" : "text-[#64748B]"
                }`}
                aria-label={item.label}
              >
                {item.icon}
                <span className={`mt-0.5 text-[11px] ${isActive ? "font-medium" : "font-normal"}`}>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
