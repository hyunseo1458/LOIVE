import { HeartIcon, TicketIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

const STATS = [
  { icon: HeartIcon, label: "찜한 액티비티", color: "text-coral" },
  { icon: StarIcon, label: "내가 쓴 리뷰", color: "text-sun-yellow" },
  { icon: TicketIcon, label: "쿠폰 / 포인트", color: "text-ocean-blue" },
] as const;

export function QuickStatsRow() {
  return (
    <section className="mb-10">
      <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
        {/* TODO: 찜 목록 / 내 리뷰 / 쿠폰·포인트 화면 포팅 후 연결 */}
        {STATS.map(({ icon: Icon, label, color }) => (
          <button
            key={label}
            type="button"
            disabled
            className="shrink-0 w-32 aspect-square bg-surface border border-outline-variant/30 rounded-2xl shadow-[0px_4px_12px_rgba(0,122,255,0.08)] flex flex-col items-center justify-center gap-2 opacity-70"
          >
            <Icon className={`size-8 ${color}`} />
            <span className="text-label-md text-on-surface">{label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
