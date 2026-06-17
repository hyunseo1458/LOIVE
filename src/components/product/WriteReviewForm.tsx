"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { CalendarIcon, ExclamationCircleIcon, ArrowPathIcon } from "@heroicons/react/24/outline";
import { StarRatingSelector } from "./StarRatingSelector";
import { PhotoUploader } from "./PhotoUploader";

const MAX_CHARS = 1000;
const MIN_CHARS = 10;

export function WriteReviewForm({
  productId,
  productTitle,
  productImageUrl,
  productImageAlt,
  visitDateLabel,
}: {
  productId: string;
  productTitle: string;
  productImageUrl: string;
  productImageAlt: string;
  visitDateLabel: string;
}) {
  const router = useRouter();
  const [rating, setRating] = useState(0);
  const [photoPreviews, setPhotoPreviews] = useState<string[]>([]);
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const addPhotos = (files: File[]) => {
    // TODO: Supabase Storage 연동 시 File 객체를 별도로 보관해 업로드에 사용
    setPhotoPreviews((prev) => [...prev, ...files.map((f) => URL.createObjectURL(f))]);
  };

  const removePhoto = (index: number) => {
    setPhotoPreviews((prev) => {
      URL.revokeObjectURL(prev[index]);
      return prev.filter((_, i) => i !== index);
    });
  };

  const handleSubmit = () => {
    if (rating === 0) {
      setError("평점을 선택해 주세요.");
      return;
    }
    if (text.trim().length < MIN_CHARS) {
      setError(`리뷰 내용을 ${MIN_CHARS}자 이상 작성해 주세요.`);
      return;
    }
    setError("");
    setSubmitting(true);
    // TODO: Supabase 연동 후 실제 리뷰 등록 + 사진 업로드 로직으로 교체
    setTimeout(() => {
      router.push(`/activities/${productId}/reviews`);
    }, 1200);
  };

  return (
    <div className="min-h-screen pb-32">
      <main className="pt-24 px-container-margin max-w-2xl mx-auto flex flex-col gap-xl">
        <section className="flex items-center gap-4 bg-surface-container-low p-4 rounded-xl shadow-[0px_4px_12px_rgba(0,122,255,0.08)]">
          <div className="w-20 h-20 rounded-lg overflow-hidden relative shrink-0">
            <Image fill className="object-cover" alt={productImageAlt} src={productImageUrl} sizes="80px" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-title-lg text-on-surface">{productTitle}</h2>
            <p className="text-body-md text-on-surface-variant flex items-center gap-1">
              <CalendarIcon className="size-4" /> 방문일: {visitDateLabel}
            </p>
          </div>
        </section>

        <StarRatingSelector rating={rating} onChange={setRating} />
        <PhotoUploader previews={photoPreviews} onAdd={addPhotos} onRemove={removePhoto} />

        <section className="flex flex-col gap-md">
          <h3 className="text-title-lg">상세 리뷰</h3>
          <div className="relative">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value.slice(0, MAX_CHARS))}
              rows={6}
              placeholder="생생한 경험을 공유해 주세요! (장소의 분위기, 서비스, 팁 등)"
              className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-4 text-body-lg focus:outline-none focus:ring-2 focus:ring-ocean-blue/20 focus:border-ocean-blue transition-all resize-none"
            />
            <div className="absolute bottom-4 right-4 text-label-md text-outline">
              {text.length}/{MAX_CHARS}
            </div>
          </div>
        </section>
      </main>

      <div className="fixed bottom-0 w-full bg-surface/80 backdrop-blur-xl border-t border-outline-variant/30 py-4 px-container-margin z-50">
        <div className="max-w-2xl mx-auto flex flex-col gap-2">
          {error && (
            <p className="text-body-md text-error flex items-center gap-1.5">
              <ExclamationCircleIcon className="size-5 shrink-0" />
              {error}
            </p>
          )}
          <button
            type="button"
            disabled={submitting}
            onClick={handleSubmit}
            className="w-full h-14 bg-coral text-on-primary text-headline-md rounded-xl shadow-[0px_4px_12px_rgba(255,127,80,0.3)] transition-all flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {submitting ? (
              <>
                <ArrowPathIcon className="size-5 animate-spin" />
                등록 중...
              </>
            ) : (
              "리뷰 등록하기"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
