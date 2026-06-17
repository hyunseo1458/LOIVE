"use client";

import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export function BackButton({ className }: { className?: string }) {
  const router = useRouter();
  return (
    <button
      type="button"
      aria-label="뒤로 가기"
      onClick={() => router.back()}
      className={className}
    >
      <ArrowLeftIcon className="size-5" />
    </button>
  );
}
