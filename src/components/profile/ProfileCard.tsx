import Image from "next/image";

export function ProfileCard({
  name,
  email,
  avatarUrl,
}: {
  name: string;
  email: string;
  avatarUrl: string;
}) {
  return (
    <section className="mb-8 bg-surface rounded-3xl p-6 shadow-[0px_4px_12px_rgba(0,122,255,0.08)]">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-primary-fixed shrink-0">
          <Image fill className="object-cover" alt={name} src={avatarUrl} sizes="80px" />
        </div>
        <div className="flex-1">
          <h2 className="text-title-lg text-on-surface">{name}</h2>
          <p className="text-body-md text-outline">{email}</p>
        </div>
      </div>
      {/* TODO: 프로필 수정 화면 포팅 후 연결 */}
      <button
        type="button"
        disabled
        className="w-full py-2.5 border border-outline-variant text-ocean-blue text-label-md rounded-xl opacity-50"
      >
        프로필 수정
      </button>
    </section>
  );
}
