import Link from "next/link";
import { ArrowLeftIcon, UserCircleIcon } from "@heroicons/react/24/outline";

export function CompletionHeader({ backHref }: { backHref: string }) {
  return (
    <header className="bg-surface/80 backdrop-blur-xl fixed top-0 w-full z-50 border-b border-outline-variant/30 shadow-sm flex items-center justify-between px-container-margin h-16">
      <Link href={backHref} aria-label="뒤로 가기" className="text-on-surface-variant hover:opacity-80 active:scale-95 transition-transform">
        <ArrowLeftIcon className="size-6" />
      </Link>
      <div className="text-ocean-blue tracking-tighter text-headline-md font-extrabold">LOIVE</div>
      <Link href="/profile" aria-label="마이페이지" className="text-on-surface-variant hover:opacity-80 active:scale-95 transition-transform">
        <UserCircleIcon className="size-6" />
      </Link>
    </header>
  );
}
