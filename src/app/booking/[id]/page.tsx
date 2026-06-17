import { BOOKING_PRODUCT } from "@/data/mock-booking";
import { BookingForm } from "@/components/booking/BookingForm";

export function generateStaticParams() {
  return [{ id: "1" }];
}

export default function BookingPage() {
  return <BookingForm product={BOOKING_PRODUCT} />;
}
