import { CheckCircleIcon } from "@heroicons/react/24/solid";

export function SafetyBadges({ badges }: { badges: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 mb-xl">
      {badges.map((badge) => (
        <div
          key={badge}
          className="flex items-center gap-1 px-3 py-1.5 bg-success-green/10 text-success-green rounded-full text-label-md"
        >
          <CheckCircleIcon className="size-4" /> {badge}
        </div>
      ))}
    </div>
  );
}
