import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { ShareButton } from "./ShareButton";

export function ProductGallery({
  imageUrl,
  imageAlt,
  title,
  dotCount = 4,
}: {
  imageUrl: string;
  imageAlt: string;
  title: string;
  dotCount?: number;
}) {
  return (
    <section className="relative w-full h-[397px] md:h-[486px] bg-surface-variant overflow-hidden">
      <Image fill priority className="object-cover object-center" alt={imageAlt} src={imageUrl} sizes="100vw" />

      <div className="absolute top-0 left-0 w-full p-container-margin pt-12 flex justify-between items-center z-20">
        <Link
          href="/"
          aria-label="뒤로 가기"
          className="w-10 h-10 rounded-full bg-surface/80 backdrop-blur-xl flex items-center justify-center text-ocean-blue shadow-sm hover:scale-95 transition-transform"
        >
          <ArrowLeftIcon className="size-5" />
        </Link>
        <ShareButton title={title} />
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {Array.from({ length: dotCount }).map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full shadow-sm ${index === 0 ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  );
}
