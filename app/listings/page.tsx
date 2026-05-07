import { ListingCard } from "@/components/listings/ListingCard";
import { listings } from "@/lib/mock/data";

const chips = ["Verified", "High Trust", "Budget", "Near Me"];

export default function ListingsPage() {
  return (
    <main className="page-enter min-h-dvh bg-white px-5 pb-28 pt-6">
      <header className="mb-6 text-center">
        <h1 className="text-2xl font-medium tracking-tight text-[#0F172A]">Listings</h1>
      </header>
      <div className="mb-4 rounded-full border border-[#F1F5F9] bg-white/90 px-4 py-3 text-sm text-[#64748B] backdrop-blur">
        Search rooms, cities, roommates...
      </div>
      <section className="mb-6 flex gap-2 overflow-x-auto pb-1">
        {chips.map((chip, index) => (
          <button
            key={chip}
            className={`shrink-0 rounded-full px-3 py-1.5 text-xs transition duration-150 active:scale-[0.98] ${
              index === 0 ? "border border-[#22C55E] bg-[#F0FDF4] text-[#22C55E]" : "border border-[#F1F5F9] text-[#64748B]"
            }`}
          >
            {chip}
          </button>
        ))}
      </section>
      <section className="space-y-4">
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </section>
    </main>
  );
}
