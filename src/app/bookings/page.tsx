import { BOOKING_HISTORY } from "@/data/mock-booking-history";
import { BookingsHeader } from "@/components/bookings/BookingsHeader";
import { BookingHistoryView } from "@/components/bookings/BookingHistoryView";
import { BottomNavBar } from "@/components/layout/BottomNavBar";

export default function BookingsPage() {
  return (
    <>
      <BookingsHeader />
      <main className="pt-24 pb-32 px-container-margin max-w-2xl mx-auto">
        <BookingHistoryView items={BOOKING_HISTORY} />
      </main>
      <BottomNavBar />
    </>
  );
}
