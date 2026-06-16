"use client";

import { useMemo, useState } from "react";
import { XMarkIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { CATEGORIES } from "@/data/mock-home";
import type { Activity, RegionCode } from "@/types/activity";
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

export function ExploreView({
  activities,
  initialRegion,
}: {
  activities: Activity[];
  initialRegion?: RegionCode;
}) {
  const [region, setRegion] = useState<RegionCode | undefined>(initialRegion);
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("전체");
  const [sort, setSort] = useState<SortOption>(SORT_OPTIONS[0]);

  const filtered = useMemo(() => {
    const byRegion = region ? activities.filter((a) => a.region === region) : activities;
    const byCategory = category === "전체" ? byRegion : byRegion.filter((a) => a.category === category);
    return applySort(byCategory, sort);
  }, [activities, region, category, sort]);

  return (
    <>
      {region && (
        <div className="flex items-center gap-1.5 -mt-sm">
          <span className="inline-flex items-center gap-1.5 pl-3 pr-2 py-1.5 rounded-full bg-ocean-blue/10 text-ocean-blue text-label-md">
            <MapPinIcon className="size-3.5" />
            {region} 지역
            <button type="button" aria-label="지역 필터 해제" onClick={() => setRegion(undefined)} className="hover:opacity-70">
              <XMarkIcon className="size-3.5" />
            </button>
          </span>
        </div>
      )}

      <section className="flex flex-col gap-xs">
        <CategoryFilterChips active={category} onChange={setCategory} />
        <SortControl value={sort} onChange={setSort} />
      </section>

      <section className="flex flex-col gap-md">
        {filtered.map((activity) => (
          <ActivityListCard key={activity.id} activity={activity} />
        ))}
        {filtered.length === 0 && (
          <p className="text-body-md text-outline text-center py-xl">
            {region ? `${region} 지역에는 아직 등록된 액티비티가 없습니다.` : "해당 카테고리의 액티비티가 아직 없습니다."}
          </p>
        )}
      </section>
    </>
  );
}
