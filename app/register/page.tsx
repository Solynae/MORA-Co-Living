"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function RegisterPage() {
  const router = useRouter();

  const handleRegister = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/login");
  };

  return (
    <main className="page-enter flex min-h-dvh flex-col justify-center bg-white px-6">
      <Card className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight text-[#1F2937]">Kayit Ol</h1>
          <p className="text-sm text-[#6B7280]">MORA topluluguna katilmak icin temel bilgileri doldur.</p>
        </div>

        <form className="space-y-3" onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Ad Soyad"
            className="w-full rounded-[32px] border border-gray-100 px-5 py-4 text-sm outline-none transition focus:border-green-300"
          />
          <input
            type="email"
            placeholder="E-posta"
            className="w-full rounded-[32px] border border-gray-100 px-5 py-4 text-sm outline-none transition focus:border-green-300"
          />
          <input
            type="password"
            placeholder="Sifre"
            className="w-full rounded-[32px] border border-gray-100 px-5 py-4 text-sm outline-none transition focus:border-green-300"
          />
          <Button type="submit">Hesap Olustur</Button>
        </form>

        <p className="text-center text-sm text-[#6B7280]">
          Zaten hesabin var mi?{" "}
          <Link href="/login" className="font-medium text-[#22C55E]">
            Giris Yap
          </Link>
        </p>
      </Card>
    </main>
  );
}
