"use client";

import type { PaymentMethod } from "@/types/booking";

// 정책: 자체 신용카드 결제 UI 금지, 카카오페이/토스페이만 제공 (CLAUDE.md 하드 제약)
const METHODS: { value: PaymentMethod; label: string; bg: string; textColor: string; mark: string }[] = [
  { value: "kakaopay", label: "카카오페이", bg: "bg-[#FEE500]", textColor: "text-black", mark: "K" },
  { value: "toss", label: "토스페이", bg: "bg-[#0050FF]", textColor: "text-white", mark: "T" },
];

export function PaymentMethodSelector({
  selected,
  onChange,
}: {
  selected: PaymentMethod | null;
  onChange: (method: PaymentMethod) => void;
}) {
  return (
    <section className="bg-surface-container-lowest rounded-[20px] p-lg shadow-[0px_4px_12px_rgba(0,122,255,0.08)]">
      <h3 className="text-title-lg text-on-surface mb-lg">결제 수단</h3>
      <div className="flex flex-col gap-sm">
        {METHODS.map((method) => {
          const isSelected = method.value === selected;
          return (
            <label key={method.value} className="block relative cursor-pointer group">
              <input
                type="radio"
                name="payment_method"
                value={method.value}
                checked={isSelected}
                onChange={() => onChange(method.value)}
                className="sr-only"
              />
              <div
                className={`border rounded-xl p-md flex items-center transition-colors group-hover:border-ocean-blue/50 ${
                  isSelected ? "border-ocean-blue bg-ocean-blue/5" : "border-outline-variant"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full border-2 mr-md relative transition-colors ${
                    isSelected ? "border-ocean-blue bg-ocean-blue" : "border-outline-variant"
                  }`}
                >
                  {isSelected && (
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-on-primary" />
                    </span>
                  )}
                </div>
                <div className={`w-8 h-8 ${method.bg} rounded flex items-center justify-center mr-sm shrink-0`}>
                  <span className={`font-bold ${method.textColor} text-xs`}>{method.mark}</span>
                </div>
                <span className="text-body-lg text-on-surface font-medium flex-1">{method.label}</span>
              </div>
            </label>
          );
        })}
      </div>
    </section>
  );
}
