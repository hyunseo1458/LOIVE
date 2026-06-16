export type BookingHistoryStatus = "upcoming" | "completed";

export type BookingHistoryItem = {
  id: string;
  status: BookingHistoryStatus;
  imageUrl: string;
  imageAlt: string;
  title: string;
  dateLabel: string;
  guestCountLabel?: string;
  priceLabel?: string;
  reviewNote?: string;
};
