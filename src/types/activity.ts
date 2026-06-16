export type Banner = {
  id: string;
  imageUrl: string;
  imageAlt: string;
  tag: string;
  title: string;
  description: string;
};

export type Activity = {
  id: string;
  imageUrl: string;
  imageAlt: string;
  name: string;
  rating: number;
  location: string;
  priceLabel: string;
};

export type CourseTag = {
  icon: "walk" | "food" | "sail" | "drink";
};

export type Course = {
  id: string;
  imageUrl: string;
  imageAlt: string;
  durationLabel: string;
  durationColor: "coral" | "ocean-blue";
  title: string;
  description: string;
  tags: CourseTag["icon"][];
};

export type RegionCode =
  | "서울"
  | "경기"
  | "인천"
  | "강원"
  | "충북"
  | "충남"
  | "대전"
  | "전북"
  | "전남"
  | "광주"
  | "경북"
  | "경남"
  | "대구"
  | "울산"
  | "부산"
  | "제주";
