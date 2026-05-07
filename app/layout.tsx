import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BottomNavbar } from "@/components/navigation/BottomNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MORA",
  description: "Modern Co-Living Orchestration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <div className="mx-auto flex min-h-dvh w-full max-w-[420px] flex-col bg-white">
          {children}
          <BottomNavbar />
        </div>
      </body>
    </html>
  );
}