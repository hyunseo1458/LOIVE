# LOIVE 진행 상황

마지막 업데이트: 2026-06-16

## 현재 상태
- Next.js 16 + React 19 + Tailwind v4 프로젝트 초기화 완료, git 클린 체크포인트 존재
- `npm run dev` / `npm run build` / `npm run lint` 모두 정상 통과
- 디자인 토큰(TIDE, `stitch_/stitch_/tide/DESIGN.md`)을 `src/app/globals.css`의 `@theme`로 이식 완료
- Pretendard Variable 폰트 전역 적용 (`src/app/layout.tsx`), Material Symbols 완전 제거
- Hero Icons(`@heroicons/react`)로 아이콘 전체 교체 완료 (홈 화면 기준)
- 그라데이션 전부 제거 → 단색/반투명 패널 또는 opacity 펄싱 스켈레톤으로 대체
- **홈 화면 포팅 완료** (`src/app/page.tsx` + `src/components/layout/*`, `src/components/home/*`), mock 데이터는 `src/data/mock-home.ts`에 분리 (Supabase 연동 시 교체 지점 명시됨)

## 남은 화면 (9개, Stitch 원본 기준)
인기 액티비티 전체보기 / 상품 상세 / 상품 후기 / 리뷰 작성 / 리뷰 전체보기 / 예약 및 결제 / 결제 완료 / 예약 내역 / 내 정보
(원본 위치: `stitch_/stitch_/<화면명>/code.html`)

## 알아둘 점
- Hero Icons는 범용 UI 아이콘셋이라 Material Symbols만큼 액티비티 전용 아이콘(요트/식당/도보 등)이 없음 — 의미상 가장 가까운 아이콘으로 대체함 (예: 식당/와인바 → CakeIcon, 요트 → PaperAirplaneIcon). 화면이 늘어날수록 같은 의미는 같은 아이콘을 재사용해 일관성 유지할 것
- `예약 및 결제` 화면 원본에는 신용카드 결제 옵션이 기본 선택돼 있음 — 포팅 시 제거 필요 (정책: 카카오페이/토스페이만 허용)
- Supabase 프로젝트는 아직 미연동 — 실제 생성/URL/anon key 전달 필요

## 다음 액션
1. 다음 화면 포팅 (WIP=1 — 한 화면씩 완전히 검증 후 진행)
2. Supabase 프로젝트 생성 후 연동 (Task #7)
3. 결제 화면에서 신용카드 옵션 제거
