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

  const handleCancel = () => {
    if (window.confirm("예약을 취소하시겠습니까?\n취소 후에는 복구가 어렵습니다.")) {
      // TODO: Supabase 연동 후 실제 취소 API 호출로 교체
      alert("취소 신청이 접수되었습니다. 영업일 기준 1-3일 내 처리됩니다.");
    }
  };

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
                    onClick={handleCancel}
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
