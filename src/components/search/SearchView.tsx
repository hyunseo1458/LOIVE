"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeftIcon, MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { POPULAR_ACTIVITIES } from "@/data/mock-home";
import { ActivityListCard } from "@/components/explore/ActivityListCard";

function searchActivities(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return POPULAR_ACTIVITIES.filter((a) =>
    [a.name, a.location, a.category ?? "", a.region ?? ""].some((field) => field.toLowerCase().includes(q)),
  );
}

export function SearchView({ initialQuery = "" }: { initialQuery?: string }) {
  const [query, setQuery] = useState(initialQuery);
  const results = useMemo(() => searchActivities(query), [query]);
  const hasQuery = query.trim().length > 0;

  return (
    <div className="min-h-screen pb-xl">
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/20 shadow-sm">
        <div className="flex items-center gap-2 px-container-margin h-16 max-w-3xl mx-auto">
          <Link href="/" aria-label="뒤로 가기" className="text-ocean-blue flex items-center justify-center w-10 h-10 -ml-2 shrink-0">
            <ArrowLeftIcon className="size-6" />
          </Link>
          <div className="relative flex-1">
            <MagnifyingGlassIcon className="size-5 text-outline absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="지역, 액티비티 이름으로 검색"
              className="w-full h-11 pl-10 pr-9 rounded-full bg-surface-container-low text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-ocean-blue/30"
            />
            {query && (
              <button
                type="button"
                aria-label="검색어 지우기"
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface"
              >
                <XMarkIcon className="size-5" />
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="pt-20 px-container-margin max-w-3xl mx-auto flex flex-col gap-md">
        {!hasQuery && (
          <p className="text-body-md text-outline text-center py-xl">
            지역명(&ldquo;제주&rdquo;), 액티비티 이름(&ldquo;서핑&rdquo;)으로 검색해보세요.
          </p>
        )}

        {hasQuery && results.length === 0 && (
          <p className="text-body-md text-outline text-center py-xl">&ldquo;{query}&rdquo;에 대한 검색 결과가 없습니다.</p>
        )}

        {hasQuery && results.length > 0 && (
          <>
            <p className="text-label-md text-outline">검색 결과 {results.length}건</p>
            {results.map((activity) => (
              <ActivityListCard key={activity.id} activity={activity} />
            ))}
          </>
        )}
      </main>
    </div>
  );
}
