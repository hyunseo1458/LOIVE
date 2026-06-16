import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export function SubPageHeader({
  backHref,
  title,
  rightSlot,
}: {
  backHref: string;
  title: string;
  rightSlot?: ReactNode;
}) {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-sm h-16">
      <div className="flex justify-between items-center px-container-margin h-full w-full max-w-3xl mx-auto">
        <div className="flex items-center gap-4">
          <Link
            href={backHref}
            aria-label="뒤로 가기"
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-variant transition-colors active:scale-95 text-ocean-blue"
          >
            <ArrowLeftIcon className="size-6" />
          </Link>
          <h1 className="text-headline-md text-ocean-blue font-bold tracking-tighter">{title}</h1>
        </div>
        {rightSlot ?? <div className="w-10" />}
      </div>
    </header>
  );
}
