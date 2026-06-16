"use client";

import { ShareIcon } from "@heroicons/react/24/outline";

export function ShareButton({ title }: { title: string }) {
  const handleShare = () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      navigator.share({ title, url: window.location.href }).catch(() => {});
    }
  };

  return (
    <button
      type="button"
      aria-label="공유하기"
      onClick={handleShare}
      className="w-10 h-10 rounded-full bg-surface/80 backdrop-blur-xl flex items-center justify-center text-ocean-blue shadow-sm hover:scale-95 transition-transform"
    >
      <ShareIcon className="size-5" />
    </button>
  );
}
