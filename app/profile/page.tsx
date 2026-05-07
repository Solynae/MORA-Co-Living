"use client";

import { currentUser } from "@/lib/mock/data";
import { Card } from "@/components/ui/Card";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";

const verificationItems = [
  { label: "ID Verified", status: "✔" },
  { label: "Phone Verified", status: "✔" },
  { label: "University Verified", status: "⏳" },
];

export default function ProfilePage() {
  const router = useRouter();

  const handleLogout = () => {
    document.cookie = "mora_auth=; path=/; max-age=0; samesite=lax";
    router.push("/login");
  };

  return (
    <main className="page-enter min-h-dvh bg-white px-5 pb-28 pt-6">
      <header className="mb-5 text-center">
        <div className="mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-[#22C55E] text-2xl font-semibold text-white">
          {currentUser.name[0]}
        </div>
        <h1 className="text-[28px] font-semibold tracking-tight text-[#0F172A]">{currentUser.name}</h1>
        <p className="text-sm text-[#64748B]">{currentUser.level}</p>
        <div className="mx-auto mt-2 inline-flex items-center gap-2 rounded-full border border-[#F1F5F9] px-3 py-1 text-xs text-[#64748B]">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-[#DCFCE7] text-[#22C55E]">
            {currentUser.trustScore}
          </span>
          Trust Score
        </div>
      </header>

      <Card className="mb-4">
        <h2 className="mb-3 text-[20px] font-medium text-[#0F172A]">Trust Breakdown</h2>
        <div className="space-y-3">
          {currentUser.trustBreakdown.map((item) => (
            <div key={item.label} className="space-y-1">
              <div className="flex justify-between text-sm">
                <p className="text-[#0F172A]">{item.label}</p>
                <p className="text-[#22C55E]">{item.score}</p>
              </div>
              <div className="h-2 rounded-full bg-[#F1F5F9]">
                <div
                  className={`h-2 rounded-full ${
                    item.score > 85 ? "w-10/12" : item.score > 70 ? "w-8/12" : item.score > 60 ? "w-7/12" : "w-6/12"
                  } bg-gradient-to-r from-[#86EFAC] to-[#22C55E]`}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="mb-4">
        <h2 className="mb-3 text-[20px] font-medium text-[#0F172A]">Verification</h2>
        <div className="space-y-2">
          {verificationItems.map((item) => (
            <div key={item.label} className="flex items-center justify-between rounded-[20px] border border-[#F1F5F9] px-4 py-3">
              <p className="text-sm text-[#0F172A]">{item.label}</p>
              <span className="text-sm text-[#64748B]">{item.status}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h2 className="mb-3 text-[20px] font-medium text-[#0F172A]">Activity Summary</h2>
        <div className="space-y-2 text-sm text-[#64748B]">
          <p>12 successful payments</p>
          <p>4 shared expenses</p>
          <p>3 listings joined</p>
        </div>
      </Card>

      <div className="mt-4">
        <Button variant="ghost" className="border-[#F1F5F9] text-[#0F172A]" onClick={handleLogout}>
          Cikis Yap
        </Button>
      </div>
    </main>
  );
}
