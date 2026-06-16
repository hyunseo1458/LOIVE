import Link from "next/link";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";

export function CancelledEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-xl text-center px-lg">
      <div className="w-48 h-48 mb-lg opacity-80 flex items-center justify-center">
        <CalendarDaysIcon className="size-24 text-outline-variant" />
      </div>
      <h3 className="text-headline-md text-on-surface mb-xs">취소 내역이 없습니다</h3>
      <p className="text-body-md text-on-surface-variant mb-lg max-w-xs mx-auto">
        예약하셨던 내역 중 취소된 정보가 없습니다.
        <br />
        새로운 해양 액티비티를 탐색해보세요!
      </p>
      <Link
        href="/"
        className="inline-block bg-primary text-on-primary text-label-md px-xl py-3 rounded-xl hover:opacity-90 transition-all active:scale-95 shadow-lg"
      >
        액티비티 탐색하기
      </Link>
    </div>
  );
}
