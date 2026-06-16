"use client";

import { useId, useState } from "react";

export function SpecialRequestsField() {
  const id = useId();
  const [value, setValue] = useState("");

  return (
    <section className="bg-surface-container-lowest rounded-[20px] p-lg shadow-[0px_4px_12px_rgba(0,122,255,0.08)]">
      <h3 className="text-title-lg text-on-surface mb-sm">요청사항</h3>
      <p className="text-body-md text-outline mb-md">렌탈 장비 사이즈나 알레르기 등 요청사항을 적어주세요.</p>
      <textarea
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={3}
        placeholder="예: 슈트 M 사이즈 필요, 채식 메뉴 희망 등..."
        className="w-full border border-outline-variant rounded-lg p-sm text-body-md text-on-surface bg-surface resize-none focus:outline-none focus:border-ocean-blue transition-colors"
      />
    </section>
  );
}
