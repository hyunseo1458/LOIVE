"use client";

import { useMemo, useState } from "react";
import { BarsArrowDownIcon } from "@heroicons/react/24/outline";
import type { Review } from "@/types/activity";
import { ReviewCard } from "./ReviewCard";

const SORT_OPTIONS = ["추천순", "최신순", "별점 높은 순", "별점 낮은 순"] as const;
type SortOption = (typeof SORT_OPTIONS)[number];

function parseKoreanDate(date: string) {
  const match = date.match(/(\d+)년 (\d+)월 (\d+)일/);
  if (!match) return 0;
  const [, year, month, day] = match;
  return new Date(Number(year), Number(month) - 1, Number(day)).getTime();
}

function sortReviews(reviews: Review[], sort: SortOption) {
  const sorted = [...reviews];
  switch (sort) {
    case "최신순":
      return sorted.sort((a, b) => parseKoreanDate(b.date) - parseKoreanDate(a.date));
    case "별점 높은 순":
      return sorted.sort((a, b) => b.rating - a.rating);
    case "별점 낮은 순":
      return sorted.sort((a, b) => a.rating - b.rating);
    default:
      return sorted;
  }
}

export function ReviewsSection({ reviews, reviewCount }: { reviews: Review[]; reviewCount: number }) {
  const [sort, setSort] = useState<SortOption>("추천순");
  const sortedReviews = useMemo(() => sortReviews(reviews, sort), [reviews, sort]);

  return (
    <div className="mb-xl">
      <div className="flex justify-between items-center mb-md">
        <div className="flex items-center gap-2">
          <h2 className="text-title-lg text-on-surface">이용자 후기</h2>
          <span className="bg-surface-variant text-on-surface-variant px-2 py-0.5 rounded-full text-label-md">
            {reviewCount}
          </span>
        </div>
        <div className="flex items-center gap-1 text-on-surface-variant text-body-md">
          <BarsArrowDownIcon className="size-4.5" />
          <span>{sort}</span>
        </div>
      </div>

      <div className="flex gap-2 mb-4 overflow-x-auto no-scrollbar pb-1">
        {SORT_OPTIONS.map((option) => {
          const isActive = option === sort;
          return (
            <button
              key={option}
              type="button"
              onClick={() => setSort(option)}
              className={`px-4 py-1.5 rounded-full border text-label-md whitespace-nowrap transition-colors ${
                isActive
                  ? "border-ocean-blue bg-ocean-blue/10 text-ocean-blue"
                  : "border-outline-variant text-on-surface-variant hover:bg-surface-variant"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>

      <div className="flex flex-col gap-4">
        {sortedReviews.map((review, index) => (
          <ReviewCard key={review.id} review={review} index={index} />
        ))}
      </div>

      <button
        type="button"
        className="w-full mt-4 py-3 border border-outline-variant rounded-full text-on-surface text-title-lg hover:bg-surface-variant transition-colors"
      >
        후기 {reviewCount}개 모두 보기
      </button>
    </div>
  );
}
