import { Card } from "@/components/ui/Card";
import { ledgerItems } from "@/lib/mock/data";

export default function LedgerPage() {
  return (
    <main className="page-enter min-h-dvh bg-white px-5 pb-28 pt-6">
      <header className="mb-4">
        <h1 className="text-[28px] font-semibold tracking-tight text-[#0F172A]">Financial Ledger</h1>
      </header>

      <Card className="mb-4">
        <h2 className="mb-3 text-[20px] font-medium text-[#0F172A]">This Month</h2>
        <div className="space-y-2 text-sm text-[#64748B]">
          <p>Total spent: 14.630 TL</p>
          <p>Your share: 7.315 TL</p>
          <p>Pending payments: 930 TL</p>
        </div>
        <div className="mt-3 h-2 rounded-full bg-[#F1F5F9]">
          <div className="h-2 w-8/12 rounded-full bg-[#22C55E]" />
        </div>
      </Card>

      <Card className="mb-4">
        <h2 className="mb-3 text-[20px] font-medium text-[#0F172A]">Activity Feed</h2>
        <div className="space-y-3">
          {ledgerItems.map((item) => (
            <article key={item.id} className="flex items-center gap-3 rounded-[20px] border border-[#F1F5F9] px-4 py-3">
              <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#F8FAFC] text-sm">
                {item.title.includes("Rent") ? "🏠" : item.title.includes("Grocery") ? "🛒" : "💡"}
              </div>
              <div className="flex-1">
                <p className="text-sm text-[#0F172A]">{item.title}</p>
                <p className="text-xs text-[#64748B]">{item.date}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-[#0F172A]">{item.amount}</p>
                <span className={`text-xs ${item.status === "paid" ? "text-[#22C55E]" : "text-yellow-500"}`}>
                  {item.status === "paid" ? "● Paid" : "● Pending"}
                </span>
              </div>
            </article>
          ))}
        </div>
      </Card>

      <Card>
        <p className="text-sm text-[#64748B]">You spent 12% more on groceries this month.</p>
      </Card>
    </main>
  );
}
