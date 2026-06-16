// TODO: Supabase 연동 시 getProductDetail(id) 쿼리로 교체
import type { ProductDetail } from "@/types/activity";

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCcmi_2fOzuArWlEaamvUtKE0nFBfPpS6xrCYa_M4XlO8usJ8A99kQe1AgiRhlVFbKiHBZ4hhvfm0SSptVABrzC_gBuV4K8XDD65AjUjxd4IsqzRnIb0fMmajMVCnbewVr-s27TEatg8W6WSl2J1M9fnPX81I4Jhr3RgbAuEWc6ieDfa1NlwZMknbNZc-tDlncANOhdkH3qM9GUEsVy6TXE9LSUcjfKPzchdCJESiiH7__bmdgDyzFXCtmMMYrr6oXP9wObKBvCtG3D";

export const PRODUCT_DETAIL: ProductDetail = {
  id: "activity-1",
  heroImageUrl: HERO_IMAGE,
  heroImageAlt: "크리스탈 코브의 투명한 에메랄드빛 바다와 패들보드",
  galleryImages: [
    { url: HERO_IMAGE, alt: "일출 패들보딩" },
    { url: HERO_IMAGE, alt: "투명한 바닷물 클로즈업" },
    { url: HERO_IMAGE, alt: "만(灣)의 항공샷" },
  ],
  tags: ["수상 스포츠", "초보자 환영"],
  title: "크리스탈 코브 가이드 패들보드 투어",
  rating: 4.9,
  reviewCount: 128,
  location: "아주르 베이",
  introTitle: "투명한 바다 위에서의 힐링",
  introDescription:
    "아침 햇살이 아래의 활기찬 해양 생태계를 비출 때 크리스탈 코브의 맑고 투명한 물 위를 미끄러지듯 나아가세요. 이 가이드 투어는 당신의 정신을 재충전하고 바다의 리듬과 깊이 교감할 수 있도록 설계되었습니다.",
  features: [
    {
      icon: "safety",
      title: "안전 제일",
      description: "전문 강사의 1:1 안전 교육 및 구명조끼 상시 착용",
    },
    {
      icon: "gear",
      title: "최고급 장비",
      description: "초보자도 안정적인 프리미엄 카본 패들보드 제공",
    },
  ],
  itinerary: [
    { step: 1, title: "기초 교육", description: "해변에서 패들링 기술 및 안전 수칙 숙지 (20분)" },
    { step: 2, title: "코브 탐험", description: "가이드와 함께 숨겨진 산호초 포인트 탐방 (60분)" },
    { step: 3, title: "자유 시간 및 포토타임", description: "아름다운 풍경을 배경으로 인생샷 촬영 (30분)" },
  ],
  safetyBadges: ["보험 가입 완료", "자격증 보유 강사", "소규모 그룹 진행"],
  reviews: [
    {
      id: "review-1",
      authorInitial: "M",
      authorName: "마커스 T.",
      date: "2023년 10월 15일",
      rating: 5,
      comment:
        "정말 숨이 멎을 듯한 경험이었습니다. 엘레나는 훌륭한 가이드였고, 물의 투명도는 믿을 수 없을 정도였습니다. 평화로운 아침을 위해 강력히 추천합니다. 장비도 훌륭했고 투어 내내 안전하게 느껴졌습니다.",
    },
    {
      id: "review-2",
      authorInitial: "S",
      authorName: "사라 J.",
      date: "2023년 9월 28일",
      rating: 4,
      comment:
        "휴식과 활동의 완벽한 조화. 제공된 장비는 최고급이었고 아주 깨끗했습니다. 다만 주차 공간을 찾기가 조금 어려웠던 점이 아쉬웠습니다. 그 외에는 완벽했습니다.",
    },
  ],
  pricePerPerson: 85000,
  currency: "₩",
};
