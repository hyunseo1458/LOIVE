import { PRODUCT_DETAIL } from "@/data/mock-product-detail";
import { SubPageHeader } from "@/components/layout/SubPageHeader";
import { WriteReviewForm } from "@/components/product/WriteReviewForm";

export function generateStaticParams() {
  return [{ id: "1" }];
}

export default function WriteReviewPage() {
  const product = PRODUCT_DETAIL;

  return (
    <div className="min-h-screen">
      <SubPageHeader backHref={`/activities/${product.id}`} title="리뷰 작성" />
      <WriteReviewForm
        productId={product.id}
        productTitle={product.title}
        productImageUrl={product.heroImageUrl}
        productImageAlt={product.heroImageAlt}
        visitDateLabel="2025.06.20"
      />
    </div>
  );
}
