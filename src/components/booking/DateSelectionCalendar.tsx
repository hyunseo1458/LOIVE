"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import type { CalendarDay } from "@/types/booking";

const WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"];

export function DateSelectionCalendar({
  monthLabel,
  days,
  selectedDay,
  onSelect,
}: {
  monthLabel: string;
  days: CalendarDay[];
  selectedDay: number | null;
  onSelect: (day: number) => void;
}) {
  return (
    <section className="bg-surface-container-lowest rounded-[20px] p-lg shadow-[0px_4px_12px_rgba(0,122,255,0.08)]">
      <h3 className="text-title-lg text-on-surface mb-lg">날짜 선택</h3>
      <div className="flex flex-col gap-md">
        <div className="flex items-center justify-between mb-sm">
          <span className="font-semibold text-on-surface">{monthLabel}</span>
          <div className="flex gap-sm">
            {/* 월 이동은 실데이터 연동 후 구현 예정 */}
            <button type="button" disabled className="text-outline disabled:opacity-40">
              <ChevronLeftIcon className="size-5" />
            </button>
            <button type="button" disabled className="text-outline disabled:opacity-40">
              <ChevronRightIcon className="size-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-1 text-center">
          {WEEKDAYS.map((weekday) => (
            <div key={weekday} className="text-label-md text-outline py-1">
              {weekday}
            </div>
          ))}

          {days.map((d) => {
            if (d.status === "past") {
              return (
                <div key={d.day} className="py-2 text-outline opacity-30">
                  {d.day}
                </div>
              );
            }

            if (d.status === "soldout") {
              return (
                <div key={d.day} className="py-2 text-outline line-through">
                  <div className="font-medium">{d.day}</div>
                  <div className="text-[8px]">마감</div>
                </div>
              );
            }

            const isSelected = d.day === selectedDay;

            return (
              <button
                key={d.day}
                type="button"
                onClick={() => onSelect(d.day)}
                className={`py-2 rounded-lg transition-colors ${
                  isSelected
                    ? "bg-ocean-blue text-on-primary shadow-sm"
                    : "text-on-surface hover:bg-surface-container"
                }`}
              >
                <div className="font-medium">{d.day}</div>
                <div className={`text-[8px] ${isSelected ? "opacity-80" : "text-ocean-blue"}`}>
                  {isSelected ? "선택됨" : `잔여 ${d.remaining}석`}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
