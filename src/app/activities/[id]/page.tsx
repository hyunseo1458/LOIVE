import { PRODUCT_DETAIL } from "@/data/mock-product-detail";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductInfo } from "@/components/product/ProductInfo";
import { AboutSection } from "@/components/product/AboutSection";
import { ItineraryList } from "@/components/product/ItineraryList";
import { SafetyBadges } from "@/components/product/SafetyBadges";
import { ReviewsSection } from "@/components/product/ReviewsSection";
import { StickyBookingBar } from "@/components/product/StickyBookingBar";

// TODO: Supabase 연동 후 params.id로 실제 상품을 조회하도록 교체 (현재는 mock 단일 상품만 존재)
export default function ActivityDetailPage() {
  const product = PRODUCT_DETAIL;

  return (
    <main className="w-full max-w-3xl mx-auto relative min-h-screen bg-surface">
      <ProductGallery imageUrl={product.heroImageUrl} imageAlt={product.heroImageAlt} title={product.title} />

      <section className="relative z-30 bg-surface rounded-t-[32px] -mt-8 px-container-margin pt-8 pb-32">
        <ProductInfo
          tags={product.tags}
          title={product.title}
          rating={product.rating}
          reviewCount={product.reviewCount}
          location={product.location}
        />

        <AboutSection
          galleryImages={product.galleryImages}
          introTitle={product.introTitle}
          introDescription={product.introDescription}
          features={product.features}
        />

        <ItineraryList steps={product.itinerary} />
        <SafetyBadges badges={product.safetyBadges} />
        <ReviewsSection reviews={product.reviews} reviewCount={product.reviewCount} />

        <div className="h-10" />
      </section>

      <StickyBookingBar
        productId={product.id}
        pricePerPerson={product.pricePerPerson}
        currency={product.currency}
      />
    </main>
  );
}
