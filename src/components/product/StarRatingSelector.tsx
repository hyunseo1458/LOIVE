"use client";

import { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";

export function StarRatingSelector({
  rating,
  onChange,
}: {
  rating: number;
  onChange: (rating: number) => void;
}) {
  const [hoverRating, setHoverRating] = useState(0);
  const displayRating = hoverRating || rating;

  return (
    <section className="text-center flex flex-col gap-md">
      <h3 className="text-title-lg">경험이 어떠셨나요?</h3>
      <div className="flex justify-center gap-2" onMouseLeave={() => setHoverRating(0)}>
        {[1, 2, 3, 4, 5].map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => onChange(value)}
            onMouseEnter={() => setHoverRating(value)}
            aria-label={`${value}점`}
            className="transition-transform duration-200 hover:scale-110 active:scale-90"
          >
            <StarIcon className={`size-10 ${value <= displayRating ? "text-sun-yellow" : "text-surface-variant"}`} />
          </button>
        ))}
      </div>
    </section>
  );
}
