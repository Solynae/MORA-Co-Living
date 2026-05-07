import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { currentUser, recentActivity } from "@/lib/mock/data";

const quickActions = ["Add Expense", "Join Listing", "View Ledger", "Invite Roommate"];

export default function HomePage() {
  return (
    <main className="page-enter min-h-dvh bg-white px-5 pb-28 pt-6">
      <header className="mb-5 flex items-center justify-between">
        <p className="text-sm font-semibold tracking-tight text-[#0F172A]">MORA</p>
        <button className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#F1F5F9] text-[#64748B] transition duration-150 active:scale-95">
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#22C55E]" />
          <span aria-hidden>🔔</span>
        </button>
      </header>

      <Card className="mb-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[28px] font-semibold leading-none tracking-tight text-[#22C55E]">{currentUser.trustScore}</p>
            <p className="mt-2 text-xs font-light text-[#64748B]">Your Living Trust Score</p>
          </div>
          <div className="relative flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#E2F8EA]">
            <div className="absolute inset-1 rounded-full border-2 border-[#22C55E]" />
            <span className="text-xs font-medium text-[#0F172A]">{currentUser.trustScore}</span>
          </div>
        </div>
        <div className="mt-4 flex gap-3 text-[12px] font-light text-[#64748B]">
          <p>Payments: +12</p>
          <p>Cleanliness: +8</p>
          <p>Community: +5</p>
        </div>
      </Card>

      <section className="mb-4 grid grid-cols-2 gap-3">
        {quickActions.map((action) => (
          <Link
            key={action}
            href={action === "View Ledger" ? "/ledger" : "/listings"}
            className="rounded-[24px] border border-[#F1F5F9] bg-white p-4 text-sm font-medium text-[#0F172A] shadow-[0_6px_20px_rgba(15,23,42,0.04)] transition duration-150 hover:-translate-y-0.5 active:scale-[0.98]"
          >
            <p className="mb-2 text-lg">✦</p>
            {action}
          </Link>
        ))}
      </section>

      <Card>
        <h2 className="mb-3 text-[20px] font-medium tracking-tight text-[#0F172A]">Recent Activity</h2>
        <div className="space-y-3">
          {recentActivity.map((item) => (
            <article key={item.id} className="flex items-start gap-3">
              <div className="flex flex-col items-center">
                <span className={`h-2.5 w-2.5 rounded-full ${item.statusColor === "green" ? "bg-[#22C55E]" : "bg-yellow-400"}`} />
                <span className="mt-1 h-7 w-px bg-[#E2E8F0]" />
              </div>
              <div className="flex w-full items-center justify-between">
                <p className="text-sm text-[#0F172A]">{item.title}</p>
                <p className="text-sm font-medium text-[#22C55E]">{item.amount}</p>
              </div>
            </article>
          ))}
        </div>
      </Card>
    </main>
  );
}