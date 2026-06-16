export type CalendarDayStatus = "past" | "available" | "soldout";

export type CalendarDay = {
  day: number;
  status: CalendarDayStatus;
  remaining?: number;
};

export type BookingProduct = {
  id: string;
  imageUrl: string;
  imageAlt: string;
  categoryLabel: string;
  title: string;
  dateRangeLabel: string;
  location: string;
  monthLabel: string;
  calendarDays: CalendarDay[];
  defaultSelectedDay: number;
  adultPrice: number;
  childPrice: number;
  currencySymbol: string;
};

export type PaymentMethod = "kakaopay" | "toss";
