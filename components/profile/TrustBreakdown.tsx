import { Card } from "@/components/ui/Card";

type TrustBreakdownItem = {
  label: string;
  score: number;
};

type TrustBreakdownProps = {
  items: TrustBreakdownItem[];
};

export function TrustBreakdown({ items }: TrustBreakdownProps) {
  return (
    <Card>
      <h2 className="mb-4 text-base font-semibold tracking-tight text-[#1F2937]">Trust Breakdown</h2>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.label} className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm text-[#1F2937]">{item.label}</p>
              <p className="text-sm font-semibold text-[#22C55E]">{item.score}</p>
            </div>
            <div className="grid grid-cols-10 gap-1">
              {Array.from({ length: 10 }).map((_, index) => (
                <span
                  key={`${item.label}-${index}`}
                  className={`h-2 rounded-full ${index < Math.round(item.score / 10) ? "bg-[#22C55E]" : "bg-gray-100"}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
