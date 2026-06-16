import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";

export function ProfileHeader() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/20 shadow-sm">
      <div className="flex items-center justify-between px-container-margin h-16 w-full max-w-7xl mx-auto">
        <h1 className="text-headline-md text-ocean-blue">내 정보</h1>
        <div className="flex gap-4">
          {/* TODO: 알림/설정 화면 포팅 후 연결 */}
          <button type="button" aria-label="알림" disabled className="text-outline opacity-50">
            <BellIcon className="size-6" />
          </button>
          <button type="button" aria-label="설정" disabled className="text-outline opacity-50">
            <Cog6ToothIcon className="size-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
