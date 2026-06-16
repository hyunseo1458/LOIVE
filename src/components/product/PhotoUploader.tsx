"use client";

import { useId } from "react";
import { CameraIcon, XMarkIcon } from "@heroicons/react/24/outline";

const MAX_PHOTOS = 5;

export function PhotoUploader({
  previews,
  onAdd,
  onRemove,
}: {
  previews: string[];
  onAdd: (files: File[]) => void;
  onRemove: (index: number) => void;
}) {
  const inputId = useId();

  return (
    <section className="flex flex-col gap-md">
      <div className="flex justify-between items-end">
        <h3 className="text-title-lg">사진 추가</h3>
        <span className="text-label-md text-outline">최대 {MAX_PHOTOS}장</span>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {previews.length < MAX_PHOTOS && (
          <label
            htmlFor={inputId}
            className="shrink-0 w-24 h-24 bg-surface-container-high rounded-xl border-2 border-dashed border-outline-variant flex flex-col items-center justify-center cursor-pointer hover:border-ocean-blue transition-colors group"
          >
            <input
              id={inputId}
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={(e) => {
                if (e.target.files) onAdd(Array.from(e.target.files).slice(0, MAX_PHOTOS - previews.length));
                e.target.value = "";
              }}
            />
            <CameraIcon className="size-6 text-outline group-hover:text-ocean-blue" />
            <span className="text-label-md text-outline group-hover:text-ocean-blue mt-1">업로드</span>
          </label>
        )}

        {previews.map((src, index) => (
          <div key={src} className="relative shrink-0 w-24 h-24 rounded-xl overflow-hidden shadow-sm group">
            {/* eslint-disable-next-line @next/next/no-img-element -- 로컬 객체 URL 미리보기라 next/image 최적화 대상이 아님 */}
            <img alt={`업로드한 사진 ${index + 1}`} className="w-full h-full object-cover" src={src} />
            <button
              type="button"
              aria-label="사진 삭제"
              onClick={() => onRemove(index)}
              className="absolute top-1 right-1 bg-black/40 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <XMarkIcon className="size-3" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
