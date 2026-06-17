import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

export function BookingHeader({
  productId,
  step = 1,
  totalSteps = 2,
}: {
  productId: string;
  step?: number;
  totalSteps?: number;
}) {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-sm">
      <div className="border-b border-outline-variant/20">
        <div className="flex items-center justify-between px-container-margin h-16 w-full max-w-3xl mx-auto">
          <Link
            href={`/activities/${productId}`}
            aria-label="뒤로 가기"
            className="text-ocean-blue hover:opacity-80 active:scale-95 transition flex items-center justify-center p-2 -ml-2"
          >
            <ChevronLeftIcon className="size-6" />
          </Link>
          <div className="flex flex-col items-center">
            <h1 className="text-headline-md text-ocean-blue tracking-tight font-bold">예약 및 결제</h1>
            <span className="text-label-md text-outline">{step} / {totalSteps} 단계</span>
          </div>
          <div className="w-10" />
        </div>
      </div>
      <div className="h-1 bg-outline-variant/20">
        <div
          className="h-full bg-ocean-blue transition-all duration-300"
          style={{ width: `${(step / totalSteps) * 100}%` }}
        />
      </div>
    </header>
  );
}
