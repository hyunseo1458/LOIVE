"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeftIcon, MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { POPULAR_ACTIVITIES } from "@/data/mock-home";
import { ActivityListCard } from "@/components/explore/ActivityListCard";

const POPULAR_KEYWORDS = ["제주", "서핑", "카약", "스노클링", "부산", "제주 해안"];

function searchActivities(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return POPULAR_ACTIVITIES.filter((a) =>
    [a.name, a.location, a.category ?? "", a.region ?? ""].some((field) => field.toLowerCase().includes(q)),
  );
}

function KeywordChips({ onSelect }: { onSelect: (keyword: string) => void }) {
  return (
    <div className="flex flex-wrap gap-sm">
      {POPULAR_KEYWORDS.map((keyword) => (
        <button
          key={keyword}
          type="button"
          onClick={() => onSelect(keyword)}
          className="px-md py-xs rounded-full bg-surface-container-low text-body-md text-on-surface border border-outline-variant/30 hover:bg-coral/10 hover:text-coral hover:border-coral/30 transition-colors"
        >
          {keyword}
        </button>
      ))}
    </div>
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
          <Link href="/" aria-label="뒤로 가기" className="text-on-surface flex items-center justify-center w-10 h-10 -ml-2 shrink-0">
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
              className="w-full h-11 pl-10 pr-9 rounded-full bg-surface-container-low text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-coral/30"
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
          <div className="py-lg flex flex-col gap-md">
            <p className="text-label-md text-outline">인기 검색어</p>
            <KeywordChips onSelect={setQuery} />
          </div>
        )}

        {hasQuery && results.length === 0 && (
          <div className="py-xl flex flex-col items-center gap-md text-center">
            <p className="text-body-md text-outline">
              &ldquo;{query}&rdquo;에 대한 검색 결과가 없습니다.
            </p>
            <p className="text-label-md text-outline-variant">다른 키워드로 시도해보세요</p>
            <KeywordChips onSelect={setQuery} />
          </div>
        )}

        {hasQuery && results.length > 0 && (
          <>
            <p className="text-label-md text-outline">검색 결과 {results.length}건</p>
            <div className="grid grid-cols-2 gap-3">
              {results.map((activity) => (
                <ActivityListCard key={activity.id} activity={activity} />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
