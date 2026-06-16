"use client";

import { useState } from "react";
import Link from "next/link";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";

export function StickyBookingBar({
  productId,
  pricePerPerson,
  currency,
}: {
  productId: string;
  pricePerPerson: number;
  currency: string;
}) {
  const [saved, setSaved] = useState(false);

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-t border-outline-variant/30 shadow-[0px_-8px_24px_rgba(0,0,0,0.05)] pb-safe pt-sm px-container-margin md:max-w-3xl md:left-1/2 md:-translate-x-1/2 md:rounded-t-[24px] md:border-x">
      <div className="flex items-center justify-between gap-4 w-full py-sm">
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="찜하기"
            onClick={() => setSaved((v) => !v)}
            className={`w-12 h-12 flex items-center justify-center rounded-full border transition-all active:scale-95 ${
              saved
                ? "border-coral bg-coral/5 text-coral"
                : "border-outline-variant text-on-surface-variant hover:text-coral hover:border-coral hover:bg-coral/5"
            }`}
          >
            {saved ? <HeartIconSolid className="size-5" /> : <HeartIcon className="size-5" />}
          </button>
          <div>
            <p className="text-label-md text-outline-variant uppercase">총 금액</p>
            <p className="text-price-display text-on-surface">
              {currency}
              {pricePerPerson} <span className="text-body-md font-normal text-outline">/인</span>
            </p>
          </div>
        </div>
        <Link
          href={`/booking/${productId}`}
          className="flex-1 bg-coral text-on-error text-title-lg py-3 px-6 rounded-2xl shadow-sm hover:opacity-90 active:scale-95 transition-all text-center"
        >
          예약하기
        </Link>
      </div>
    </div>
  );
}
