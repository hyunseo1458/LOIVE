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
    <article className="relative bg-surface rounded-xl shadow-sm overflow-hidden flex flex-col">
      <Link href={detailHref} aria-label={activity.name} className="absolute inset-0 z-0" />

      <div className="relative aspect-[4/3] w-full bg-surface-variant overflow-hidden pointer-events-none">
        <Image fill className="object-cover" alt={activity.imageAlt} src={activity.imageUrl} sizes="50vw" />
        <WishlistButton
          activityId={activity.id}
          className="absolute top-2 right-2 z-20 w-9 h-9 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:text-coral transition-colors pointer-events-auto"
          iconClassName="size-4"
        />
        <div className="absolute bottom-2 left-2 z-20 flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-black/40 backdrop-blur-sm text-white text-[11px] font-semibold">
          <StarIcon className="size-3 text-sun-yellow" />
          {activity.rating}
        </div>
      </div>

      <div className="p-3 flex flex-col gap-1 pointer-events-none">
        <h2 className="text-[14px] font-semibold text-on-surface leading-snug line-clamp-2">{activity.name}</h2>
        <p className="text-[12px] text-outline flex items-center gap-0.5">
          <MapPinIcon className="size-3 shrink-0" /> {activity.location}
        </p>
        <div className="flex items-center justify-between mt-1">
          <span className="text-[16px] font-extrabold text-on-surface tracking-tight">
            {activity.priceLabel}
          </span>
          <Link
            href={bookingHref}
            className="bg-coral text-white text-[11px] font-semibold px-3 py-1.5 rounded-full hover:opacity-90 active:scale-95 transition-all pointer-events-auto"
          >
            예약
          </Link>
        </div>
      </div>
    </article>
  );
}
