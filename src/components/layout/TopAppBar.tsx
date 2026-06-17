"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { REGIONS } from "@/data/mock-home";
import type { RegionCode } from "@/types/activity";

export function TopAppBar() {
  const router = useRouter();
  const [region, setRegion] = useState<RegionCode>("제주");
  const [open, setOpen] = useState(false);

  const selectRegion = (next: RegionCode) => {
    setRegion(next);
    setOpen(false);
    router.push(`/explore?region=${encodeURIComponent(next)}`);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/20 shadow-sm">
      <div className="flex items-center justify-between px-container-margin h-16 w-full max-w-7xl mx-auto">
        <div className="relative">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-1 group -ml-2 px-2 py-1 rounded-full hover:bg-surface-container-high transition-colors"
          >
            <span className="text-headline-lg-mobile md:text-headline-lg text-on-surface group-hover:text-coral transition-colors">
              {region}
            </span>
            <ChevronDownIcon className="size-5 text-outline group-hover:text-coral transition-colors" />
          </button>

          {open && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-surface rounded-xl shadow-xl border border-outline-variant/20 z-[60] max-h-64 overflow-y-auto p-2">
              <div className="grid grid-cols-2 gap-1">
                {REGIONS.map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => selectRegion(r)}
                    className={`px-3 py-2 text-left text-body-md rounded-lg ${
                      r === region ? "bg-coral/10 text-coral font-semibold" : "hover:bg-surface-container-low"
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="absolute left-1/2 -translate-x-1/2">
          <span className="text-coral text-[24px] font-extrabold tracking-tight">
            로이브
          </span>
        </div>

        <Link
          href="/search"
          aria-label="검색"
          className="text-on-surface-variant hover:text-on-surface active:scale-95 transition w-10 h-10 flex items-center justify-center -mr-2 rounded-full hover:bg-surface-container-high"
        >
          <MagnifyingGlassIcon className="size-6" />
        </Link>
      </div>
    </header>
  );
}
