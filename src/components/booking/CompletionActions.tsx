import Link from "next/link";

export function CompletionActions() {
  return (
    <section className="flex flex-col gap-sm mt-md pb-xl">
      <Link
        href="/bookings"
        className="w-full bg-coral text-on-primary text-label-md py-4 rounded-2xl active:scale-[0.98] transition-transform flex items-center justify-center shadow-[0_4px_12px_rgba(255,127,80,0.2)]"
      >
        예약 내역 보기
      </Link>
      <Link
        href="/"
        className="w-full bg-ocean-blue/10 text-ocean-blue text-label-md py-4 rounded-2xl active:scale-[0.98] transition-transform flex items-center justify-center"
      >
        홈으로 이동
      </Link>
    </section>
  );
}
