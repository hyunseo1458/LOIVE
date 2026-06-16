import type { ReactNode } from "react";
import Image from "next/image";
import { CalendarIcon, CalendarDaysIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import type { BookingHistoryItem } from "@/types/booking-history";

const STATUS_BADGE: Record<BookingHistoryItem["status"], { label: string; className: string }> = {
  upcoming: { label: "예약 확정", className: "bg-primary text-on-primary" },
  completed: { label: "이용 완료", className: "bg-success-green text-on-primary" },
};

export function BookingHistoryCard({
  item,
  action,
}: {
  item: BookingHistoryItem;
  action: ReactNode;
}) {
  const badge = STATUS_BADGE[item.status];

  return (
    <div className="bg-surface-container-lowest rounded-xl shadow-[0_4px_12px_rgba(0,122,255,0.08)] overflow-hidden">
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-40 h-40 relative shrink-0">
          <Image fill className="object-cover" alt={item.imageAlt} src={item.imageUrl} sizes="160px" />
          <div
            className={`absolute top-2 left-2 px-3 py-1 text-[10px] font-bold rounded-full uppercase tracking-wider ${badge.className}`}
          >
            {badge.label}
          </div>
        </div>
        <div className="p-md flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-title-lg text-on-surface mb-1">{item.title}</h3>

            {item.status === "upcoming" ? (
              <>
                <div className="flex items-center gap-2 text-on-surface-variant mb-2">
                  <CalendarIcon className="size-4" />
                  <span className="text-body-md">{item.dateLabel}</span>
                </div>
                <div className="flex items-center gap-4 text-on-surface-variant">
                  <div className="flex items-center gap-1">
                    <UserGroupIcon className="size-4" />
                    <span className="text-body-md">{item.guestCountLabel}</span>
                  </div>
                  <div className="text-price-display text-ocean-blue">{item.priceLabel}</div>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center gap-2 text-on-surface-variant mb-2">
                  <CalendarDaysIcon className="size-4" />
                  <span className="text-body-md">{item.dateLabel}</span>
                </div>
                <div className="flex items-center gap-1 text-on-surface-variant">
                  <StarIcon className="size-4" />
                  <span className="text-body-md">{item.reviewNote}</span>
                </div>
              </>
            )}
          </div>
          <div className="mt-md pt-md border-t border-outline-variant/10">{action}</div>
        </div>
      </div>
    </div>
  );
}
