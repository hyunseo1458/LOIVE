export function StickyPaymentBar({
  totalPrice,
  currencySymbol,
  adultCount,
  childCount,
  disabled,
  missingMessage,
  isSubmitting,
  onSubmit,
}: {
  totalPrice: number;
  currencySymbol: string;
  adultCount: number;
  childCount: number;
  disabled: boolean;
  missingMessage?: string;
  isSubmitting?: boolean;
  onSubmit: () => void;
}) {
  return (
    <div className="fixed bottom-0 w-full z-50 bg-surface/90 backdrop-blur-xl border-t border-outline-variant/20 shadow-[0px_-8px_24px_rgba(0,0,0,0.05)] pb-safe px-container-margin pt-sm">
      <div className="max-w-3xl mx-auto flex flex-col gap-xs">
        {missingMessage && (
          <p className="text-label-md text-outline text-center">
            {missingMessage} 선택 후 결제할 수 있습니다
          </p>
        )}
        <div className="flex items-center justify-between gap-md pb-sm">
          <div className="flex flex-col">
            <span className="text-body-md text-outline">최종 결제 금액</span>
            <span className="text-price-display text-on-surface">
              {currencySymbol}
              {totalPrice.toLocaleString()}
            </span>
            <span className="text-label-md text-outline">
              성인 {adultCount}, 소인 {childCount}
            </span>
          </div>
          <button
            type="button"
            disabled={disabled || isSubmitting}
            onClick={!isSubmitting ? onSubmit : undefined}
            className="bg-coral text-on-error text-title-lg py-sm px-xl rounded-2xl hover:opacity-90 active:scale-95 transition-all flex-1 max-w-[200px] text-center shadow-md shadow-coral/20 disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100"
          >
            {isSubmitting ? "처리 중..." : "결제하기"}
          </button>
        </div>
      </div>
    </div>
  );
}
