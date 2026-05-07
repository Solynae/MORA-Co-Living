import { Card } from "@/components/ui/Card";
import type { Listing } from "@/lib/mock/data";

type ListingCardProps = {
  listing: Listing;
};

export function ListingCard({ listing }: ListingCardProps) {
  return (
    <Card className="space-y-3 rounded-[24px] p-4 transition duration-150 hover:-translate-y-0.5 active:scale-[0.98]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-base font-semibold tracking-tight text-[#0F172A]">{listing.name}</p>
        </div>
        <p className="text-sm font-semibold text-[#22C55E]">{listing.price}</p>
      </div>
      <p className="line-clamp-2 text-sm leading-6 text-[#64748B]">{listing.description}</p>
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#DCFCE7] bg-[#F0FDF4] px-2.5 py-1 text-xs font-medium text-[#22C55E]">
          <span className="inline-block h-5 w-5 rounded-full bg-[#22C55E] text-center text-[10px] leading-5 text-white">
            {listing.trustScore}
          </span>
          Trust
        </div>
        <p className="text-xs text-[#64748B]">{listing.location}</p>
      </div>
    </Card>
  );
}
