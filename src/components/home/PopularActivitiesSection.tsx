import Link from "next/link";
import type { Activity } from "@/types/activity";
import { ActivityListCard } from "@/components/explore/ActivityListCard";

export function PopularActivitiesSection({ activities }: { activities: Activity[] }) {
  const visible = activities.slice(0, 6);

  return (
    <section className="px-container-margin md:px-0 mb-xl">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-[18px] font-bold text-on-surface">인기 액티비티</h3>
        <Link href="/explore" className="text-coral text-[13px] font-semibold hover:text-coral/80 transition-colors">
          전체보기
        </Link>
      </div>
      {activities.length === 0 ? (
        <p className="text-body-md text-outline py-xl text-center">
          해당 카테고리의 액티비티가 아직 없습니다.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-3">
          {visible.map((activity) => (
            <ActivityListCard key={activity.id} activity={activity} />
          ))}
        </div>
      )}
    </section>
  );
}
