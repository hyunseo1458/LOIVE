import { POPULAR_ACTIVITIES } from "@/data/mock-home";
import { ExploreHeader } from "@/components/explore/ExploreHeader";
import { ExploreView } from "@/components/explore/ExploreView";
import { BottomNavBar } from "@/components/layout/BottomNavBar";
import type { RegionCode } from "@/types/activity";

export const dynamic = "force-static";

export default async function ExplorePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const sp = await searchParams;
  const region = typeof sp.region === "string" ? (sp.region as RegionCode) : undefined;

  return (
    <>
      <ExploreHeader />
      <main className="pt-20 pb-32 px-container-margin max-w-7xl mx-auto flex flex-col gap-lg">
        <ExploreView activities={POPULAR_ACTIVITIES} initialRegion={region} />
      </main>
      <BottomNavBar />
    </>
  );
}
