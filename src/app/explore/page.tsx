import { POPULAR_ACTIVITIES } from "@/data/mock-home";
import { ExploreHeader } from "@/components/explore/ExploreHeader";
import { ExploreView } from "@/components/explore/ExploreView";
import { BottomNavBar } from "@/components/layout/BottomNavBar";

export default function ExplorePage() {
  return (
    <>
      <ExploreHeader />
      <main className="pt-20 pb-32 px-container-margin max-w-7xl mx-auto flex flex-col gap-lg">
        <ExploreView activities={POPULAR_ACTIVITIES} />
      </main>
      <BottomNavBar />
    </>
  );
}
