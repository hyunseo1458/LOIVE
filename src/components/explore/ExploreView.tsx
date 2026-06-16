"use client";

import { useMemo, useState } from "react";
import { CATEGORIES } from "@/data/mock-home";
import type { Activity } from "@/types/activity";
import { CategoryFilterChips } from "./CategoryFilterChips";
import { SortControl, SORT_OPTIONS, type SortOption } from "./SortControl";
import { ActivityListCard } from "./ActivityListCard";

function applySort(activities: Activity[], sort: SortOption) {
  const sorted = [...activities];
  switch (sort) {
    case "평점 높은순":
      return sorted.sort((a, b) => b.rating - a.rating);
    case "가격 낮은순":
      return sorted.sort((a, b) => a.price - b.price);
    case "가격 높은순":
      return sorted.sort((a, b) => b.price - a.price);
    default:
      return sorted;
  }
}

export function ExploreView({ activities }: { activities: Activity[] }) {
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("전체");
  const [sort, setSort] = useState<SortOption>(SORT_OPTIONS[0]);

  const filtered = useMemo(() => {
    const byCategory = category === "전체" ? activities : activities.filter((a) => a.category === category);
    return applySort(byCategory, sort);
  }, [activities, category, sort]);

  return (
    <>
      <section className="flex flex-col gap-xs">
        <CategoryFilterChips active={category} onChange={setCategory} />
        <SortControl value={sort} onChange={setSort} />
      </section>

      <section className="flex flex-col gap-md">
        {filtered.map((activity) => (
          <ActivityListCard key={activity.id} activity={activity} />
        ))}
        {filtered.length === 0 && (
          <p className="text-body-md text-outline text-center py-xl">해당 카테고리의 액티비티가 아직 없습니다.</p>
        )}
      </section>
    </>
  );
}
