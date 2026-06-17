import { TopAppBar } from "@/components/layout/TopAppBar";
import { BottomNavBar } from "@/components/layout/BottomNavBar";
import { HomeContent } from "@/components/home/HomeContent";

export default function Home() {
  return (
    <>
      <TopAppBar />
      <main className="pt-[88px] pb-32 max-w-7xl mx-auto md:grid md:grid-cols-12 md:gap-gutter px-0 md:px-container-margin">
        <div className="md:col-span-12 w-full">
          <HomeContent />
        </div>
      </main>
      <BottomNavBar />
    </>
  );
}
