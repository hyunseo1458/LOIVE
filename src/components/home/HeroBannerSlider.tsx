"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BANNERS } from "@/data/mock-home";

const SLIDE_INTERVAL = 3000;

export function HeroBannerSlider() {
  const [active, setActive] = useState(0);
  const router = useRouter();
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isDragging = useRef(false);

  const resetInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % BANNERS.length);
    }, SLIDE_INTERVAL);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % BANNERS.length);
    }, SLIDE_INTERVAL);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    isDragging.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = Math.abs(e.touches[0].clientX - touchStartX.current);
    const dy = Math.abs(e.touches[0].clientY - touchStartY.current);
    if (dx > dy) isDragging.current = true;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (isDragging.current && Math.abs(diff) > 40) {
      setActive((prev) =>
        diff > 0 ? (prev + 1) % BANNERS.length : (prev - 1 + BANNERS.length) % BANNERS.length,
      );
      resetInterval();
    }
    touchStartX.current = null;
    touchStartY.current = null;
    isDragging.current = false;
  };

  const handleClick = () => {
    if (isDragging.current) return;
    router.push(BANNERS[active].href);
  };

  return (
    <section className="px-container-margin md:px-0 mb-xl relative">
      <div
        className="w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden relative shadow-[0px_4px_12px_rgba(0,122,255,0.08)] cursor-pointer select-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onClick={handleClick}
      >
        <div className="absolute inset-0 bg-surface-container-high animate-skeleton-pulse" />
        {BANNERS.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === active ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              fill
              className="object-cover"
              alt={banner.imageAlt}
              src={banner.imageUrl}
              sizes="100vw"
              priority={index === 0}
            />
            <div className="absolute inset-x-0 bottom-0 bg-on-surface/70 backdrop-blur-sm flex flex-col p-lg">
              <span className="bg-coral text-on-error px-xs py-0.5 rounded text-label-md w-max mb-sm">
                {banner.tag}
              </span>
              <h2 className="text-on-primary text-headline-lg-mobile md:text-headline-lg mb-xs">
                {banner.title}
              </h2>
              <p className="text-on-primary/90 text-body-md md:text-body-lg max-w-sm">
                {banner.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-sm">
        {BANNERS.map((banner, index) => (
          <button
            key={banner.id}
            type="button"
            onClick={() => {
              setActive(index);
              resetInterval();
            }}
            aria-label={`${index + 1}번째 배너로 이동`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === active ? "w-6 bg-ocean-blue" : "w-1.5 bg-surface-variant"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
