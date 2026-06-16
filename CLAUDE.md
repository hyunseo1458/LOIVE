@AGENTS.md
@UX_PRINCIPLES.md

# LOIVE

전국 지역별 숨겨진 로컬 체험 프로그램을 모아 예약까지 할 수 있는 플랫폼.

## 기술 스택
- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 (CSS-first `@theme` 설정, `tailwind.config.*` 없음)
- Supabase (DB + Auth + API)
- 디자인 원본: `stitch_/stitch_/<화면명>/code.html` (Google Stitch 산출물, 정적 HTML+Tailwind CDN — 컴포넌트로 포팅하면서 참고만 할 것, 수정 대상 아님)
- 디자인 토큰: `stitch_/stitch_/tide/DESIGN.md`

## 명령어
- 설치: `npm install`
- 개발 서버: `npm run dev` (http://localhost:3000)
- 빌드: `npm run build`
- 린트: `npm run lint`

## 하드 제약
- 폰트는 Pretendard만 사용 (Stitch 원본의 Plus Jakarta Sans/Hanken Grotesk 금지)
- 아이콘은 Hero Icons SVG만 사용 (Material Symbols 폰트 아이콘 금지)
- 그라데이션(`bg-gradient-*`) 사용 금지
- 이모지 사용 금지
- 결제 수단은 카카오페이/토스페이만, 자체 신용카드 결제 UI 금지
- 로그인은 구글/네이버/카카오 소셜로그인만, 자체 회원가입(이메일/비번) 없음
