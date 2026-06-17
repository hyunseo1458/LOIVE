"use client";

import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      // TODO: Supabase Auth 연동 후 실제 세션 종료 로직으로 교체
      router.push("/login");
    }
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      className="w-full p-6 text-center text-outline hover:text-error-red transition-colors block"
    >
      로그아웃
    </button>
  );
}
