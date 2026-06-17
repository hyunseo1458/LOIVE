import Image from "next/image";
import Link from "next/link";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import type { Activity } from "@/types/activity";
import { WishlistButton } from "@/components/shared/WishlistButton";

export function ActivityListCard({ activity }: { activity: Activity }) {
  const detailHref = `/activities/${activity.id}`;
  const bookingHref = `/booking/${activity.id}`;

  return (
    <article className="relative bg-surface-container-lowest rounded-xl shadow-[0px_4px_12px_rgba(0,122,255,0.08)] overflow-hidden flex flex-col border border-outline-variant/10">
      <Link href={detailHref} aria-label={activity.name} className="absolute inset-0 z-0" />

      <div className="relative h-48 w-full bg-surface-variant overflow-hidden pointer-events-none">
        <Image fill className="object-cover" alt={activity.imageAlt} src={activity.imageUrl} sizes="100vw" />
        <WishlistButton
          activityId={activity.id}
          className="absolute top-3 right-3 z-20 w-11 h-11 rounded-full bg-surface/80 backdrop-blur-md flex items-center justify-center text-outline hover:text-coral transition-colors shadow-sm pointer-events-auto"
          iconClassName="size-5"
        />
        <div className="absolute bottom-3 left-3 z-20 flex items-center gap-1 px-2 py-1 rounded-full bg-surface/80 backdrop-blur-md text-on-surface text-label-md">
          <StarIcon className="size-3.5 text-sun-yellow" />
          {activity.rating}
        </div>
      </div>

      <div className="p-4 flex flex-col gap-xs pointer-events-none">
        <div>
          <h2 className="text-title-lg text-on-surface">{activity.name}</h2>
          <p className="text-body-md text-outline flex items-center gap-1 mt-0.5">
            <MapPinIcon className="size-3.5" /> {activity.location}
          </p>
        </div>
        <div className="flex items-end justify-between mt-2">
          <div className="flex flex-col">
            {activity.priceUnitLabel && (
              <span className="text-label-md text-outline mb-0.5">{activity.priceUnitLabel}</span>
            )}
            <span className="text-price-display text-ocean-blue tracking-tight">
              {activity.priceLabel}
              {activity.priceFrom && <span className="text-body-md font-normal text-outline ml-1">부터</span>}
            </span>
          </div>
          <Link
            href={bookingHref}
            className="bg-coral text-on-error px-6 py-2.5 rounded-2xl text-label-md hover:opacity-90 active:scale-95 transition-all shadow-sm pointer-events-auto"
          >
            예약
          </Link>
        </div>
      </div>
    </article>
  );
}
