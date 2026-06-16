import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { BOOKING_PRODUCT } from "@/data/mock-booking";
import { formatFullDate } from "@/lib/reservation-code";
import { CompletionHeader } from "@/components/booking/CompletionHeader";
import { CompletionSummaryCard } from "@/components/booking/CompletionSummaryCard";
import { PaymentDetailsCard } from "@/components/booking/PaymentDetailsCard";
import { VoucherSection } from "@/components/booking/VoucherSection";
import { CompletionActions } from "@/components/booking/CompletionActions";

// TODO: Supabase 연동 후 params.id로 실제 예약 내역을 조회하도록 교체 (현재는 mock 단일 상품 + 쿼리스트링으로 결제 정보 전달)
export default async function BookingCompletePage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { id } = await params;
  const sp = await searchParams;

  const product = BOOKING_PRODUCT;
  const amount = Number(sp.amount ?? 0);
  const method = typeof sp.method === "string" ? sp.method : "";
  const day = Number(sp.day ?? product.defaultSelectedDay);
  const code = typeof sp.code === "string" ? sp.code : "TIDE-000000-0000";

  return (
    <div className="min-h-screen pb-xl">
      <CompletionHeader backHref={`/booking/${id}`} />

      <main className="pt-[100px] px-container-margin max-w-lg mx-auto flex flex-col gap-lg">
        <section className="flex flex-col items-center text-center gap-sm mt-md">
          <div className="w-[80px] h-[80px] rounded-full bg-success-green/10 flex items-center justify-center">
            <CheckCircleIcon className="size-12 text-success-green" />
          </div>
          <h1 className="text-headline-lg-mobile text-on-surface mt-sm">예약이 완료되었습니다!</h1>
          <p className="text-body-md text-on-surface-variant">고객님의 소중한 바다 여행이 준비되었습니다.</p>
        </section>

        <CompletionSummaryCard
          imageUrl={product.imageUrl}
          imageAlt={product.imageAlt}
          title={product.title}
          dateLabel={formatFullDate(product.monthLabel, day)}
          location={product.location}
        />

        <PaymentDetailsCard amountLabel={`${amount.toLocaleString()}원`} method={method} reservationCode={code} />

        <VoucherSection />
        <CompletionActions />
      </main>
    </div>
  );
}
