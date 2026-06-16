import Image from "next/image";
import Link from "next/link";
import { HeartIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import type { Activity } from "@/types/activity";

export function ActivityCard({ activity }: { activity: Activity }) {
  const href = `/activities/${activity.id}`;

  return (
    <div className="relative w-64 md:w-72 shrink-0 snap-start bg-surface rounded-[20px] shadow-[0px_4px_12px_rgba(0,122,255,0.08)] overflow-hidden flex flex-col border border-outline-variant/10">
      {/* 카드 전체를 클릭 영역으로 사용 (찜/예약 버튼은 pointer-events-auto로 별도 처리) */}
      <Link href={href} aria-label={activity.name} className="absolute inset-0 z-0" />

      <div className="h-44 relative bg-surface-container-high pointer-events-none">
        <Image
          fill
          className="object-cover"
          alt={activity.imageAlt}
          src={activity.imageUrl}
          sizes="288px"
        />
        <button
          type="button"
          aria-label="찜하기"
          className="absolute top-sm right-sm w-8 h-8 bg-surface/80 backdrop-blur-md rounded-full flex items-center justify-center text-outline hover:text-coral transition-colors shadow-sm pointer-events-auto"
        >
          <HeartIcon className="size-4.5" />
        </button>
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
            href={href}
            className="bg-ocean-blue/10 text-ocean-blue text-label-md px-3 py-1.5 rounded-full hover:bg-ocean-blue hover:text-on-primary transition-colors pointer-events-auto"
          >
            예약
          </Link>
        </div>
      </div>
    </div>
  );
}
