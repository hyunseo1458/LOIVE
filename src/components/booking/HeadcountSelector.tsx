"use client";

import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

type Props = {
  adultCount: number;
  childCount: number;
  adultPrice: number;
  childPrice: number;
  currencySymbol: string;
  onAdultChange: (count: number) => void;
  onChildChange: (count: number) => void;
};

export function HeadcountSelector({
  adultCount,
  childCount,
  adultPrice,
  childPrice,
  currencySymbol,
  onAdultChange,
  onChildChange,
}: Props) {
  return (
    <section className="bg-surface-container-lowest rounded-[20px] p-lg shadow-[0px_4px_12px_rgba(0,122,255,0.08)]">
      <h3 className="text-title-lg text-on-surface mb-lg">인원 선택</h3>
      <div className="flex flex-col gap-md">
        <Counter
          label="성인"
          sublabel="13세 이상"
          priceLabel={`${currencySymbol}${adultPrice.toLocaleString()} /인`}
          count={adultCount}
          min={1}
          onChange={onAdultChange}
        />
        <hr className="border-outline-variant/30" />
        <Counter
          label="소인"
          sublabel="2세-12세"
          priceLabel={`${currencySymbol}${childPrice.toLocaleString()} /인`}
          count={childCount}
          min={0}
          onChange={onChildChange}
        />
      </div>
    </section>
  );
}

function Counter({
  label,
  sublabel,
  priceLabel,
  count,
  min,
  onChange,
}: {
  label: string;
  sublabel: string;
  priceLabel: string;
  count: number;
  min: number;
  onChange: (count: number) => void;
}) {
  const atMin = count <= min;

  return (
    <div className="flex items-center justify-between py-2">
      <div>
        <p className="text-body-lg font-semibold text-on-surface">{label}</p>
        <p className="text-body-md text-outline">{sublabel}</p>
        <p className="text-label-md text-ocean-blue mt-1">{priceLabel}</p>
      </div>
      <div className="flex items-center gap-sm">
        <button
          type="button"
          aria-label={`${label} 감소`}
          disabled={atMin}
          onClick={() => onChange(count - 1)}
          className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-outline hover:bg-surface-container transition-colors active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <MinusIcon className="size-4.5" />
        </button>
        <span className="text-title-lg w-6 text-center">{count}</span>
        <button
          type="button"
          aria-label={`${label} 증가`}
          onClick={() => onChange(count + 1)}
          className="w-10 h-10 rounded-full border border-ocean-blue bg-ocean-blue/10 flex items-center justify-center text-ocean-blue hover:bg-ocean-blue/20 transition-colors active:scale-95"
        >
          <PlusIcon className="size-4.5" />
        </button>
      </div>
    </div>
  );
}
