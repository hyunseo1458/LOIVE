"use client";

import Link from "next/link";
import { HeartIcon } from "@heroicons/react/24/outline";
import { useWishlist } from "@/hooks/useWishlist";
import { POPULAR_ACTIVITIES } from "@/data/mock-home";
import { ActivityListCard } from "@/components/explore/ActivityListCard";

export function WishlistView() {
  const { likedIds } = useWishlist();
  const likedActivities = POPULAR_ACTIVITIES.filter((a) => likedIds.includes(a.id));

  if (likedActivities.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-xl px-lg">
        <HeartIcon className="size-16 text-outline-variant mb-md" />
        <h2 className="text-title-lg text-on-surface mb-xs">아직 찜한 액티비티가 없어요</h2>
        <p className="text-body-md text-on-surface-variant mb-lg">
          마음에 드는 액티비티의 하트를 눌러 저장해보세요.
        </p>
        <Link
          href="/explore"
          className="bg-primary text-on-primary text-label-md px-xl py-3 rounded-xl hover:opacity-90 transition-all active:scale-95"
        >
          액티비티 탐색하기
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-md">
      {likedActivities.map((activity) => (
        <ActivityListCard key={activity.id} activity={activity} />
      ))}
    </div>
  );
}
