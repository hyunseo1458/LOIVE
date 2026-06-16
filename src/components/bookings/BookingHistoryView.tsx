"use client";

import { useState } from "react";
import Link from "next/link";
import type { BookingHistoryItem } from "@/types/booking-history";
import { BookingHistoryCard } from "./BookingHistoryCard";
import { CancelledEmptyState } from "./CancelledEmptyState";

const TABS = [
  { key: "upcoming", label: "예약 확정" },
  { key: "completed", label: "이용 완료" },
  { key: "cancelled", label: "취소 내역" },
] as const;
type TabKey = (typeof TABS)[number]["key"];

export function BookingHistoryView({ items }: { items: BookingHistoryItem[] }) {
  const [activeTab, setActiveTab] = useState<TabKey>("upcoming");
  const filtered = items.filter((item) => item.status === activeTab);

  return (
    <section className="mb-lg">
      <h2 className="text-headline-lg-mobile text-on-surface mb-md">예약 내역</h2>

      <div className="flex items-center border-b border-outline-variant/20 mb-md overflow-x-auto whitespace-nowrap">
        {TABS.map((tab) => {
          const isActive = tab.key === activeTab;
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              className={`text-label-md px-4 py-3 transition-all border-b-2 ${
                isActive ? "text-primary border-primary" : "text-on-surface-variant border-transparent"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {activeTab === "cancelled" ? (
        <CancelledEmptyState />
      ) : (
        <div className="flex flex-col gap-md">
          {filtered.map((item) => (
            <BookingHistoryCard
              key={item.id}
              item={item}
              action={
                item.status === "upcoming" ? (
                  <button
                    type="button"
                    className="w-full py-2.5 px-md rounded-xl border border-coral text-coral text-label-md hover:bg-coral/5 transition-all active:scale-95"
                  >
                    예약 취소
                  </button>
                ) : (
                  <Link
                    href={`/activities/${item.productId}/review`}
                    className="w-full py-2.5 px-md rounded-xl bg-coral text-on-primary text-label-md hover:opacity-90 transition-all active:scale-95 shadow-md text-center block"
                  >
                    후기 작성
                  </Link>
                )
              }
            />
          ))}
        </div>
      )}
    </section>
  );
}
