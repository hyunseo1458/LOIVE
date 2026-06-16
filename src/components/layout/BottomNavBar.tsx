"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, GlobeAltIcon, CalendarIcon, UserIcon } from "@heroicons/react/24/outline";
import {
  HomeIcon as HomeIconSolid,
  GlobeAltIcon as GlobeAltIconSolid,
  CalendarIcon as CalendarIconSolid,
} from "@heroicons/react/24/solid";

const TABS = [
  { key: "home", href: "/", label: "홈", icon: HomeIcon, activeIcon: HomeIconSolid },
  { key: "explore", href: "/explore", label: "탐색", icon: GlobeAltIcon, activeIcon: GlobeAltIconSolid },
  { key: "bookings", href: "/bookings", label: "예약", icon: CalendarIcon, activeIcon: CalendarIconSolid },
  // TODO: 내 정보 화면 포팅 후 연결
  { key: "profile", href: null, label: "마이", icon: UserIcon, activeIcon: UserIcon },
] as const;

export function BottomNavBar() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 w-full z-50 rounded-t-xl bg-surface/80 backdrop-blur-xl border-t border-outline-variant/30 shadow-[0px_-8px_24px_rgba(0,0,0,0.05)] flex justify-around items-center h-20 pb-safe px-4">
      {TABS.map((tab) => {
        const isActive = tab.href === "/" ? pathname === "/" : tab.href !== null && pathname.startsWith(tab.href);
        const Icon = isActive ? tab.activeIcon : tab.icon;
        const className = `flex flex-col items-center justify-center relative active:scale-95 transition-all w-16 h-full ${
          isActive ? "text-ocean-blue" : "text-outline hover:text-ocean-blue/70"
        } ${tab.href === null ? "opacity-40" : ""}`;

        const content = (
          <>
            <Icon className="size-6" />
            <span className="text-label-md mt-1">{tab.label}</span>
            {isActive && <span className="absolute -bottom-1 w-1 h-1 bg-ocean-blue rounded-full" />}
          </>
        );

        if (tab.href === null) {
          return (
            <button key={tab.key} type="button" disabled className={className}>
              {content}
            </button>
          );
        }

        return (
          <Link key={tab.key} href={tab.href} className={className}>
            {content}
          </Link>
        );
      })}
    </nav>
  );
}
