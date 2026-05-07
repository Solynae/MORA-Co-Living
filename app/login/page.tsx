"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    document.cookie = "mora_auth=1; path=/; max-age=2592000; samesite=lax";
    router.push("/");
  };

  return (
    <main className="page-enter flex min-h-dvh flex-col justify-center bg-white px-6">
      <Card className="space-y-7">
        <div className="space-y-2 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-[#6B7280]">MORA</p>
          <h1 className="text-3xl font-semibold tracking-tight text-[#1F2937]">Hos Geldin</h1>
          <p className="text-sm text-[#6B7280]">Co-living deneyimine devam etmek icin giris yap.</p>
        </div>

        <form className="space-y-3" onSubmit={handleLogin}>
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
          <Button type="submit">Giris Yap</Button>
        </form>

        <div className="space-y-2 text-center text-sm">
          <p className="text-[#6B7280]">
            Hesabin yok mu?{" "}
            <Link href="/register" className="font-medium text-[#22C55E]">
              Kayit Ol
            </Link>
          </p>
          <Link href="/" className="font-medium text-[#22C55E]">
            Home sayfasina git
          </Link>
        </div>
      </Card>
    </main>
  );
}
