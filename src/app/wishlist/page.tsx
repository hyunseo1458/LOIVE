import { SubPageHeader } from "@/components/layout/SubPageHeader";
import { WishlistView } from "@/components/wishlist/WishlistView";

export default function WishlistPage() {
  return (
    <div className="min-h-screen pb-xl">
      <SubPageHeader backHref="/profile" title="찜한 액티비티" />
      <main className="pt-24 px-container-margin max-w-3xl mx-auto">
        <WishlistView />
      </main>
    </div>
  );
}
