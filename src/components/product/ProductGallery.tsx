import Image from "next/image";
import { ShareButton } from "./ShareButton";
import { BackButton } from "@/components/shared/BackButton";

export function ProductGallery({
  imageUrl,
  imageAlt,
  title,
}: {
  imageUrl: string;
  imageAlt: string;
  title: string;
}) {
  return (
    <section className="relative w-full h-[397px] md:h-[486px] bg-surface-variant overflow-hidden">
      <Image fill priority className="object-cover object-center" alt={imageAlt} src={imageUrl} sizes="100vw" />

      <div className="absolute top-0 left-0 w-full p-container-margin pt-12 flex justify-between items-center z-20">
        <BackButton className="w-10 h-10 rounded-full bg-surface/80 backdrop-blur-xl flex items-center justify-center text-ocean-blue shadow-sm hover:scale-95 transition-transform" />
        <ShareButton title={title} />
      </div>
    </section>
  );
}
