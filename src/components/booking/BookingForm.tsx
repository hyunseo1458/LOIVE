"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { BookingProduct, PaymentMethod } from "@/types/booking";
import { generateReservationCode } from "@/lib/reservation-code";
import { BookingHeader } from "./BookingHeader";
import { ProductSummaryCard } from "./ProductSummaryCard";
import { DateSelectionCalendar } from "./DateSelectionCalendar";
import { HeadcountSelector } from "./HeadcountSelector";
import { SpecialRequestsField } from "./SpecialRequestsField";
import { PaymentMethodSelector } from "./PaymentMethodSelector";
import { TermsAgreement } from "./TermsAgreement";
import { StickyPaymentBar } from "./StickyPaymentBar";

export function BookingForm({ product }: { product: BookingProduct }) {
  const router = useRouter();
  const [selectedDay, setSelectedDay] = useState<number | null>(product.defaultSelectedDay);
  const [adultCount, setAdultCount] = useState(2);
  const [childCount, setChildCount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(null);
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalPrice = adultCount * product.adultPrice + childCount * product.childPrice;
  const canSubmit = selectedDay !== null && paymentMethod !== null && termsAgreed;

  const missingItems = [
    selectedDay === null && "날짜",
    paymentMethod === null && "결제 수단",
    !termsAgreed && "약관 동의",
  ].filter(Boolean) as string[];
  const missingMessage = !canSubmit ? missingItems.join(", ") : undefined;

  const handleSubmit = () => {
    if (!canSubmit || selectedDay === null || paymentMethod === null || isSubmitting) return;
    setIsSubmitting(true);
    // TODO: 실제 PG(카카오페이/토스페이) 연동 전까지는 결제 완료 화면으로 바로 이동
    const params = new URLSearchParams({
      amount: String(totalPrice),
      method: paymentMethod,
      day: String(selectedDay),
      adults: String(adultCount),
      children: String(childCount),
      code: generateReservationCode(product.monthLabel, selectedDay),
    });
    router.push(`/booking/${product.id}/complete?${params.toString()}`);
  };

  return (
    <div className="min-h-screen pb-[120px]">
      <BookingHeader productId={product.id} step={1} totalSteps={2} />

      <main className="pt-[72px] px-container-margin max-w-3xl mx-auto flex flex-col gap-xl">
        <ProductSummaryCard product={product} />

        <DateSelectionCalendar
          monthLabel={product.monthLabel}
          days={product.calendarDays}
          selectedDay={selectedDay}
          onSelect={setSelectedDay}
        />

        <HeadcountSelector
          adultCount={adultCount}
          childCount={childCount}
          adultPrice={product.adultPrice}
          childPrice={product.childPrice}
          currencySymbol={product.currencySymbol}
          onAdultChange={(count) => setAdultCount(Math.max(1, count))}
          onChildChange={(count) => setChildCount(Math.max(0, count))}
        />

        <SpecialRequestsField />
        <PaymentMethodSelector selected={paymentMethod} onChange={setPaymentMethod} />
        <TermsAgreement checked={termsAgreed} onChange={setTermsAgreed} />
      </main>

      <StickyPaymentBar
        totalPrice={totalPrice}
        currencySymbol={product.currencySymbol}
        adultCount={adultCount}
        childCount={childCount}
        disabled={!canSubmit}
        missingMessage={missingMessage}
        isSubmitting={isSubmitting}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
