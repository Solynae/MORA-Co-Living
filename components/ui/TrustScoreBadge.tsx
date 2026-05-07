type TrustScoreBadgeProps = {
  score: number;
  compact?: boolean;
};

export function TrustScoreBadge({ score, compact = false }: TrustScoreBadgeProps) {
  return (
    <div
      className={`inline-flex items-center rounded-full border border-green-100 bg-green-50 text-[#22C55E] ${
        compact ? "px-2.5 py-1 text-xs font-semibold" : "px-3 py-1.5 text-sm font-semibold"
      }`}
    >
      Trust {score}
    </div>
  );
}
