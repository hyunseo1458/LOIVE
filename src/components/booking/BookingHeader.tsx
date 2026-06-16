import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

export function BookingHeader({ productId }: { productId: string }) {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/20 shadow-sm">
      <div className="flex items-center justify-between px-container-margin h-16 w-full max-w-3xl mx-auto">
        <Link
          href={`/activities/${productId}`}
          aria-label="뒤로 가기"
          className="text-ocean-blue hover:opacity-80 active:scale-95 transition flex items-center justify-center p-2 -ml-2"
        >
          <ChevronLeftIcon className="size-6" />
        </Link>
        <h1 className="text-headline-md text-ocean-blue tracking-tight font-bold">예약 및 결제</h1>
        <div className="w-10" />
      </div>
    </header>
  );
}
