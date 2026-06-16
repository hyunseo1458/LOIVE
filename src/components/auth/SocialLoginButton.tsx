type Provider = "kakao" | "naver" | "google";

const STYLES: Record<Provider, { bg: string; text: string; badgeBg: string; badgeText: string; label: string }> = {
  kakao: {
    bg: "bg-[#FEE500]",
    text: "text-black",
    badgeBg: "bg-black",
    badgeText: "text-[#FEE500]",
    label: "카카오로 시작하기",
  },
  naver: {
    bg: "bg-[#03C75A]",
    text: "text-white",
    badgeBg: "bg-white",
    badgeText: "text-[#03C75A]",
    label: "네이버로 시작하기",
  },
  google: {
    bg: "bg-white border border-outline-variant",
    text: "text-on-surface",
    badgeBg: "bg-surface-container-high",
    badgeText: "text-on-surface",
    label: "Google로 시작하기",
  },
};

const MARK: Record<Provider, string> = { kakao: "K", naver: "N", google: "G" };

export function SocialLoginButton({ provider, onClick }: { provider: Provider; onClick?: () => void }) {
  const style = STYLES[provider];

  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full h-14 rounded-2xl flex items-center justify-center gap-2 font-medium text-title-lg transition-all active:scale-[0.98] shadow-sm ${style.bg} ${style.text}`}
    >
      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${style.badgeBg} ${style.badgeText}`}>
        {MARK[provider]}
      </span>
      {style.label}
    </button>
  );
}
