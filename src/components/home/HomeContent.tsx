"use client";

import { useState } from "react";
import Link from "next/link";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { CATEGORIES, POPULAR_ACTIVITIES } from "@/data/mock-home";
import { CategoryTabs } from "./CategoryTabs";
import { HeroBannerSlider } from "./HeroBannerSlider";
import { PopularActivitiesSection } from "./PopularActivitiesSection";
import { ThemedCoursesSection } from "./ThemedCoursesSection";

export function HomeContent() {
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("전체");
  const filtered =
    category === "전체"
      ? POPULAR_ACTIVITIES
      : POPULAR_ACTIVITIES.filter((a) => a.category === category);

  return (
    <>
      <div className="px-container-margin mb-4">
        <Link
          href="/search"
          className="flex items-center gap-3 w-full h-12 px-4 rounded-2xl bg-surface-container-low border border-outline-variant/20 text-outline hover:border-outline-variant/50 transition-colors"
        >
          <MagnifyingGlassIcon className="size-5 shrink-0" />
          <span className="text-[14px]">어디서 무엇을 하고 싶으세요?</span>
        </Link>
      </div>
      <HeroBannerSlider />
      <CategoryTabs active={category} onChange={setCategory} />
      <PopularActivitiesSection activities={filtered} />
      <ThemedCoursesSection />
    </>
  );
}
