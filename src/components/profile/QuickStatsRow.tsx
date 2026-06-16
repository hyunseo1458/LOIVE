import Link from "next/link";
import { HeartIcon, TicketIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

const STATS = [
  { icon: HeartIcon, label: "찜한 액티비티", color: "text-coral", href: "/wishlist" },
  // TODO: 내가 쓴 리뷰 / 쿠폰·포인트 화면 포팅 후 연결
  { icon: StarIcon, label: "내가 쓴 리뷰", color: "text-sun-yellow", href: null },
  { icon: TicketIcon, label: "쿠폰 / 포인트", color: "text-ocean-blue", href: null },
] as const;

export function QuickStatsRow() {
  return (
    <section className="mb-10">
      <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
        {STATS.map(({ icon: Icon, label, color, href }) => {
          const content = (
            <>
              <Icon className={`size-8 ${color}`} />
              <span className="text-label-md text-on-surface">{label}</span>
            </>
          );
          const className =
            "shrink-0 w-32 aspect-square bg-surface border border-outline-variant/30 rounded-2xl shadow-[0px_4px_12px_rgba(0,122,255,0.08)] flex flex-col items-center justify-center gap-2";

          if (href === null) {
            return (
              <button key={label} type="button" disabled className={`${className} opacity-70`}>
                {content}
              </button>
            );
          }

          return (
            <Link key={label} href={href} className={`${className} hover:scale-[0.98] transition-transform`}>
              {content}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
