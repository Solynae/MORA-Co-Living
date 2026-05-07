import { Card } from "@/components/ui/Card";
import type { LedgerItem } from "@/lib/mock/data";

type LedgerListProps = {
  items: LedgerItem[];
};

export function LedgerList({ items }: LedgerListProps) {
  return (
    <Card>
      <header className="mb-3 flex items-center justify-between">
        <h2 className="text-base font-semibold tracking-tight text-[#1F2937]">Financial Ledger</h2>
      </header>
      <div className="space-y-3">
        {items.map((item) => (
          <article key={item.id} className="flex items-center justify-between rounded-[24px] border border-gray-50 px-4 py-3">
            <div>
              <p className="text-sm font-medium text-[#1F2937]">{item.title}</p>
              <p className="text-xs text-[#6B7280]">{item.date}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-[#22C55E]">{item.amount}</p>
              <p className={`text-xs font-medium ${item.status === "paid" ? "text-[#22C55E]" : "text-[#6B7280]"}`}>
                {item.status}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Card>
  );
}
