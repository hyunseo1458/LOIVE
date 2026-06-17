"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, GlobeAltIcon, CalendarIcon, UserIcon } from "@heroicons/react/24/outline";
import {
  HomeIcon as HomeIconSolid,
  GlobeAltIcon as GlobeAltIconSolid,
  CalendarIcon as CalendarIconSolid,
  UserIcon as UserIconSolid,
} from "@heroicons/react/24/solid";

const TABS = [
  { key: "home", href: "/", label: "홈", icon: HomeIcon, activeIcon: HomeIconSolid },
  { key: "explore", href: "/explore", label: "탐색", icon: GlobeAltIcon, activeIcon: GlobeAltIconSolid },
  { key: "bookings", href: "/bookings", label: "예약", icon: CalendarIcon, activeIcon: CalendarIconSolid },
  { key: "profile", href: "/profile", label: "마이", icon: UserIcon, activeIcon: UserIconSolid },
] as const;

export function BottomNavBar() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 w-full z-50 rounded-t-xl bg-surface/80 backdrop-blur-xl border-t border-outline-variant/30 shadow-[0px_-8px_24px_rgba(0,0,0,0.05)] flex justify-around items-center h-20 pb-safe px-4">
      {TABS.map((tab) => {
        const isActive = tab.href === "/" ? pathname === "/" : pathname.startsWith(tab.href);
        const Icon = isActive ? tab.activeIcon : tab.icon;

        return (
          <Link
            key={tab.key}
            href={tab.href}
            className={`flex flex-col items-center justify-center active:scale-95 transition-all w-16 h-full ${
              isActive ? "text-coral" : "text-outline hover:text-on-surface-variant"
            }`}
          >
            <Icon className="size-6" />
            <span className="text-label-md mt-0.5">{tab.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
