import Link from "next/link";
import {
  BanknotesIcon,
  MapPinIcon,
  BellAlertIcon,
  LanguageIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { PROFILE } from "@/data/mock-profile";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { ProfileCard } from "@/components/profile/ProfileCard";
import { QuickStatsRow } from "@/components/profile/QuickStatsRow";
import { MenuGroup } from "@/components/profile/MenuGroup";
import { BottomNavBar } from "@/components/layout/BottomNavBar";

export default function ProfilePage() {
  return (
    <>
      <ProfileHeader />
      <main className="pt-20 pb-32 px-container-margin max-w-7xl mx-auto">
        <ProfileCard name={PROFILE.name} email={PROFILE.email} avatarUrl={PROFILE.avatarUrl} />
        <QuickStatsRow />

        <div className="flex flex-col gap-6">
          <MenuGroup
            title="활동 관리"
            items={[
              { icon: BanknotesIcon, label: "결제 수단 관리" },
              { icon: MapPinIcon, label: "자주 가는 지역 설정" },
            ]}
          />
          <MenuGroup
            title="앱 설정"
            items={[
              { icon: BellAlertIcon, label: "알림 설정" },
              { icon: LanguageIcon, label: "언어 / 통화 설정" },
              { icon: QuestionMarkCircleIcon, label: "고객센터 / 문의하기" },
            ]}
          />
          <MenuGroup
            title="약관 및 계정"
            items={[{ icon: ShieldCheckIcon, label: "약관 및 개인정보처리방침" }]}
          />

          {/* TODO: Supabase Auth 연동 후 실제 세션 종료 로직 추가 */}
          <Link href="/login" className="w-full p-6 text-center text-outline hover:text-error-red transition-colors block">
            로그아웃
          </Link>
        </div>
      </main>
      <BottomNavBar />
    </>
  );
}
