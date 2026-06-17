"use client";

import { useState } from "react";
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
      <CategoryTabs active={category} onChange={setCategory} />
      <HeroBannerSlider />
      <PopularActivitiesSection activities={filtered} />
      <ThemedCoursesSection />
    </>
  );
}
