import { BOOKING_PRODUCT } from "@/data/mock-booking";
import { BookingForm } from "@/components/booking/BookingForm";

// TODO: Supabase 연동 후 params.id로 실제 상품/잔여석을 조회하도록 교체 (현재는 mock 단일 상품만 존재)
export default function BookingPage() {
  return <BookingForm product={BOOKING_PRODUCT} />;
}
