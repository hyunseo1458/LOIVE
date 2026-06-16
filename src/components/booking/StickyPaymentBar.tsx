export function StickyPaymentBar({
  totalPrice,
  currencySymbol,
  adultCount,
  childCount,
  disabled,
  onSubmit,
}: {
  totalPrice: number;
  currencySymbol: string;
  adultCount: number;
  childCount: number;
  disabled: boolean;
  onSubmit: () => void;
}) {
  return (
    <div className="fixed bottom-0 w-full z-50 bg-surface/90 backdrop-blur-xl border-t border-outline-variant/20 shadow-[0px_-8px_24px_rgba(0,0,0,0.05)] pb-safe px-container-margin py-md">
      <div className="max-w-3xl mx-auto flex items-center justify-between gap-md">
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
        {/* TODO: 결제 완료 화면 포팅 + 실제 PG(카카오페이/토스페이) 연동 후 실제 결제 흐름으로 교체 */}
        <button
          type="button"
          disabled={disabled}
          onClick={onSubmit}
          className="bg-coral text-on-error text-title-lg py-sm px-xl rounded-2xl hover:opacity-90 active:scale-95 transition-all flex-1 max-w-[200px] text-center shadow-md shadow-coral/20 disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100"
        >
          결제하기
        </button>
      </div>
    </div>
  );
}
