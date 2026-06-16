import Image from "next/image";
import { CalendarIcon, MapPinIcon } from "@heroicons/react/24/outline";

export function CompletionSummaryCard({
  imageUrl,
  imageAlt,
  title,
  dateLabel,
  location,
}: {
  imageUrl: string;
  imageAlt: string;
  title: string;
  dateLabel: string;
  location: string;
}) {
  return (
    <section className="bg-surface-container-lowest rounded-[20px] shadow-[0_4px_12px_rgba(0,122,255,0.08)] overflow-hidden border border-outline-variant/20">
      <div className="h-[180px] w-full relative">
        <Image fill className="object-cover" alt={imageAlt} src={imageUrl} sizes="100vw" />
      </div>
      <div className="p-lg flex flex-col gap-sm">
        <h2 className="text-title-lg text-on-surface">{title}</h2>
        <div className="flex flex-col gap-xs mt-xs">
          <div className="flex items-center gap-sm text-on-surface-variant text-body-md">
            <CalendarIcon className="size-4.5" />
            <span>{dateLabel}</span>
          </div>
          <div className="flex items-center gap-sm text-on-surface-variant text-body-md">
            <MapPinIcon className="size-4.5" />
            <span>{location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
