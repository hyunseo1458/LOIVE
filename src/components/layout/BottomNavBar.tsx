"use client";

import { useState } from "react";
import { HomeIcon, GlobeAltIcon, CalendarIcon, UserIcon } from "@heroicons/react/24/outline";
import { HomeIcon as HomeIconSolid } from "@heroicons/react/24/solid";

const TABS = [
  { key: "home", label: "홈", icon: HomeIcon, activeIcon: HomeIconSolid },
  { key: "explore", label: "탐색", icon: GlobeAltIcon, activeIcon: GlobeAltIcon },
  { key: "bookings", label: "예약", icon: CalendarIcon, activeIcon: CalendarIcon },
  { key: "profile", label: "마이", icon: UserIcon, activeIcon: UserIcon },
] as const;

export function BottomNavBar() {
  const [active, setActive] = useState<(typeof TABS)[number]["key"]>("home");

  return (
    <nav className="md:hidden fixed bottom-0 w-full z-50 rounded-t-xl bg-surface/80 backdrop-blur-xl border-t border-outline-variant/30 shadow-[0px_-8px_24px_rgba(0,0,0,0.05)] flex justify-around items-center h-20 pb-safe px-4">
      {TABS.map((tab) => {
        const isActive = tab.key === active;
        const Icon = isActive ? tab.activeIcon : tab.icon;
        return (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActive(tab.key)}
            className={`flex flex-col items-center justify-center relative active:scale-95 transition-all w-16 h-full ${
              isActive ? "text-ocean-blue" : "text-outline hover:text-ocean-blue/70"
            }`}
          >
            <Icon className="size-6" />
            <span className="text-label-md mt-1">{tab.label}</span>
            {isActive && (
              <span className="absolute -bottom-1 w-1 h-1 bg-ocean-blue rounded-full" />
            )}
          </button>
        );
      })}
    </nav>
  );
}
