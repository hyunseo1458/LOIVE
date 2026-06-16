// TODO: Supabase 연동 시 getBookingHistory(userId) 쿼리로 교체
import type { BookingHistoryItem } from "@/types/booking-history";

export const BOOKING_HISTORY: BookingHistoryItem[] = [
  {
    id: "history-1",
    productId: "activity-2",
    status: "upcoming",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBw35oP3rfVtp0s5_S_oJr3uz-x_irvJBmlHawaxlQM_7N2eN3n1XWbNd531dRVUG9HY4NIKR95vl31qXsdu1DE7KTvwGrhI4KEOBqIKmBIxYP7K7b7rCZbo-UbUGQrjUGzSGfmsEIN-TgVL51DKWCyce8x4wcoTxEAJ1ziJeQa5YT7AQfo9zFmFppkpXY2XU93AnFcR7F51g6z2KfQYaOKIlz-JxrAjo6txGCKqk-C1_DB_GA9v9fDaaOP59Qz-A9fS-GPZIhB01S_",
    imageAlt: "파도 위의 서퍼",
    title: "입문 서핑 클래스",
    dateLabel: "2025년 7월 12일 오전 10:00",
    guestCountLabel: "인원 2명",
    priceLabel: "₩120,000",
  },
  {
    id: "history-2",
    productId: "activity-1",
    status: "completed",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAh-AxBt2sH4lVNjBxHa-zTBXRHzg3iiVre1xk65_X0JtZfwqscBk15KXoZgKGWVb5FkNFFeoCvcW-UJX60MQK5RPdMizG3RV7etZxB43GVqj4fNYKObncgAQi5z3Iiyl0buccnP7wK2ptbZUGeCMHQ0VcEG4Gm0-zKR_4G9uyEFDjPEBudF_B-lwRGESsa21ExizL2hrfxphPlqSfiKqvEdW4ZrMTWiIySyrseAf0YRoh6L2Wju8HTNsMUQVjOZLmMPG-aTSFwNZYM",
    imageAlt: "스쿠버 다이빙 투어",
    title: "스쿠버 다이빙 투어",
    dateLabel: "2025년 6월 20일",
    reviewNote: "즐거운 여행이었습니다!",
  },
];
