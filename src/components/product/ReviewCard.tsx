import { StarIcon } from "@heroicons/react/24/solid";
import type { Review } from "@/types/activity";

const AVATAR_COLORS = [
  "bg-primary-fixed text-primary",
  "bg-secondary-container text-on-secondary-container",
];

export function ReviewCard({ review, index = 0 }: { review: Review; index?: number }) {
  return (
    <div className="bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/30 shadow-sm">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-title-lg ${AVATAR_COLORS[index % AVATAR_COLORS.length]}`}
          >
            {review.authorInitial}
          </div>
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
      <p className="text-body-md text-on-surface-variant">&ldquo;{review.comment}&rdquo;</p>
    </div>
  );
}
