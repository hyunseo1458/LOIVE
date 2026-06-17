import { ArrowsUpDownIcon } from "@heroicons/react/24/outline";

export const SORT_OPTIONS = ["추천순", "평점 높은순", "가격 낮은순", "가격 높은순"] as const;
export type SortOption = (typeof SORT_OPTIONS)[number];

export function SortControl({ value, onChange }: { value: SortOption; onChange: (next: SortOption) => void }) {
  const cycleNext = () => {
    const currentIndex = SORT_OPTIONS.indexOf(value);
    onChange(SORT_OPTIONS[(currentIndex + 1) % SORT_OPTIONS.length]);
  };

  return (
    <div className="flex justify-end pt-1">
      <button
        type="button"
        onClick={cycleNext}
        className="flex items-center gap-1 text-outline text-label-md hover:text-on-surface transition-colors"
      >
        <ArrowsUpDownIcon className="size-4" />
        {value}
      </button>
    </div>
  );
}
