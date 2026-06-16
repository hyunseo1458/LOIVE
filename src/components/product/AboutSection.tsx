import Image from "next/image";
import { ShieldCheckIcon, LifebuoyIcon } from "@heroicons/react/24/outline";
import type { FeatureHighlight } from "@/types/activity";

const FEATURE_ICON: Record<FeatureHighlight["icon"], typeof ShieldCheckIcon> = {
  safety: ShieldCheckIcon,
  gear: LifebuoyIcon,
};

export function AboutSection({
  galleryImages,
  introTitle,
  introDescription,
  features,
}: {
  galleryImages: { url: string; alt: string }[];
  introTitle: string;
  introDescription: string;
  features: FeatureHighlight[];
}) {
  return (
    <div className="mb-xl">
      <h2 className="text-title-lg text-on-surface mb-lg">활동 소개</h2>

      <div className="mb-xl">
        <div className="flex gap-3 overflow-x-auto no-scrollbar mb-md -mx-container-margin px-container-margin">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative w-[280px] h-64 shrink-0 rounded-2xl overflow-hidden shadow-sm">
              <Image fill className="object-cover" alt={image.alt} src={image.url} sizes="280px" />
            </div>
          ))}
        </div>
        <h3 className="text-title-lg text-on-surface mb-2">{introTitle}</h3>
        <p className="text-body-lg text-on-surface-variant leading-relaxed">{introDescription}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-xl">
        {features.map((feature) => {
          const Icon = FEATURE_ICON[feature.icon];
          return (
            <div key={feature.title} className="p-4 bg-surface-container-low rounded-2xl border border-surface-variant">
              <Icon className="size-8 text-ocean-blue mb-2" />
              <h4 className="text-title-lg text-on-surface mb-1">{feature.title}</h4>
              <p className="text-body-md text-on-surface-variant">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
