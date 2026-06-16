import type { ItineraryStep } from "@/types/activity";

export function ItineraryList({ steps }: { steps: ItineraryStep[] }) {
  return (
    <div className="mb-xl">
      <div className="bg-surface-container-highest rounded-2xl p-6 mb-md">
        <h3 className="text-title-lg text-on-surface mb-4">투어 일정 (What to expect)</h3>
        <ul className="flex flex-col gap-4">
          {steps.map((step) => (
            <li key={step.step} className="flex gap-3">
              <span className="text-title-lg text-ocean-blue">{String(step.step).padStart(2, "0")}</span>
              <div>
                <p className="text-title-lg text-on-surface">{step.title}</p>
                <p className="text-body-md text-on-surface-variant">{step.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
