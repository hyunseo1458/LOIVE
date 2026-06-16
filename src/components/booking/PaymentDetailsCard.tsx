import type { ReactNode } from "react";

const METHOD_LABEL: Record<string, string> = {
  kakaopay: "카카오페이",
  toss: "토스페이",
};

export function PaymentDetailsCard({
  amountLabel,
  method,
  reservationCode,
}: {
  amountLabel: string;
  method: string;
  reservationCode: string;
}) {
  return (
    <section className="bg-surface-container-low rounded-[20px] p-lg flex flex-col gap-md">
      <h3 className="text-title-lg text-on-surface border-b border-outline-variant/20 pb-sm">결제 정보</h3>
      <div className="flex flex-col gap-sm">
        <Row label="결제 금액">
          <span className="text-price-display text-primary">{amountLabel}</span>
        </Row>
        <Row label="결제 수단">
          <span className="text-body-md text-on-surface font-semibold">{METHOD_LABEL[method] ?? method}</span>
        </Row>
        <Row label="예약 번호">
          <span className="text-body-md text-on-surface font-semibold text-ocean-blue">{reservationCode}</span>
        </Row>
      </div>
    </section>
  );
}

function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-body-md text-on-surface-variant">{label}</span>
      {children}
    </div>
  );
}
