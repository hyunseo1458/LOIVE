import { CATEGORIES } from "@/data/mock-home";

export function CategoryFilterChips({
  active,
  onChange,
}: {
  active: (typeof CATEGORIES)[number];
  onChange: (category: (typeof CATEGORIES)[number]) => void;
}) {
  return (
    <div className="flex gap-xs overflow-x-auto no-scrollbar pb-2 pt-1 -mx-container-margin px-container-margin">
      {CATEGORIES.map((category) => {
        const isActive = category === active;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            className={`px-5 py-2 rounded-full text-label-md whitespace-nowrap transition-colors ${
              isActive
                ? "bg-on-surface text-on-primary shadow-sm"
                : "bg-surface-container-highest text-on-surface-variant hover:bg-surface-variant"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
