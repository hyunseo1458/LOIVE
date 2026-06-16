import type { ComponentType } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export type MenuItem = {
  icon: ComponentType<{ className?: string }>;
  label: string;
};

export function MenuGroup({ title, items }: { title: string; items: MenuItem[] }) {
  return (
    <section>
      <h3 className="text-label-md text-outline px-2 mb-3 tracking-wider">{title}</h3>
      <div className="bg-surface rounded-2xl overflow-hidden border border-outline-variant/20">
        {items.map((item, index) => (
          <div key={item.label}>
            {index > 0 && <div className="mx-4 h-px bg-outline-variant/20" />}
            {/* TODO: 각 설정 화면 포팅 후 연결 */}
            <button
              type="button"
              disabled
              className="w-full flex items-center justify-between p-4 opacity-70"
            >
              <div className="flex items-center gap-3">
                <item.icon className="size-5 text-outline" />
                <span className="text-body-lg text-on-surface">{item.label}</span>
              </div>
              <ChevronRightIcon className="size-5 text-outline-variant" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
