"use client";

import { useMemo, useState } from "react";
import type { Review, RatingBreakdown } from "@/types/activity";
import { RatingSummaryCard } from "./RatingSummaryCard";
import { ReviewCard } from "./ReviewCard";

const FILTERS = ["전체", "포토 후기", "5점", "4점", "3점 이하"] as const;
type Filter = (typeof FILTERS)[number];

function filterReviews(reviews: Review[], filter: Filter) {
  switch (filter) {
    case "포토 후기":
      return reviews.filter((r) => (r.photos?.length ?? 0) > 0);
    case "5점":
      return reviews.filter((r) => r.rating === 5);
    case "4점":
      return reviews.filter((r) => r.rating === 4);
    case "3점 이하":
      return reviews.filter((r) => r.rating <= 3);
    default:
      return reviews;
  }
}

export function ReviewListView({
  reviews,
  breakdown,
}: {
  reviews: Review[];
  breakdown: RatingBreakdown;
}) {
  const [filter, setFilter] = useState<Filter>("전체");
  const filtered = useMemo(() => filterReviews(reviews, filter), [reviews, filter]);

  return (
    <>
      <RatingSummaryCard breakdown={breakdown} />

      <div className="flex gap-2 mb-xl overflow-x-auto pb-2 no-scrollbar">
        {FILTERS.map((option) => {
          const isActive = option === filter;
          return (
            <button
              key={option}
              type="button"
              onClick={() => setFilter(option)}
              className={`px-5 py-2.5 rounded-full text-label-md whitespace-nowrap transition-colors ${
                isActive
                  ? "bg-ocean-blue text-on-primary"
                  : "bg-ocean-blue/10 text-ocean-blue hover:bg-ocean-blue/20"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>

      <div className="flex flex-col gap-md">
        {filtered.map((review, index) => (
          <ReviewCard key={review.id} review={review} index={index} />
        ))}
      </div>
    </>
  );
}
