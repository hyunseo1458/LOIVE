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
  price: number;
  priceLabel: string;
  category?: string;
  priceUnitLabel?: string;
  priceFrom?: boolean;
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

export type ItineraryStep = {
  step: number;
  title: string;
  description: string;
};

export type FeatureHighlight = {
  icon: "safety" | "gear";
  title: string;
  description: string;
};

export type Review = {
  id: string;
  authorInitial: string;
  authorName: string;
  avatarUrl?: string;
  date: string;
  rating: number;
  comment: string;
  photos?: string[];
  helpfulCount?: number;
};

export type RatingBreakdown = {
  average: number;
  total: number;
  counts: { stars: 5 | 4 | 3 | 2 | 1; percent: number }[];
};

export type ProductDetail = {
  id: string;
  heroImageUrl: string;
  heroImageAlt: string;
  galleryImages: { url: string; alt: string }[];
  tags: string[];
  title: string;
  rating: number;
  reviewCount: number;
  location: string;
  introTitle: string;
  introDescription: string;
  features: FeatureHighlight[];
  itinerary: ItineraryStep[];
  safetyBadges: string[];
  reviews: Review[];
  pricePerPerson: number;
  currency: string;
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
