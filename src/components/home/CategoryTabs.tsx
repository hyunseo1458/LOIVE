import { CATEGORIES } from "@/data/mock-home";

export function CategoryTabs({
  active,
  onChange,
}: {
  active: (typeof CATEGORIES)[number];
  onChange: (category: (typeof CATEGORIES)[number]) => void;
}) {
  return (
    <div className="px-container-margin md:px-0 mb-lg overflow-x-auto no-scrollbar">
      <div className="flex gap-sm">
        {CATEGORIES.map((category) => {
          const isActive = category === active;
          return (
            <button
              key={category}
              type="button"
              onClick={() => onChange(category)}
              className={`px-md py-xs rounded-full text-label-md whitespace-nowrap transition-all active:scale-95 ${
                isActive
                  ? "bg-on-surface text-on-primary shadow-sm"
                  : "bg-surface text-outline border border-outline-variant/30 hover:bg-surface-container-low hover:text-on-surface"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}
