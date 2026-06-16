import { StarIcon } from "@heroicons/react/24/solid";
import type { RatingBreakdown } from "@/types/activity";

export function RatingSummaryCard({ breakdown }: { breakdown: RatingBreakdown }) {
  return (
    <section className="bg-surface-container-lowest rounded-[20px] p-6 mb-xl border border-outline-variant/20 shadow-[0px_4px_12px_rgba(0,122,255,0.08)]">
      <div className="flex items-center gap-8">
        <div className="flex flex-col items-center text-center shrink-0">
          <span className="text-[48px] font-extrabold text-ocean-blue leading-tight">{breakdown.average}</span>
          <div className="flex gap-0.5 my-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} className="size-4 text-sun-yellow" />
            ))}
          </div>
          <span className="text-label-md text-outline whitespace-nowrap">총 {breakdown.total}개의 리뷰</span>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          {breakdown.counts.map((row) => (
            <div key={row.stars} className="flex items-center gap-3">
              <span className="text-label-md w-4">{row.stars}</span>
              <div className="flex-1 h-2 bg-surface-variant rounded-full overflow-hidden">
                <div className="h-full bg-ocean-blue" style={{ width: `${row.percent}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
