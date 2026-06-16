import { TopAppBar } from "@/components/layout/TopAppBar";
import { BottomNavBar } from "@/components/layout/BottomNavBar";
import { CategoryTabs } from "@/components/home/CategoryTabs";
import { HeroBannerSlider } from "@/components/home/HeroBannerSlider";
import { PopularActivitiesSection } from "@/components/home/PopularActivitiesSection";
import { ThemedCoursesSection } from "@/components/home/ThemedCoursesSection";

export default function Home() {
  return (
    <>
      <TopAppBar />
      <main className="pt-[88px] pb-32 max-w-7xl mx-auto md:grid md:grid-cols-12 md:gap-gutter px-0 md:px-container-margin">
        <div className="md:col-span-12 w-full">
          <CategoryTabs />
          <HeroBannerSlider />
          <PopularActivitiesSection />
          <ThemedCoursesSection />
        </div>
      </main>
      <BottomNavBar />
    </>
  );
}
