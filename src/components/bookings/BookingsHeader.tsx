import { UserCircleIcon } from "@heroicons/react/24/outline";

export function BookingsHeader() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-sm h-16 flex items-center justify-between px-container-margin">
      <span className="text-ocean-blue text-[20px] font-extrabold tracking-tight">로이브</span>
      {/* TODO: 내 정보 화면 포팅 후 연결 */}
      <button type="button" aria-label="마이페이지" disabled className="text-ocean-blue opacity-50">
        <UserCircleIcon className="size-6" />
      </button>
    </header>
  );
}
