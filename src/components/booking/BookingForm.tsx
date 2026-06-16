"use client";

import { useState } from "react";
import type { BookingProduct, PaymentMethod } from "@/types/booking";
import { BookingHeader } from "./BookingHeader";
import { ProductSummaryCard } from "./ProductSummaryCard";
import { DateSelectionCalendar } from "./DateSelectionCalendar";
import { HeadcountSelector } from "./HeadcountSelector";
import { SpecialRequestsField } from "./SpecialRequestsField";
import { PaymentMethodSelector } from "./PaymentMethodSelector";
import { TermsAgreement } from "./TermsAgreement";
import { StickyPaymentBar } from "./StickyPaymentBar";

export function BookingForm({ product }: { product: BookingProduct }) {
  const [selectedDay, setSelectedDay] = useState<number | null>(product.defaultSelectedDay);
  const [adultCount, setAdultCount] = useState(2);
  const [childCount, setChildCount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(null);
  const [termsAgreed, setTermsAgreed] = useState(false);

  const totalPrice = adultCount * product.adultPrice + childCount * product.childPrice;
  const canSubmit = selectedDay !== null && paymentMethod !== null && termsAgreed;

  return (
    <div className="min-h-screen pb-[120px]">
      <BookingHeader productId={product.id} />

      <main className="pt-24 px-container-margin max-w-3xl mx-auto flex flex-col gap-xl">
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
        onSubmit={() => {
          // TODO: 결제 완료 화면 포팅 + PG 연동 후 실제 제출 로직으로 교체
        }}
      />
    </div>
  );
}
