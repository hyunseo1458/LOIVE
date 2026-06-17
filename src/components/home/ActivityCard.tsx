import Image from "next/image";
import Link from "next/link";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import type { Activity } from "@/types/activity";
import { WishlistButton } from "@/components/shared/WishlistButton";

export function ActivityCard({ activity }: { activity: Activity }) {
  const detailHref = `/activities/${activity.id}`;
  const bookingHref = `/booking/${activity.id}`;

  return (
    <div className="relative w-64 md:w-72 shrink-0 snap-start bg-surface rounded-[20px] shadow-[0px_4px_12px_rgba(0,122,255,0.08)] overflow-hidden flex flex-col border border-outline-variant/10">
      {/* 카드 전체 클릭 → 상세 페이지 */}
      <Link href={detailHref} aria-label={activity.name} className="absolute inset-0 z-0" />

      <div className="h-44 relative bg-surface-container-high pointer-events-none">
        <Image
          fill
          className="object-cover"
          alt={activity.imageAlt}
          src={activity.imageUrl}
          sizes="288px"
        />
        <WishlistButton
          activityId={activity.id}
          className="absolute top-sm right-sm w-11 h-11 bg-surface/80 backdrop-blur-md rounded-full flex items-center justify-center text-outline hover:text-coral transition-colors shadow-sm pointer-events-auto"
          iconClassName="size-5"
        />
      </div>
      <div className="p-md flex flex-col flex-grow bg-surface pointer-events-none">
        <div className="flex justify-between items-start mb-xs">
          <h4 className="text-title-lg text-on-surface line-clamp-1">{activity.name}</h4>
          <div className="flex items-center gap-1 text-sun-yellow bg-surface-container-low px-2 py-0.5 rounded-full">
            <StarIcon className="size-3.5" />
            <span className="text-label-md text-on-surface">{activity.rating}</span>
          </div>
        </div>
        <p className="text-body-md text-outline mb-md line-clamp-1 flex items-center gap-1">
          <MapPinIcon className="size-3.5" /> {activity.location}
        </p>
        <div className="mt-auto flex items-center justify-between border-t border-outline-variant/10 pt-sm">
          <span className="text-price-display text-ocean-blue tracking-tight">
            {activity.priceLabel}
          </span>
          <Link
            href={bookingHref}
            className="bg-coral text-on-error text-label-md px-3 py-1.5 rounded-full hover:opacity-90 active:scale-95 transition-all pointer-events-auto"
          >
            예약
          </Link>
        </div>
      </div>
    </div>
  );
}
