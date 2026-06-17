# LOIVE 진행 상황

마지막 업데이트: 2026-06-17

## 현재 상태
- Next.js 16 + React 19 + Tailwind v4 프로젝트 초기화 완료, git 클린 체크포인트 존재
- `npm run dev` / `npm run build` / `npm run lint` 모두 정상 통과
- 디자인 토큰(TIDE, `stitch_/stitch_/tide/DESIGN.md`)을 `src/app/globals.css`의 `@theme`로 이식 완료
- Pretendard Variable 폰트 전역 적용 (`src/app/layout.tsx`), Material Symbols 완전 제거
- Hero Icons(`@heroicons/react`)로 아이콘 전체 교체 완료 (홈 화면 기준)
- 그라데이션 전부 제거 → 단색/반투명 패널 또는 opacity 펄싱 스켈레톤으로 대체
- **홈 화면 포팅 완료** (`src/app/page.tsx` + `src/components/layout/*`, `src/components/home/*`), mock 데이터는 `src/data/mock-home.ts`에 분리 (Supabase 연동 시 교체 지점 명시됨)
- **상품 상세 화면 포팅 완료** (`src/app/activities/[id]/page.tsx` + `src/components/product/*`), mock 데이터는 `src/data/mock-product-detail.ts`. 홈의 ActivityCard에서 카드 전체 클릭 시 이동하도록 연결됨 (현재는 id 무관하게 동일 mock 상품 표시 — Supabase 연동 후 실제 id별 조회로 교체 필요)
- **예약 및 결제 화면 포팅 완료** (`src/app/booking/[id]/page.tsx` + `src/components/booking/*`), mock 데이터는 `src/data/mock-booking.ts`. 결제수단은 카카오페이/토스페이만 제공 (신용카드 옵션 의도적으로 제외). 날짜/인원/결제수단/약관 상태는 `BookingForm.tsx`가 통합 관리하며 총액 자동 계산.
- **결제 완료 화면 포팅 완료** (`src/app/booking/[id]/complete/page.tsx`). BookingForm의 결제하기 버튼이 쿼리스트링으로 결제정보 전달하며 실제 라우팅됨. 예약번호는 `src/lib/reservation-code.ts`에서 생성.
- **예약 내역 화면 포팅 완료** (`src/app/bookings/page.tsx` + `src/components/bookings/*`). 탭(예약확정/이용완료/취소내역) 클라이언트 상태로 전환. `BottomNavBar`를 실제 Link 기반 라우팅으로 개선함 (이전에는 active 표시만 되고 실제 이동은 안 됐었음).
- 프로젝트 권한: `.claude/settings.json`에 `npm run *`, `git status`, `git diff*` 허용 추가됨
- **리뷰 화면 포팅 완료**: `/activities/[id]/reviews`(리뷰 목록), `/activities/[id]/review`(리뷰 작성). Stitch의 "상품 후기"와 "리뷰 전체보기"는 동일 기능의 두 목업이라 하나의 리뷰 목록 화면으로 통합함 (일관성 원칙).
- **인기 액티비티 전체보기 → `/explore` 포팅 완료** (탐색 탭). 카테고리 필터+정렬+위시리스트 토글 동작. 가격 표기를 ₩(KRW)로 전체 통일.
- **내 정보 → `/profile` 포팅 완료** (마이 탭). Stitch 원본 10개 화면 전부 포팅 완료. `BottomNavBar` 4개 탭(홈/탐색/예약/마이) 모두 실제 라우팅됨.

## Stitch 원본 화면 포팅 — 전부 완료 (10/10)

## 추가 화면 (Stitch 원본에 없던 것, 야놀자/에어비앤비 참고) — 진행 중
- **로그인 (`/login`) 완료**: 구글/네이버/카카오 버튼만 (자체 회원가입 없음). "로그인 없이 둘러보기" 허용. 실제 OAuth는 Supabase Auth 연동 후
- **지역 필터 완료**: 홈 지역 선택 → `/explore?region=X`로 라우팅, 실제 필터링 동작 확인됨
- **위시리스트 (`/wishlist`) 완료**: `useWishlist` 훅(localStorage)으로 홈/탐색/상품상세 하트 버튼 상태 공유
- **검색 결과 (`/search`) 완료**: 이름/지역/카테고리로 액티비티 검색, 홈/탐색 검색 아이콘 연결
- **호스트 등록 신청 — 앱 내 화면 만들지 않기로 결정**: 사용자가 "따로 문의 받아서" 하겠다고 결정함 (2026-06-17). 별도 채널(이메일/카카오채널 등)로 문의받는 방식 유지, 인앱 신청 폼 불필요

## UI/UX 수정 완료 (2026-06-17)

UX_PRINCIPLES.md 기준 전체 점검 후 아래 항목 수정됨:

### 직관성
- **CategoryTabs 필터링 연결** (`HomeContent.tsx` 신규 생성): 탭 클릭 시 실제 액티비티 필터링 동작
- **ActivityCard "예약" 버튼 → 예약폼으로 이동** (`ActivityCard.tsx`): 기존에 상세 페이지로 이동하던 것을 `/booking/${id}`로 교체
- **CourseCard 클릭 가능하게** (`ThemedCoursesSection.tsx`): Link(`/explore`)로 감싸 클릭 시 탐색 페이지로 이동
- **CourseCard 태그 라벨 추가** (`CourseCard.tsx`): 아이콘만 있던 태그를 아이콘+텍스트 pill 형태로 변경, food/drink 아이콘 구별 (CakeIcon vs BeakerIcon)
- **ProductGallery 뒤로가기 → router.back()** (`BackButton.tsx` 신규 생성): 이전 페이지 컨텍스트 보존
- **ProductGallery 허위 dot 인디케이터 제거**: 스와이프 기능 없는데 페이지 인디케이터가 있어 오해 유발 → 제거
- **BookingHeader 단계 표시 추가** (`BookingHeader.tsx`): "1 / 2 단계" + 진행 바 표시
- **예약 완료 후 뒤로가기 → /bookings** (`complete/page.tsx`): 결제 완료 후 예약폼으로 돌아가던 버그 수정
- **예약 취소 버튼 confirm dialog 추가** (`BookingHistoryView.tsx`): 클릭 시 확인 팝업 → 취소 처리
- **로그아웃 confirm dialog 추가** (`LogoutButton.tsx` 신규 생성): 실수 탭 방지

### 일관성
- **ActivityCard 예약 버튼 색상 통일** (`ActivityCard.tsx`): ocean-blue/10 → coral (탐색 ActivityListCard와 동일)
- **ActivityListCard WishlistButton 색상 수정** (`ActivityListCard.tsx`): text-on-primary(흰색) → text-outline (이미지 밝기 무관하게 가시성 확보)
- **ActivityListCard 별점 배지 색상** (`ActivityListCard.tsx`): text-on-primary → text-on-surface + 노란별 아이콘

### 가독성·접근성
- **WishlistButton 터치 타겟 확대**: `w-8 h-8`(32px) → `w-11 h-11`(44px) — ActivityCard, ActivityListCard 양쪽 모두
- **DateSelectionCalendar 마감 텍스트** (`DateSelectionCalendar.tsx`): `text-[8px]` → `text-[10px]`, 취소선을 날짜 숫자에만 적용

### 유용성·반응성
- **StickyPaymentBar 비활성 이유 표시** (`StickyPaymentBar.tsx`, `BookingForm.tsx`): 미선택 항목(날짜/결제수단/약관)을 "날짜, 결제 수단 선택 후 결제할 수 있습니다" 형태로 표시
- **StickyPaymentBar 중복 클릭 방지** (`BookingForm.tsx`): `isSubmitting` 상태로 처리 중 재클릭 차단
- **WriteReviewForm 에러 표시 개선** (`WriteReviewForm.tsx`): 에러를 submit 버튼 바로 위로 이동 + ExclamationCircleIcon 추가 (색+아이콘+텍스트)
- **WriteReviewForm 제출 스피너** (`WriteReviewForm.tsx`): ArrowPathIcon 회전 애니메이션 추가
- **VoucherSection 인터랙션 제거** (`VoucherSection.tsx`): cursor-pointer·hover 효과 제거 (클릭 없는 컴포넌트)
- **SearchView 인기 검색어 힌트** (`SearchView.tsx`): 초기 상태에 클릭 가능한 키워드 chip 표시
- **SearchView 결과 없을 때 대안 제시** (`SearchView.tsx`): 키워드 chip + "다른 키워드로 시도해보세요" 메시지

## 알아둘 점
- Hero Icons는 범용 UI 아이콘셋이라 Material Symbols만큼 액티비티 전용 아이콘(요트/식당/도보 등)이 없음 — 의미상 가장 가까운 아이콘으로 대체함 (예: 식당/와인바 → CakeIcon, 요트 → PaperAirplaneIcon, 패들보드 장비 → LifebuoyIcon, 음료 → BeakerIcon)
- 결제수단은 카카오페이/토스페이만 (정책) — `PaymentMethodSelector.tsx`에 신용카드 의도적으로 제외됨, 새 결제 관련 화면에서도 이 정책 유지할 것
- Supabase 프로젝트는 아직 미연동 — 실제 생성/URL/anon key 전달 필요
- **중요**: `npm run dev`를 여러 번 중복 실행하면 Turbopack 캐시(`.next/dev/cache`)가 손상되어 500 에러가 난다 (실제로 한 번 겪음). 새로 띄우기 전엔 기존 node 프로세스를 반드시 종료할 것 — PowerShell: `Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force`. 캐시가 깨졌다면 `.next` 폴더 삭제 후 재시작
- 사용자가 "확인 없이 끝까지 진행" 요청함 — 화면 포팅/수정 작업은 매번 yes/no 묻지 않고 이어서 진행 중

## GitHub
- 레포: https://github.com/hyunseo1458/LOIVE
- remote: `origin` → `https://github.com/hyunseo1458/LOIVE.git`
- 브랜치: `master`
- push 명령: `git push origin master`

## 다음 액션
1. dev 서버 띄워두고 화면 보면서 추가 UI/UX 수정
2. Supabase 프로젝트 생성 후 연동
3. 배포

## 개발 서버 실시간 확인 방법
- dev 서버를 세션 내내 하나만 띄워두고 있음 (http://localhost:3000). Next.js Fast Refresh가 파일 저장 시 브라우저를 자동 갱신하므로, 브라우저 탭을 열어두면 작업 중인 화면이 실시간으로 바뀌는 걸 볼 수 있음
- VS Code의 Source Control 탭(Ctrl+Shift+G)을 열어두면 수정된 파일 목록과 diff가 실시간으로 표시됨
- VS Code 레이아웃: Ctrl+\ 로 편집기 분할 → 오른쪽에 Simple Browser(`Ctrl+Shift+P` → `Simple Browser: Show`) 또는 Live Preview 확장 사용. 하단 터미널은 Ctrl+` 로 열기.
