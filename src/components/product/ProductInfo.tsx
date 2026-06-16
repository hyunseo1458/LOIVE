import { StarIcon } from "@heroicons/react/24/solid";
import { MapPinIcon } from "@heroicons/react/24/outline";

export function ProductInfo({
  tags,
  title,
  rating,
  reviewCount,
  location,
}: {
  tags: string[];
  title: string;
  rating: number;
  reviewCount: number;
  location: string;
}) {
  return (
    <div className="mb-lg">
      <div className="flex gap-2 mb-sm flex-wrap">
        {tags.map((tag, index) => (
          <span
            key={tag}
            className={`px-3 py-1 rounded-full text-label-md uppercase tracking-wider ${
              index === 0
                ? "bg-primary-fixed/50 text-on-primary-fixed-variant"
                : "bg-surface-container-high text-on-surface-variant"
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
      <h1 className="text-headline-lg-mobile md:text-headline-lg text-on-surface mb-2 leading-tight">
        {title}
      </h1>
      <div className="flex items-center gap-4 text-outline text-body-md">
        <div className="flex items-center gap-1">
          <StarIcon className="size-4.5 text-coral" />
          <span className="text-title-lg text-on-surface">{rating}</span>
          <span>({reviewCount}개 리뷰)</span>
        </div>
        <div className="w-1 h-1 rounded-full bg-outline-variant" />
        <div className="flex items-center gap-1">
          <MapPinIcon className="size-4.5" />
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
}
