// TODO: Supabase 연동 시 getReviews(productId) 쿼리로 교체
import type { Review, RatingBreakdown } from "@/types/activity";

export const RATING_BREAKDOWN: RatingBreakdown = {
  average: 4.9,
  total: 128,
  counts: [
    { stars: 5, percent: 92 },
    { stars: 4, percent: 6 },
    { stars: 3, percent: 2 },
    { stars: 2, percent: 0 },
    { stars: 1, percent: 0 },
  ],
};

export const PRODUCT_REVIEWS: Review[] = [
  {
    id: "review-1",
    authorInitial: "M",
    authorName: "마커스 T.",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBNR1FgadHe7hY60mNTcK0cGrPr2LiO3qPFcDKHMCVy6sDT1P3sbWCjI1LWFsfKazE4RiB9yfouyMJ7VM6PWMxozM9PVbVagYhlvPdEn4mPtjzyqfHgkwxEiiooJMn0Qhly4efgztNXlJ7SYIHbUXBintrKsdx-fW3OYaKfRov7SSyE4CxV8YHMtAmrqjJcLCzQLB9qIxeRuE8hs-aryypK8-SVuzAZEivK1DsXs51zMWMX9VN4rWTUz0OcUvKbWDYvBPjkc7eZecjt",
    date: "2023년 10월 15일",
    rating: 5,
    comment:
      "강사님이 정말 친절하시고 초보자도 쉽게 배울 수 있도록 세심하게 지도해주셨어요. 장비 상태도 매우 깨끗하고 최신식이어서 안심하고 즐길 수 있었습니다. 다음 휴가 때도 꼭 다시 예약하고 싶어요!",
    photos: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDO9s4iX3GRzDXw3jcveD7gJIsLByM_dzVrkcGN_Il82bA8p_xvtdgeur1vsKyDco39RrUb9ZoXNbyaHLKor7F96gj51c4e8WZb74U8NMmAHbD-KxhUldnsmxonETTQUPq6c0l_NZC0LddZxvqc7cqWrF_pnxycSFlX5kvcrRVBbg8e1er9hikJLpccImRW-Ec7RupNfwQ06zJYMSDgZudkHGgEwwWwiqBrj2vWe8hpNgahtgM1R0unIC4pUY0xhMKt9JIyCc8AUxmt",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCE7kNLPKaKGORbqkt95GoagYteb1V6bThewq0xYv3CaHuDvvvRN2afD0K2z2qVbvYezCRfjdygCEEQpcDlRv-ldmoCMSSQlJ7232MwULLERBsp9TKLP7KAeO_V6vrJDF8qfH_O1DZWn7QHSCDeEsfer_apRhjqcGKOTUqYBmpvcwmfAcUqYXkxwSaAFj2W7GFYNwVeprxEocWaJgbpHdtz3VgQMY8DL-OQOE-9rys5B66pkmwpB2ZVGU3IQxiqvDSzpX7qYBOWhdyb",
    ],
    helpfulCount: 24,
  },
  {
    id: "review-2",
    authorInitial: "S",
    authorName: "사라 J.",
    avatarUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDBfIto0Epp36CyyYKmrEPZ6lU_C_Bx7PpYDYtd7tNIQ0YrpQZ6lgeH7t4y7LSa2bjxzwf2JbNnEHKgA0Pg0VGIM_n3htrIrF4ahfUgwlUwugEs_iyXIK4-qgVGvRRiFG0vrjQ3VHuC3J1BV6skNq_CxJUVoWuZ5Q41-ye9YSN0FSR8w3wIohIkmU2DclbYV8cVyyDURNzChDCmwhG8O4Byuf0JIZWel-g_Hu4IGchRaqenrKYiSqFOAbZhaDNLvRYaSLAcZfeuEIpS",
    date: "2023년 10월 12일",
    rating: 4,
    comment:
      "전반적으로 훌륭한 경험이었습니다. 제공해주신 수트와 구명조끼가 관리가 잘 되어 있어서 쾌적하게 입을 수 있었어요. 다만 주말이라 그런지 다른 팀들이 좀 많아서 여유를 즐기기엔 아쉬움이 있었습니다.",
    helpfulCount: 8,
  },
  {
    id: "review-3",
    authorInitial: "김",
    authorName: "김서준",
    date: "2023년 10월 10일",
    rating: 5,
    comment:
      "선셋 타임에 예약했는데 인생 최고의 순간이었습니다. 해가 지는 바다 위에서 패들보드를 타는 기분은 정말 말로 표현할 수 없네요. 가이드님이 사진도 열정적으로 찍어주셔서 인생샷 건졌습니다.",
    photos: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCIrCTO5mMpYguWNCBJzyhmvV5ZUTn01_U4u84ZzG5o4gl_xioHPinR2Teb1Romb1LbkI8Eik4HcYqv8BJtwjiKbqqNaZWiYVu7ErpVTejmEgvvPILFN9ldAsEClmEodo71iiI8gDPzfybc6AMaNJ9f_iLCiFelzAD4CSMKfW3pi5I8SfFJDxX31kdRGb2Mu-9YTwK7Ihr8JVjei8v4VLCMBhiQYWXw_eIbiehAhMY2ZVvQQObCiGVc98OoCEHY1fDbIRUA4LIzEczf",
    ],
    helpfulCount: 42,
  },
  {
    id: "review-4",
    authorInitial: "김",
    authorName: "김바다",
    date: "2024년 5월 20일",
    rating: 5,
    comment:
      "정말 환상적인 경험이었어요! 가이드분들도 친절하셨습니다. 일몰 때 맞춰서 갔는데 인생샷 여러 개 건졌네요. 제주도 오면 꼭 다시 이용하고 싶어요.",
    photos: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCW1MXpykY9N7MKRk-k4_2q2UXNKSSLHZMYOiAp-c_et20GBLUlkIEkBZKnOcILQI6WJgNeIQfiLDfGGRIkK9lFBdzbuOZWFl8vpfOc-D4Xdq0h1SJMDUAFUD5NEtSi9miePv6Gf9aNx4d22V-0RmrWhL_Ex5r6nmLOknGDfVY3-RSnHFXz5eCsgQsFioXDK0yzvF1FH8I3-ynAhyV9eqYncNPL21olYYL2t74n1xXyBLKpbDO5GR_YNqnZdVMxUXwtIRHL9DA0FC-Q",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAinUhGEqP9iNXJFU_fOwv5WiCZkoT2BPnwDCtFAwLxpKjJKNDhjmnQueu4C5lShvqei5k3JHdqLXg2gLK-BrP9bUY2G5mCGQ1hBA6cCl8mpdpYIS2l0KBgB6fqEE_tUccOXthJj5ElCBqLB8ASlDYToflN6cOaZG-TVLL8Qbe22Nefy5rAsM3b7w6Cjx3FUo0mEUPTvtsF8vC5XKSX8BduYk6hj74GzFo-749g9V0m1ZqPHS64ThMhShhtYb6vL3MyhgMRwJj4etSr",
    ],
    helpfulCount: 15,
  },
  {
    id: "review-5",
    authorInitial: "박",
    authorName: "박서연",
    date: "2024년 5월 12일",
    rating: 3,
    comment:
      "혼자 여행와서 예약했는데 전혀 어색하지 않게 잘 챙겨주셨어요. 다만 날씨가 흐려서 사진이 생각만큼 나오지 않은 점은 아쉬웠습니다.",
    photos: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBKc_3JhsTonSSqoHSd6-RziQmDgt7UGL7OVxeUAoiy8TOtxu5HZWcwxlGMDcYIZHncoLZi8tuW0x54FM5-YiJyru_Bz-onE7l4cQjY_wH2MVgWZc2bFsP8ZxMKuVrXhxjkVOKIx9bHWIgn1-mf1Qo-LK-rtB_AXm3I6bxW286K7_YwVTelriltlFIraZL2ngDp5UQgJx9r_Mj7f0esmYfUx3jpae4RyqYd1TNl9e0Ac58kS87-4qQ4-F4UfWc8Hwns6PtwPRiXSmAP",
    ],
    helpfulCount: 5,
  },
];
