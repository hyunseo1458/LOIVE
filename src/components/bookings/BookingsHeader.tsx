import Link from "next/link";
import { UserCircleIcon } from "@heroicons/react/24/outline";

export function BookingsHeader() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-sm h-16 flex items-center justify-between px-container-margin">
      <span className="text-ocean-blue text-[20px] font-extrabold tracking-tight">로이브</span>
      <Link href="/profile" aria-label="마이페이지" className="text-ocean-blue hover:opacity-80 active:scale-95 transition-transform">
        <UserCircleIcon className="size-6" />
      </Link>
    </header>
  );
}
