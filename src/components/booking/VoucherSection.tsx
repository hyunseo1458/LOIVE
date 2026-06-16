import { QrCodeIcon } from "@heroicons/react/24/outline";

export function VoucherSection() {
  return (
    <section className="border-2 border-ocean-blue/20 border-dashed rounded-[20px] p-lg flex items-center justify-between bg-surface-bright/50 backdrop-blur-sm relative overflow-hidden group hover:border-ocean-blue/50 transition-colors cursor-pointer">
      <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-surface rounded-full border-r-2 border-ocean-blue/20" />
      <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-surface rounded-full border-l-2 border-ocean-blue/20" />
      <div className="flex flex-col gap-base pl-sm">
        <span className="text-title-lg text-on-surface">모바일 바우처</span>
        <span className="text-body-md text-on-surface-variant">현장에서 QR코드를 제시해주세요</span>
      </div>
      <div className="w-12 h-12 rounded-full bg-ocean-blue/10 text-ocean-blue flex items-center justify-center group-hover:bg-ocean-blue/20 transition-colors mr-sm">
        <QrCodeIcon className="size-6" />
      </div>
    </section>
  );
}
