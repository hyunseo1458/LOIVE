"use client";

import { useState } from "react";
import Image from "next/image";
import { StarIcon, HandThumbUpIcon } from "@heroicons/react/24/solid";
import { HandThumbUpIcon as HandThumbUpIconOutline } from "@heroicons/react/24/outline";
import type { Review } from "@/types/activity";

const AVATAR_COLORS = [
  "bg-primary-fixed text-primary",
  "bg-secondary-container text-on-secondary-container",
];

export function ReviewCard({ review, index = 0 }: { review: Review; index?: number }) {
  const [helpfulOn, setHelpfulOn] = useState(false);
  const helpfulCount = (review.helpfulCount ?? 0) + (helpfulOn ? 1 : 0);

  return (
    <div className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/30 shadow-sm">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-3">
          {review.avatarUrl ? (
            <div className="w-10 h-10 rounded-full overflow-hidden relative shrink-0">
              <Image fill className="object-cover" alt={review.authorName} src={review.avatarUrl} sizes="40px" />
            </div>
          ) : (
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-title-lg shrink-0 ${AVATAR_COLORS[index % AVATAR_COLORS.length]}`}
            >
              {review.authorInitial}
            </div>
          )}
          <div>
            <p className="text-title-lg text-on-surface leading-none mb-1">{review.authorName}</p>
            <p className="text-label-md text-outline-variant">{review.date}</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon
              key={i}
              className={`size-4 ${i < review.rating ? "text-coral" : "text-outline-variant"}`}
            />
          ))}
        </div>
      </div>

      <p className="text-body-md text-on-surface-variant whitespace-pre-line">{review.comment}</p>

      {review.photos && review.photos.length > 0 && (
        <div className="flex gap-sm mt-md overflow-x-auto no-scrollbar">
          {review.photos.map((photo, i) => (
            <div key={i} className="w-28 h-28 shrink-0 rounded-xl overflow-hidden relative bg-surface-variant">
              <Image fill className="object-cover" alt={`${review.authorName} 후기 사진 ${i + 1}`} src={photo} sizes="112px" />
            </div>
          ))}
        </div>
      )}

      {review.helpfulCount !== undefined && (
        <button
          type="button"
          onClick={() => setHelpfulOn((v) => !v)}
          className={`mt-md flex items-center gap-1 px-sm py-1.5 rounded-full border text-label-md transition-colors ${
            helpfulOn
              ? "border-primary/30 bg-primary/5 text-primary"
              : "border-outline-variant/30 text-on-surface-variant hover:bg-surface-container-low hover:text-primary"
          }`}
        >
          {helpfulOn ? <HandThumbUpIcon className="size-4" /> : <HandThumbUpIconOutline className="size-4" />}
          도움돼요 {helpfulCount}
        </button>
      )}
    </div>
  );
}
