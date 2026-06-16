import Image from "next/image";
import { CalendarIcon, MapPinIcon } from "@heroicons/react/24/outline";
import type { BookingProduct } from "@/types/booking";

export function ProductSummaryCard({ product }: { product: BookingProduct }) {
  return (
    <section className="bg-surface-container-lowest rounded-[20px] p-md shadow-[0px_4px_12px_rgba(0,122,255,0.08)]">
      <div className="flex gap-md items-start">
        <div className="w-24 h-24 relative rounded-lg overflow-hidden shrink-0 bg-surface-container">
          <Image fill className="object-cover" alt={product.imageAlt} src={product.imageUrl} sizes="96px" />
        </div>
        <div className="flex-1">
          <span className="inline-block px-2 py-1 bg-primary-fixed text-on-primary-fixed text-label-md rounded mb-2">
            {product.categoryLabel}
          </span>
          <h2 className="text-title-lg text-on-surface mb-1">{product.title}</h2>
          <p className="text-body-md text-outline flex items-center gap-1">
            <CalendarIcon className="size-4" /> {product.dateRangeLabel}
          </p>
          <p className="text-body-md text-outline flex items-center gap-1 mt-1">
            <MapPinIcon className="size-4" /> {product.location}
          </p>
        </div>
      </div>
    </section>
  );
}
