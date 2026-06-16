"use client";

import { useState } from "react";
import Image from "next/image";
import { BANNERS } from "@/data/mock-home";

export function HeroBannerSlider() {
  const [active, setActive] = useState(0);

  return (
    <section className="px-container-margin md:px-0 mb-xl relative">
      <div className="w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden relative shadow-[0px_4px_12px_rgba(0,122,255,0.08)]">
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
            {/* 그라데이션 대신 텍스트 영역만 단색 반투명 패널로 가독성 확보 (DESIGN.md 그라데이션 금지 규칙) */}
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

      {BANNERS.length > 1 && (
        <div className="flex justify-center gap-2 mt-sm">
          {BANNERS.map((banner, index) => (
            <button
              key={banner.id}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`${index + 1}번째 배너로 이동`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === active ? "w-6 bg-ocean-blue" : "w-1.5 bg-surface-variant"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
