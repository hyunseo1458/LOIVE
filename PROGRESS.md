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
- **상품 상세 화면 포팅 완료** (`src/app/activities/[id]/page.tsx` + `src/components/product/*`), mock 데이터는 `src/data/mock-product-detail.ts`. 홈의 ActivityCard에서 카드 전체 클릭 시 이동하도록 연결됨 (현재는 id 무관하게 동일 mock 상품 표시 — Supabase 연동 후 실제 id별 조회로 교체 필요)
- **예약 및 결제 화면 포팅 완료** (`src/app/booking/[id]/page.tsx` + `src/components/booking/*`), mock 데이터는 `src/data/mock-booking.ts`. 결제수단은 카카오페이/토스페이만 제공 (신용카드 옵션 의도적으로 제외). 날짜/인원/결제수단/약관 상태는 `BookingForm.tsx`가 통합 관리하며 총액 자동 계산. 상품 상세의 "예약하기" → 이 화면으로 연결됨. "결제하기" 버튼은 아직 TODO (결제 완료 화면 + PG 연동 필요)

## 남은 화면 (6개, Stitch 원본 기준)
인기 액티비티 전체보기 / 상품 후기 / 리뷰 작성 / 리뷰 전체보기 / 결제 완료 / 예약 내역 / 내 정보
(원본 위치: `stitch_/stitch_/<화면명>/code.html`)

## 알아둘 점
- Hero Icons는 범용 UI 아이콘셋이라 Material Symbols만큼 액티비티 전용 아이콘(요트/식당/도보 등)이 없음 — 의미상 가장 가까운 아이콘으로 대체함 (예: 식당/와인바 → CakeIcon, 요트 → PaperAirplaneIcon, 패들보드 장비 → LifebuoyIcon). 화면이 늘어날수록 같은 의미는 같은 아이콘을 재사용해 일관성 유지할 것
- 결제수단은 카카오페이/토스페이만 (정책) — `PaymentMethodSelector.tsx`에 신용카드 의도적으로 제외됨, 새 결제 관련 화면에서도 이 정책 유지할 것
- Supabase 프로젝트는 아직 미연동 — 실제 생성/URL/anon key 전달 필요
- **중요**: `npm run dev`를 여러 번 중복 실행하면 Turbopack 캐시(`.next/dev/cache`)가 손상되어 500 에러가 난다 (실제로 한 번 겪음). 새로 띄우기 전엔 기존 node 프로세스를 반드시 종료할 것 — PowerShell: `Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force`. 캐시가 깨졌다면 `.next` 폴더 삭제 후 재시작
- 사용자가 "확인 없이 끝까지 진행" 요청함 — 화면 포팅 작업은 매번 yes/no 묻지 않고 이어서 진행 중

## 다음 액션
1. 다음 화면 포팅 (WIP=1 — 한 화면씩 완전히 검증 후 진행). 추천 순서: 결제 완료 → 예약 내역 → 리뷰 클러스터 → 내 정보
2. Supabase 프로젝트 생성 후 연동 (Task #7)
