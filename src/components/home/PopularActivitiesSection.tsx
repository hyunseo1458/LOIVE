import Link from "next/link";
import type { Activity } from "@/types/activity";
import { ActivityCard } from "./ActivityCard";

export function PopularActivitiesSection({ activities }: { activities: Activity[] }) {
  return (
    <section className="mb-xl">
      <div className="px-container-margin md:px-0 flex justify-between items-end mb-md">
        <h3 className="text-title-lg text-on-surface">인기 액티비티</h3>
        <Link href="/explore" className="text-ocean-blue text-label-md hover:text-ocean-blue/80 transition-colors">
          전체보기
        </Link>
      </div>
      {activities.length === 0 ? (
        <p className="px-container-margin text-body-md text-outline py-xl text-center">
          해당 카테고리의 액티비티가 아직 없습니다.
        </p>
      ) : (
        <div className="pl-container-margin md:pl-0 overflow-x-auto no-scrollbar pb-lg flex gap-md pr-container-margin snap-x snap-mandatory">
          {activities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      )}
    </section>
  );
}
