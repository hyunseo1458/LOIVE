import Link from "next/link";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export function ExploreHeader() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/20 shadow-sm flex items-center justify-between px-container-margin h-16 max-w-7xl mx-auto">
      <Link href="/" aria-label="홈으로" className="text-ocean-blue hover:opacity-80 transition-opacity active:scale-95">
        <span className="text-[24px] font-extrabold tracking-tight">로이브</span>
      </Link>
      <h1 className="text-headline-md-mobile md:text-headline-md text-on-surface tracking-tight">인기 액티비티</h1>
      {/* TODO: 검색 화면 포팅 후 연결 */}
      <button type="button" aria-label="검색" disabled className="text-ocean-blue opacity-50">
        <MagnifyingGlassIcon className="size-7" />
      </button>
    </header>
  );
}
