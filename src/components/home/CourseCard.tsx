import Image from "next/image";
import { MapIcon, CakeIcon, PaperAirplaneIcon, BeakerIcon } from "@heroicons/react/24/outline";
import type { Course, CourseTag } from "@/types/activity";

const TAG_ICON: Record<CourseTag["icon"], typeof MapIcon> = {
  walk: MapIcon,
  food: CakeIcon,
  drink: BeakerIcon,
  sail: PaperAirplaneIcon,
};

const TAG_LABEL: Record<CourseTag["icon"], string> = {
  walk: "산책",
  food: "맛집",
  drink: "음료",
  sail: "항해",
};

const DURATION_BG: Record<Course["durationColor"], string> = {
  coral: "text-coral bg-coral/10",
  "ocean-blue": "text-ocean-blue bg-ocean-blue/10",
};

export function CourseCard({ course }: { course: Course }) {
  return (
    <div className="bg-surface rounded-[20px] border border-[#E0E7FF] shadow-[0px_2px_8px_rgba(0,122,255,0.05)] overflow-hidden flex flex-row hover:shadow-[0px_4px_12px_rgba(0,122,255,0.12)] transition-shadow duration-300">
      <div className="w-2/5 min-h-[140px] relative overflow-hidden bg-surface-container-high">
        <Image fill className="object-cover" alt={course.imageAlt} src={course.imageUrl} sizes="40vw" />
      </div>
      <div className="p-md flex-grow flex flex-col justify-center bg-surface">
        <span
          className={`text-label-md mb-xs uppercase tracking-wider w-max px-2 py-0.5 rounded-sm ${DURATION_BG[course.durationColor]}`}
        >
          {course.durationLabel}
        </span>
        <h4 className="text-title-lg text-on-surface mb-1 line-clamp-1">{course.title}</h4>
        <p className="text-body-md text-outline line-clamp-2 mb-sm">{course.description}</p>
        <div className="flex flex-wrap items-center gap-1.5 mt-auto">
          {course.tags.map((tag) => {
            const Icon = TAG_ICON[tag];
            return (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-ocean-blue/10 text-ocean-blue text-label-md"
              >
                <Icon className="size-3 shrink-0" />
                {TAG_LABEL[tag]}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
