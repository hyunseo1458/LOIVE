import Link from "next/link";
import { COURSES } from "@/data/mock-home";
import { CourseCard } from "./CourseCard";

export function ThemedCoursesSection() {
  return (
    <section className="px-container-margin md:px-0 mb-xl">
      <div className="flex justify-between items-end mb-md">
        <h3 className="text-[18px] font-bold text-on-surface">테마별 코스</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
        {COURSES.map((course) => (
          <Link key={course.id} href="/explore" className="block hover:opacity-95 transition-opacity">
            <CourseCard course={course} />
          </Link>
        ))}
      </div>
    </section>
  );
}
