"use client";

export function TermsAgreement({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <section className="px-sm">
      <label className="flex items-start gap-sm cursor-pointer group">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="mt-1 w-5 h-5 rounded border-outline-variant text-ocean-blue focus:ring-ocean-blue/20 transition-colors cursor-pointer"
        />
        <span className="text-body-md text-outline">
          <a className="text-ocean-blue hover:underline" href="#">
            서비스 이용약관
          </a>{" "}
          및{" "}
          <a className="text-ocean-blue hover:underline" href="#">
            개인정보 처리방침
          </a>
          에 동의합니다.
        </span>
      </label>
    </section>
  );
}
