import { PRODUCT_DETAIL } from "@/data/mock-product-detail";
import { PRODUCT_REVIEWS, RATING_BREAKDOWN } from "@/data/mock-product-reviews";
import { SubPageHeader } from "@/components/layout/SubPageHeader";
import { ReviewListView } from "@/components/product/ReviewListView";
import { MapPinIcon } from "@heroicons/react/24/outline";

export function generateStaticParams() {
  return [{ id: "1" }];
}

export default function ProductReviewsPage() {
  const product = PRODUCT_DETAIL;

  return (
    <div className="min-h-screen pb-xl">
      <SubPageHeader backHref={`/activities/${product.id}`} title="리뷰" />

      <main className="pt-24 px-container-margin pb-xl max-w-3xl mx-auto">
        <div className="mb-8">
          <h2 className="text-title-lg mb-2">{product.title}</h2>
          <p className="text-on-surface-variant text-body-md flex items-center gap-1">
            <MapPinIcon className="size-4" /> {product.location}
          </p>
        </div>

        <ReviewListView reviews={PRODUCT_REVIEWS} breakdown={RATING_BREAKDOWN} />
      </main>
    </div>
  );
}
