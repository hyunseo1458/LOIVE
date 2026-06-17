// TODO: Supabase 연동 시 이 모듈을 실제 쿼리(예: getBanners, getPopularActivities, getCourses)로 교체
import type { Banner, Activity, Course, RegionCode } from "@/types/activity";

export const REGIONS: RegionCode[] = [
  "서울",
  "경기",
  "인천",
  "강원",
  "충북",
  "충남",
  "대전",
  "전북",
  "전남",
  "광주",
  "경북",
  "경남",
  "대구",
  "울산",
  "부산",
  "제주",
];

export const CATEGORIES = ["전체", "해양", "자연", "코스", "문화"] as const;

export const BANNERS: Banner[] = [
  {
    id: "banner-1",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAnLl5qtZieNSWnZNJWVAYcH4Ktkf7JmJcL0Xp4XSp82aYw8OYYs6kOXxhFaYjpSbI82eYD350q1MRi_xGVmerW-WPxkjBD5O52JiZspkNOb4KN2rwiw7fC0VmTMmhopmIqKBrAwBPaSrnNj5hOobrSCw3XuWjigv0bAoLsaqOsOcfU7OodxNqHPy0iBImG8ySZqjCmdyhA3J2tCtKsUTNVNlYOENNqNiQDmpbrERka8SPicL9HP20ltPcsDmcWEE_O8ajtgbsD06ee",
    imageAlt: "투명 카약 위에서 바라본 맑은 바다",
    tag: "인기",
    title: "투명 카약 체험",
    description: "애월 해안의 투명한 바다 위를 카약으로 누벼보세요. 1인 ₩45,000~",
    href: "/activities/activity-1",
  },
  {
    id: "banner-2",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDU1gn1e7aVL1aaitRyIClIUHokRF4rj6Vfq8WutKd6Zi-qhGYo0MT_ufkFRgPDyaPoSKWNrPyFUNFcHd_YRE65BdNtyiuy-fJHXDzwl6t1pxKhJETAf6qZnzC-vMV_vMT9tLdjZevlRFBB9h4xfmiqh4I31xo03_ZUyX2kzAnYvmYIDsOqpk0Ll65Vi2PAC2hUeQSPNpOHlwDZoCkk9PP9nf0sa9NK09TOL_3YjO1Brc4hYGceldhIURxjP9LR8qBAE10Unlo_3uDS",
    imageAlt: "백사장에서 파도를 바라보는 서퍼",
    tag: "특가",
    title: "프리미엄 서핑 강습",
    description: "중문 색달 해변에서 전문 강사와 함께하는 2시간 서핑. 1인 ₩60,000~",
    href: "/activities/activity-2",
  },
  {
    id: "banner-3",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAlZLMA1X5ZiBabutTEeuZAK8roJWvOINmjBLrIIEEBBlRa7zqv7DqMZWvAoEQkG8uNWDACPXIpTU-OjPp0JjmKEnmJ8mCk_BiYluo22zmBjc6ubZV5CuuutDPHjimE9fyjOFAHkG4CHe4zieiVAKCAC8oekfMOg-Soqu4vZapK2s5ScK5EAwWqrA2ixSBmPlFAzKKzF2lnILOb7BdrmZKbKQjKTgyHYNSkMZ34HGG6ss_X7-D1WFsOulVPqoefeE5l6ARoLq3Lx67l",
    imageAlt: "산호초 사이를 헤엄치는 스쿠버 다이버",
    tag: "추천",
    title: "해녀 체험 다이빙",
    description: "우도에서 즐기는 정통 해녀 체험. 장비 포함 1인 ₩80,000~",
    href: "/activities/activity-3",
  },
];

export const POPULAR_ACTIVITIES: Activity[] = [
  {
    id: "activity-1",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAnLl5qtZieNSWnZNJWVAYcH4Ktkf7JmJcL0Xp4XSp82aYw8OYYs6kOXxhFaYjpSbI82eYD350q1MRi_xGVmerW-WPxkjBD5O52JiZspkNOb4KN2rwiw7fC0VmTMmhopmIqKBrAwBPaSrnNj5hOobrSCw3XuWjigv0bAoLsaqOsOcfU7OodxNqHPy0iBImG8ySZqjCmdyhA3J2tCtKsUTNVNlYOENNqNiQDmpbrERka8SPicL9HP20ltPcsDmcWEE_O8ajtgbsD06ee",
    imageAlt: "투명 카약 위에서 바라본 맑은 바다",
    name: "투명 카약 체험",
    rating: 4.9,
    location: "애월 해안",
    price: 45000,
    priceLabel: "₩45,000",
    category: "해양",
    priceUnitLabel: "1인 기준",
    priceFrom: true,
    region: "제주",
  },
  {
    id: "activity-2",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDU1gn1e7aVL1aaitRyIClIUHokRF4rj6Vfq8WutKd6Zi-qhGYo0MT_ufkFRgPDyaPoSKWNrPyFUNFcHd_YRE65BdNtyiuy-fJHXDzwl6t1pxKhJETAf6qZnzC-vMV_vMT9tLdjZevlRFBB9h4xfmiqh4I31xo03_ZUyX2kzAnYvmYIDsOqpk0Ll65Vi2PAC2hUeQSPNpOHlwDZoCkk9PP9nf0sa9NK09TOL_3YjO1Brc4hYGceldhIURxjP9LR8qBAE10Unlo_3uDS",
    imageAlt: "백사장에서 파도를 바라보는 서퍼",
    name: "프리미엄 서핑 강습",
    rating: 4.8,
    location: "중문 색달 해변",
    price: 60000,
    priceLabel: "₩60,000",
    category: "해양",
    priceUnitLabel: "1인 기준 (2시간)",
    region: "제주",
  },
  {
    id: "activity-3",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAlZLMA1X5ZiBabutTEeuZAK8roJWvOINmjBLrIIEEBBlRa7zqv7DqMZWvAoEQkG8uNWDACPXIpTU-OjPp0JjmKEnmJ8mCk_BiYluo22zmBjc6ubZV5CuuutDPHjimE9fyjOFAHkG4CHe4zieiVAKCAC8oekfMOg-Soqu4vZapK2s5ScK5EAwWqrA2ixSBmPlFAzKKzF2lnILOb7BdrmZKbKQjKTgyHYNSkMZ34HGG6ss_X7-D1WFsOulVPqoefeE5l6ARoLq3Lx67l",
    imageAlt: "산호초 사이를 헤엄치는 스쿠버 다이버",
    name: "해녀 체험 다이빙",
    rating: 5.0,
    location: "우도",
    price: 80000,
    priceLabel: "₩80,000",
    category: "해양",
    priceUnitLabel: "1인 기준 (장비 포함)",
    region: "제주",
  },
];

export const COURSES: Course[] = [
  {
    id: "course-1",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCb87KLvzeu1cOmJaBeIjCtWqFM0LTCoWnHXvw7LKc1_fslTTnnkVagdE8Afsq72N8kRZtyUiDyxYMjeHBjiJsyhtwgEM_OIKlTOLe5VNPcBDx4ffU1gUNJDXiGu-M8SeCP-TMTWhuIhndghBCUjKAi1inLVNAO7qzLBf3m4VhEzKgwlPofWDSTXR3DCeYcG_QZGKspqca3QJPXGPVfWXzr6--4zcX9JRtKJfUi15j83Qr-fOR_oejzdleg0yYAvXFfuRopUh88KmBu",
    imageAlt: "푸른 잔디가 펼쳐진 해안 산책로",
    durationLabel: "2일 코스",
    durationColor: "coral",
    title: "동부 해안 힐링 로드",
    description: "한적한 산책로와 해변 카페, 바다 옆 요가 클래스.",
    tags: ["walk", "food"],
  },
  {
    id: "course-2",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDi3EfEq1zLefrgPpxgoyGhAY3yiU7tfIZAWYdpkuj9Kh8xSU_Crz9HmtMfs2X9aii7Kfj2q_7_fo8JqwFFga0FKPr0XS0O0OcZ2U6GqLmKr4DaaiqiUgSRMrv-hHyL7nxRs-4MMyZeSc7eYsa6mgqHewBayMW6af6smkIWAKDfoi-tpGvejZxvntQ3tJI-152x7rWKCbPNn7KKZ6lREr2PkhxxcXM29Jr80gb8rq8tgqpnhzWpS4nl8tTgdOOi73LYC9SmKwqqhYyY",
    imageAlt: "맑은 하늘 아래 항해하는 흰색 요트",
    durationLabel: "1일 코스",
    durationColor: "ocean-blue",
    title: "럭셔리 요트 투어",
    description: "선셋 세일링, 프리미엄 다이닝과 돌고래 와칭.",
    tags: ["sail", "drink"],
  },
];
