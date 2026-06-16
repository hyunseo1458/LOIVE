"use client";

import Link from "next/link";
import { SocialLoginButton } from "./SocialLoginButton";

export function LoginView() {
  const handleLogin = (provider: string) => {
    // TODO: Supabase Auth(OAuth) 연동 후 실제 로그인 로직으로 교체
    console.log(`${provider} 로그인 시도`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-container-margin bg-surface">
      <div className="w-full max-w-sm flex flex-col items-center">
        <span className="text-ocean-blue text-[40px] font-extrabold tracking-tight mb-2">로이브</span>
        <p className="text-body-lg text-on-surface-variant text-center mb-xl">
          전국 곳곳, 몰랐던 로컬 체험을 찾아 떠나보세요
        </p>

        <div className="w-full flex flex-col gap-sm mb-lg">
          <SocialLoginButton provider="kakao" onClick={() => handleLogin("카카오")} />
          <SocialLoginButton provider="naver" onClick={() => handleLogin("네이버")} />
          <SocialLoginButton provider="google" onClick={() => handleLogin("구글")} />
        </div>

        <Link href="/" className="text-body-md text-outline hover:text-ocean-blue transition-colors mb-xl">
          로그인 없이 둘러보기
        </Link>

        <p className="text-label-md text-outline-variant text-center leading-relaxed">
          계속 진행하면 로이브의{" "}
          <a href="#" className="text-ocean-blue hover:underline">
            서비스 이용약관
          </a>{" "}
          및{" "}
          <a href="#" className="text-ocean-blue hover:underline">
            개인정보 처리방침
          </a>
          에 동의하게 됩니다.
        </p>
      </div>
    </div>
  );
}
