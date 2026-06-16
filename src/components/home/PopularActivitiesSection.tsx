import Link from "next/link";
import { POPULAR_ACTIVITIES } from "@/data/mock-home";
import { ActivityCard } from "./ActivityCard";

export function PopularActivitiesSection() {
  return (
    <section className="mb-xl">
      <div className="px-container-margin md:px-0 flex justify-between items-end mb-md">
        <h3 className="text-title-lg text-on-surface">인기 액티비티</h3>
        <Link href="/explore" className="text-ocean-blue text-label-md hover:text-ocean-blue/80 transition-colors">
          전체보기
        </Link>
      </div>
      <div className="pl-container-margin md:pl-0 overflow-x-auto no-scrollbar pb-lg flex gap-md pr-container-margin snap-x snap-mandatory">
        {POPULAR_ACTIVITIES.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
    </section>
  );
}
