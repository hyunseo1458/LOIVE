"use client";

import { useState } from "react";
import { CATEGORIES } from "@/data/mock-home";

export function CategoryTabs() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("전체");

  return (
    <div className="px-container-margin md:px-0 mb-lg overflow-x-auto no-scrollbar">
      <div className="flex gap-sm">
        {CATEGORIES.map((category) => {
          const isActive = category === active;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={`px-md py-xs rounded-full text-label-md whitespace-nowrap transition-all active:scale-95 ${
                isActive
                  ? "bg-ocean-blue text-on-primary shadow-[0px_4px_12px_rgba(0,122,255,0.2)]"
                  : "bg-surface text-outline border border-outline-variant/30 hover:bg-surface-container-low hover:text-ocean-blue"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}
