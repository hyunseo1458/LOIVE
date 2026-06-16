"use client";

import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { useWishlist } from "@/hooks/useWishlist";

export function WishlistButton({
  activityId,
  className,
  iconClassName = "size-5",
}: {
  activityId: string;
  className: string;
  iconClassName?: string;
}) {
  const { isLiked, toggle } = useWishlist();
  const liked = isLiked(activityId);

  return (
    <button type="button" aria-label={liked ? "찜 해제" : "찜하기"} onClick={() => toggle(activityId)} className={className}>
      {liked ? (
        <HeartIconSolid className={`${iconClassName} text-coral`} />
      ) : (
        <HeartIcon className={iconClassName} />
      )}
    </button>
  );
}
