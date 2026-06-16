import { PRODUCT_DETAIL } from "@/data/mock-product-detail";
import { SubPageHeader } from "@/components/layout/SubPageHeader";
import { WriteReviewForm } from "@/components/product/WriteReviewForm";

// TODO: Supabase 연동 후 params.id로 실제 상품/예약 방문일을 조회하도록 교체 (현재는 mock 단일 상품만 존재)
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
