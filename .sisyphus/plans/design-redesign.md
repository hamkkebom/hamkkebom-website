# 함께봄 홈페이지 GDWEB 수준 디자인 리디자인

## TL;DR

> **Quick Summary**: 함께봄(hamkkebom.com) 홈페이지의 디자인을 GDWEB IT/테크 + 기업소개 수상작 수준으로 전면 개선. 기존 봄 브랜드 컬러 유지 + IT/테크 레이아웃·인터랙션 하이브리드 적용. 기능(API, DB, 폼 로직) 변경 없이 디자인만 안전하게 리디자인.
>
> **Deliverables**:
> - Pretendard 폰트 전환 (Noto Sans KR 교체)
> - 전체 10개 페이지 + 공통 컴포넌트 디자인 리뉴얼
> - 메인 페이지 4→7 섹션 확장 (포트폴리오 하이라이트, 실적 수치, 고객 후기)
> - 히어로 비디오 → 정적 그라디언트/패턴 + 모션 텍스트 전환
> - 중간 수준 인터랙션 추가 (패럴랙스, 텍스트 reveal, 카드 tilt)
> - dark 섹션 교대 패턴 도입
> - stock 이미지 → CSS 그래픽/패턴 전환 (장식 이미지만)
>
> **Estimated Effort**: Large
> **Parallel Execution**: YES — 3 waves
> **Critical Path**: Task 1(폰트/기반) → Task 2(공통 컴포넌트) → Tasks 3~6(페이지별) → Task 7(최종 검증)

---

## Context

### Original Request
GDWEB 수상작 레퍼런스 기반 디자인 품질 대폭 개선. gdweb-design-guide.md(업종별 가이드), gdweb-design-system.md(디자인 시스템) 두 파일을 참고 자료로 준비. "문제 생기지 않도록" 안전 최우선.

### Interview Summary
**Key Discussions**:
- **디자인 방향**: 하이브리드 — 봄 브랜드 컬러(그린/주홍/한지/먹빛) 유지 + IT/테크 레이아웃·인터랙션 도입
- **범위**: 전체 10개 페이지 + 공통 컴포넌트 전면 리디자인
- **인터랙션**: 중간 수준 — 패럴랙스, 텍스트 reveal, 카드 tilt. WebGL/커스텀 커서 제외
- **폰트**: Noto Sans KR → Pretendard 전환
- **히어로**: 비디오 제거 → 정적 그라디언트 + 모션 텍스트
- **섹션 배경**: white → hanji → dark(ink-900) 교대 패턴
- **이미지**: 장식 이미지는 CSS 패턴/그래픽으로 대체, 콘텐츠 이미지(뉴스/포트폴리오) 유지
- **메인 섹션**: 4→7개로 확장

**Research Findings**:
- GDWEB IT/테크 업종: 첨단적인+모던한+심플한 무드 권장
- GDWEB 기업소개 업종: 모던한+신뢰적인+고급스러운 무드 권장
- 레퍼런스: SBT Global(다크 모드+첨단), aimos(AI/그래픽 중심), 카카오뱅크(심플+모던)
- 현재 사이트: 잘 구현되었으나 일반적 기업사이트 수준. GDWEB 수상작 대비 인터랙션/레이아웃/타이포 개선 여지 큼

### Metis Review
**Identified Gaps** (addressed):
- Pretendard 호스팅 전략 미결정 → **next/font/local 셀프호스팅** 채택 (성능 최적, 외부 의존 없음)
- shadcn/ui 커스텀 범위 미정의 → **components/ui/ 원본 유지, caller 측 className override**
- 히어로 모션 텍스트 사양 미정의 → **Framer Motion 글자 단위 stagger reveal**
- 새 섹션 데이터 소스 미정의 → **하드코딩 mock 데이터 (about/page.tsx의 stats 패턴 재활용)**
- Dark 섹션 접근성 대비비 → **ink-900 배경 위 text-white/text-ink-100 사용 (대비비 12:1+)**
- Nav 투명도 로직 보존 필수 → **isTransparent 조건문 동결**
- Contact 폼 핸들러 보존 필수 → **register/handleSubmit/setValue 호출부 동결**
- ServicePageLayout 인터페이스 보존 필수 → **ServicePageProps 9개 prop 동결**
- animate-on-scroll vs Framer Motion 중복 → **Framer Motion으로 통일, AnimateOnScroll 대체**
- 외부 이미지 제거 시 next.config 정리 필요 → **사용하지 않는 remotePatterns 정리**

---

## Work Objectives

### Core Objective
GDWEB IT/테크 + 기업소개 수상작 수준의 디자인 품질로 전면 리디자인하되, 기존 기능(API, DB, 폼 로직)을 100% 보존한다.

### Concrete Deliverables
- Pretendard 폰트 적용된 전체 사이트
- 리디자인된 10개 페이지 (/, /about, /business, /services/*, /portfolio, /portfolio/[id], /contact, /news)
- 리디자인된 공통 컴포넌트 (Nav, Footer, CTA, SectionHeader)
- 새 메인 섹션 3개 (포트폴리오 하이라이트, 실적 수치, 고객 후기 슬라이더)
- 확장된 Tailwind 디자인 토큰 (그라디언트, 애니메이션)

### Definition of Done
- [ ] `npm run build` → exit code 0, TS 에러 0
- [ ] 전 10개 라우트 HTTP 200 응답
- [ ] 문의 폼 submit 정상 동작 (POST /api/contact)
- [ ] 포트폴리오 필터 정상 동작
- [ ] Nav 스크롤 투명도 전환 정상 동작
- [ ] Pretendard 폰트 렌더링 확인
- [ ] 3개 뷰포트(375px, 768px, 1440px) 레이아웃 정상

### Must Have
- 봄 브랜드 컬러(brand, seal, ink, hanji) 그대로 유지
- 모든 기존 기능 100% 보존 (문의 폼, 포트폴리오 필터, Nav 동작)
- 반응형 레이아웃 (모바일 우선)
- Lighthouse Performance ≥ 85, Accessibility ≥ 90

### Must NOT Have (Guardrails)
- `lib/` 디렉토리 내 어떤 파일도 수정 금지 (constants, validations, supabase, sendgrid, mock-data, utils)
- `app/api/` 디렉토리 내 어떤 파일도 수정 금지
- `components/json-ld.tsx`, `components/google-analytics.tsx` 수정 금지
- 기존 `tailwind.config.ts`의 brand/seal/ink/hanji color 값 변경 금지 (추가만 허용)
- `ServicePageProps` 인터페이스(9개 prop) 변경 금지
- Contact 폼의 `register()`, `handleSubmit()`, `setValue()`, `zodResolver()` 호출부 변경 금지
- `navItems[]` 배열, `handleScroll()`, `setIsMobileMenuOpen()` 로직 변경 금지
- `isTransparent` 조건문 (`isHome && !isScrolled && !isMobileMenuOpen`) 변경 금지
- 새 npm 패키지 추가 금지 (Pretendard woff2 파일만 허용)
- `components/ui/` shadcn 원본 구조 변경 금지 (className override만 허용)
- WebGL, Three.js, 커스텀 커서 등 고급 인터랙션 금지
- 다크모드(class toggle) 도입 금지 (v2 범위)

---

## Verification Strategy (MANDATORY)

> **UNIVERSAL RULE: ZERO HUMAN INTERVENTION**
>
> ALL tasks in this plan MUST be verifiable WITHOUT any human action.
> ALL verification is executed by the agent using tools (Playwright, Bash, curl).

### Test Decision
- **Infrastructure exists**: NO (테스트 프레임워크 미설정)
- **Automated tests**: NO (디자인 리디자인이므로 유닛 테스트 불필요)
- **Framework**: none
- **Agent-Executed QA**: ALWAYS (매 태스크마다 Playwright + build 검증)

### Agent-Executed QA Scenarios (MANDATORY — ALL tasks)

**Verification Tool by Deliverable Type:**

| Type | Tool | How Agent Verifies |
|------|------|-------------------|
| 빌드 무결성 | Bash | `npm run build` → exit code 0 |
| 페이지 렌더링 | Bash (curl) | 10개 라우트 HTTP 200 확인 |
| 폰트 로딩 | Playwright | getComputedStyle → contains "Pretendard" |
| Nav 동작 | Playwright | 스크롤 투명도, 모바일 메뉴 |
| Contact 폼 | Playwright | 필드 입력 → submit → 성공 메시지 |
| 포트폴리오 필터 | Playwright | 카테고리 클릭 → 아이템 필터링 |
| 반응형 레이아웃 | Playwright | 3 viewport 스크린샷 + overflow 확인 |
| Lighthouse | Bash | lighthouse-ci 또는 수동 확인 |

---

## Execution Strategy

### Parallel Execution Waves

```
Wave 1 (기반 — Start Immediately):
└── Task 1: 디자인 기반 시스템 (폰트 + 컬러 토큰 + globals.css)

Wave 2 (공통 + 메인 — After Wave 1):
├── Task 2: 공통 컴포넌트 리디자인 (Nav, Footer, CTA, SectionHeader)
└── Task 3: 메인 페이지 전면 리디자인 (히어로 + 7개 섹션)

Wave 3 (개별 페이지 — After Wave 2):
├── Task 4: 서비스 페이지 리디자인 (ServicePageLayout → 3페이지 동시)
├── Task 5: 콘텐츠 페이지 리디자인 (About, Business, Portfolio, News)
└── Task 6: Contact 페이지 리디자인 (가장 신중하게)

Wave 4 (최종 검증 — After Wave 3):
└── Task 7: 최종 통합 검증 + 정리

Critical Path: Task 1 → Task 2 → Task 3 → Task 7
Parallel Speedup: ~35% (Wave 3에서 3개 병렬)
```

### Dependency Matrix

| Task | Depends On | Blocks | Can Parallelize With |
|------|------------|--------|---------------------|
| 1 | None | 2, 3, 4, 5, 6 | None (first) |
| 2 | 1 | 3, 4, 5, 6 | None |
| 3 | 1, 2 | 7 | None |
| 4 | 1, 2 | 7 | 5, 6 |
| 5 | 1, 2 | 7 | 4, 6 |
| 6 | 1, 2 | 7 | 4, 5 |
| 7 | 3, 4, 5, 6 | None | None (final) |

### Agent Dispatch Summary

| Wave | Tasks | Recommended Agents |
|------|-------|-------------------|
| 1 | 1 | task(category="visual-engineering", load_skills=["frontend-ui-ux"]) |
| 2 | 2, 3 | task(category="visual-engineering", load_skills=["frontend-ui-ux"]) — 순차 실행 |
| 3 | 4, 5, 6 | 3개 병렬 task(category="visual-engineering", load_skills=["frontend-ui-ux"]) |
| 4 | 7 | task(category="visual-engineering", load_skills=["frontend-ui-ux", "playwright"]) |

---

## TODOs

---

- [x] 1. 디자인 기반 시스템 구축 (폰트 + 컬러 토큰 + CSS)

  **What to do**:
  - Pretendard 폰트 woff2 파일을 `public/fonts/`에 다운로드 배치 (Pretendard-Regular, Medium, SemiBold, Bold — 4개 weight)
  - `app/layout.tsx`에서 `Noto_Sans_KR` → `next/font/local` Pretendard로 교체. CSS variable `--font-pretendard` 설정. body 클래스 업데이트
  - `tailwind.config.ts`의 `fontFamily.sans`를 `['var(--font-pretendard)', 'system-ui', 'sans-serif']`로 변경
  - `tailwind.config.ts`에 새 디자인 토큰 추가:
    - 그라디언트용 컬러: `brand-gradient-start`, `brand-gradient-end` 등
    - 새 keyframes: `text-reveal`, `float`, `gradient-shift`
    - 새 animation utilities
  - `globals.css` 확장:
    - CSS 변수 이름은 유지하되 값 미세 조정 (배경, 전경 등)
    - 새 utility classes: `.text-gradient`, `.glass-card`, `.dot-pattern`, `.grid-pattern`
    - 새 keyframes 추가 (text-reveal, float, gradient-shift, count-up 등)
    - 기존 fadeUp, fadeIn, slideInLeft, scaleIn 유지
  - `ast_grep_search`로 `--font-noto-sans-kr` 사용처 전수 검색 후 `--font-pretendard`로 교체
  - Noto Sans KR import 제거 (번들 사이즈 감소)

  **Must NOT do**:
  - CSS 변수 이름 자체 변경 금지 (`--background`, `--foreground` 등 shadcn 변수명 유지)
  - 기존 brand/seal/ink/hanji color 값 변경 금지 (추가만)
  - `lib/utils.ts`의 `cn()` 함수 수정 금지

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: 디자인 시스템 기반 작업 — 폰트, 컬러 토큰, CSS 변수 체계
  - **Skills**: [`frontend-ui-ux`]
    - `frontend-ui-ux`: Tailwind config, CSS 변수, 폰트 설정 전문

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Wave 1 (단독)
  - **Blocks**: Tasks 2, 3, 4, 5, 6
  - **Blocked By**: None

  **References**:

  **Pattern References**:
  - `app/layout.tsx:1-15` — 현재 Noto Sans KR 폰트 설정 패턴. `next/font/google` → `next/font/local` 전환 참고
  - `tailwind.config.ts:22-24` — 현재 fontFamily.sans 설정. Pretendard 변수로 교체 대상
  - `tailwind.config.ts:25-72` — 현재 brand/seal/ink color 스케일. 이 값들 유지하면서 그라디언트 토큰 추가
  - `app/globals.css:5-33` — CSS 변수 정의. 변수 이름 유지, 값 미세 조정 가능
  - `app/globals.css:53-107` — 현재 keyframes/utilities. 이 패턴 따라 새 애니메이션 추가

  **External References**:
  - Pretendard 공식: `https://github.com/orioncactus/pretendard` — woff2 파일 다운로드 위치
  - next/font/local 공식 문서: `https://nextjs.org/docs/app/building-your-application/optimizing/fonts#local-fonts`

  **Acceptance Criteria**:

  **Agent-Executed QA Scenarios:**

  ```
  Scenario: 빌드 성공 확인
    Tool: Bash
    Preconditions: 폰트 파일 배치 + 3개 설정 파일 수정 완료
    Steps:
      1. npm run build
      2. Assert: exit code 0
      3. Assert: 0 TypeScript errors in output
    Expected Result: 빌드 성공
    Evidence: Build output captured

  Scenario: Pretendard 폰트 렌더링 확인
    Tool: Playwright (playwright skill)
    Preconditions: dev server running on localhost:3000
    Steps:
      1. Navigate to: http://localhost:3000
      2. Wait for: body visible (timeout: 10s)
      3. Execute JS: window.getComputedStyle(document.body).fontFamily
      4. Assert: result contains "Pretendard" (case-insensitive)
      5. Assert: result does NOT contain "Noto Sans KR"
      6. Screenshot: .sisyphus/evidence/task-1-font-check.png
    Expected Result: Pretendard 폰트가 적용되어 렌더링됨
    Evidence: .sisyphus/evidence/task-1-font-check.png

  Scenario: CSS 변수 무결성 확인
    Tool: Playwright (playwright skill)
    Preconditions: dev server running
    Steps:
      1. Navigate to: http://localhost:3000
      2. Execute JS: getComputedStyle(document.documentElement).getPropertyValue('--background')
      3. Assert: result is not empty
      4. Execute JS: getComputedStyle(document.documentElement).getPropertyValue('--primary')
      5. Assert: result is not empty
    Expected Result: shadcn CSS 변수들이 정상 작동
    Evidence: Console output captured
  ```

  **Commit**: YES
  - Message: `style(core): switch font to Pretendard and extend design tokens`
  - Files: `app/layout.tsx`, `tailwind.config.ts`, `app/globals.css`, `public/fonts/*`
  - Pre-commit: `npm run build`

---

- [x] 2. 공통 컴포넌트 리디자인 (Nav, Footer, CTA, SectionHeader)

  **What to do**:
  - **Nav (`components/nav.tsx`)**: 디자인만 변경, 모든 로직 보존
    - 더 모던한 스타일: 얇은 border, 더 정교한 backdrop-blur, 브랜드 accent
    - 데스크탑: 링크 hover 효과 개선 (underline → 그라디언트 underline 또는 dot indicator)
    - 모바일 메뉴: 풀스크린 overlay 스타일 개선 (더 큰 타이포, 더 나은 spacing)
    - CTA 버튼 스타일 개선
    - **동결**: `navItems[]`, `handleScroll()`, `isTransparent` 로직, `setIsMobileMenuOpen()`, `pathname` 비교
  - **Footer (`components/footer.tsx`)**: 레이아웃/스타일 개선
    - 더 모던한 다크 푸터 (subtle gradient, 더 나은 구분선)
    - 소셜 아이콘 hover 효과 개선
    - Back-to-top 버튼 스타일 개선
    - **동결**: `scrollToTop()`, link href 목록
  - **CTASection (`components/cta-section.tsx`)**: 비주얼 강화
    - 더 강력한 그라디언트 배경 (brand 컬러 활용)
    - 배경 패턴/장식 개선 (dot pattern → 더 세련된 CSS 패턴)
    - 버튼 스타일 통일
  - **SectionHeader (`components/section-header.tsx`)**: 타이포그래피 개선
    - badge 스타일 개선 (pill 형태 또는 accent line)
    - 제목 타이포 hierarchy 강화
  - **AnimateOnScroll (`components/animate-on-scroll.tsx`)**: Framer Motion 기반으로 교체 또는 개선

  **Must NOT do**:
  - Nav의 `navItems[]` 배열, `isTransparent` 조건문, scroll 로직 변경 금지
  - Footer의 link href 변경 금지
  - 새 npm 패키지 추가 금지

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: UI 컴포넌트 디자인 — Tailwind 스타일링, Framer Motion 애니메이션
  - **Skills**: [`frontend-ui-ux`]
    - `frontend-ui-ux`: 반응형 네비게이션, 모던 UI 패턴 전문

  **Parallelization**:
  - **Can Run In Parallel**: NO (다른 모든 페이지가 의존)
  - **Parallel Group**: Wave 2 (Task 3과 순차)
  - **Blocks**: Tasks 3, 4, 5, 6
  - **Blocked By**: Task 1

  **References**:

  **Pattern References**:
  - `components/nav.tsx:21-155` — 전체 Nav 컴포넌트. 특히 L35(`isTransparent` 로직), L27-33(scroll handler), L63-100(데스크탑 nav), L116-152(모바일 메뉴) — 이 로직들은 동결, className만 변경
  - `components/footer.tsx:13-103` — Footer 전체. L14-16(scrollToTop), L36-47(소셜 링크) — 로직 보존
  - `components/cta-section.tsx:8-59` — CTA 섹션. 배경 패턴(L12-17)과 버튼 스타일 개선 대상
  - `components/section-header.tsx` — 공통 섹션 헤더. badge + title + description 패턴
  - `components/animate-on-scroll.tsx` — IntersectionObserver 기반. Framer Motion으로 대체 검토

  **API/Type References**:
  - `lib/constants.ts` — NAV_ITEMS 배열 정의. Nav에서 import하므로 확인 필요

  **External References**:
  - GDWEB 레퍼런스: `gdweb-design-guide.md` § IT/테크 → Nav 패턴 참고 (와이드, 미니멀)
  - GDWEB 레퍼런스: `gdweb-design-guide.md` § 기업소개 → Footer 패턴 참고

  **Acceptance Criteria**:

  **Agent-Executed QA Scenarios:**

  ```
  Scenario: Nav 스크롤 투명도 전환
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running on localhost:3000
    Steps:
      1. Navigate to: http://localhost:3000
      2. Wait for: header visible (timeout: 5s)
      3. Execute JS: window.getComputedStyle(document.querySelector('header')).backgroundColor
      4. Assert: background is transparent or rgba with alpha < 0.1
      5. Execute JS: window.scrollBy(0, 200)
      6. Wait: 500ms (transition duration)
      7. Execute JS: window.getComputedStyle(document.querySelector('header')).backgroundColor
      8. Assert: background is opaque (alpha > 0.8)
      9. Screenshot: .sisyphus/evidence/task-2-nav-scroll.png
    Expected Result: Nav가 스크롤 시 투명→불투명 전환
    Evidence: .sisyphus/evidence/task-2-nav-scroll.png

  Scenario: 모바일 메뉴 동작
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running
    Steps:
      1. Navigate to: http://localhost:3000
      2. Set viewport: 375x812
      3. Wait for: button (hamburger menu) visible
      4. Click: mobile menu button (md:hidden button)
      5. Wait for: nav overlay visible (timeout: 3s)
      6. Assert: nav links visible ("회사소개", "사업영역", "포트폴리오", "소식", "문의")
      7. Click: "회사소개" link
      8. Assert: URL contains "/about"
      9. Screenshot: .sisyphus/evidence/task-2-mobile-menu.png
    Expected Result: 모바일 메뉴가 열리고 네비게이션 동작
    Evidence: .sisyphus/evidence/task-2-mobile-menu.png

  Scenario: Footer 렌더링 + Back-to-top
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running
    Steps:
      1. Navigate to: http://localhost:3000
      2. Scroll to bottom of page
      3. Assert: footer visible
      4. Assert: text "함께봄" visible in footer
      5. Click: back-to-top button (ArrowUp icon button)
      6. Wait: 1s
      7. Assert: window.scrollY < 100
    Expected Result: Footer 렌더링 정상, back-to-top 동작
    Evidence: Terminal output captured
  ```

  **Commit**: YES
  - Message: `style(components): redesign Nav, Footer, CTA, and SectionHeader`
  - Files: `components/nav.tsx`, `components/footer.tsx`, `components/cta-section.tsx`, `components/section-header.tsx`, `components/animate-on-scroll.tsx`
  - Pre-commit: `npm run build`

---

- [x] 3. 메인 페이지 전면 리디자인

  **What to do**:
  - **HeroSection (`components/main/hero-section.tsx`)**: 완전 재작성
    - 비디오 배경 제거 → 고급 CSS 그라디언트 + 추상 패턴 배경
    - Framer Motion 텍스트 reveal 애니메이션 (글자 단위 stagger)
    - 더 대담한 타이포그래피 (더 큰 제목, letter-spacing)
    - CTA 버튼 스타일 개선
    - 스크롤 인디케이터 개선
    - `isVideoLoaded` state 제거 (비디오 없으므로)
  - **BusinessSection (`components/main/business-section.tsx`)**: 리디자인
    - stock 이미지 → CSS 그라디언트/패턴/아이콘 기반 카드로 전환
    - 3D tilt 또는 perspective hover 효과 추가
    - 더 모던한 카드 레이아웃
    - 기존 데이터 구조(businesses 배열) 유지, 이미지 URL만 제거/대체
  - **ValuesSection (`components/main/values-section.tsx`)**: 리디자인
    - Unsplash 배경 이미지 → CSS 그라디언트/패턴 배경 (dark 섹션)
    - glass card 스타일 개선
    - 더 나은 레이아웃/spacing
  - **NewsSection (`components/main/news-section.tsx`)**: 리디자인
    - 카드 스타일 개선 (더 세련된 hover, 그림자)
    - 뉴스 이미지는 유지 (콘텐츠 이미지이므로)
    - 카테고리 뱃지 스타일 개선
  - **새 섹션: PortfolioHighlightSection (NEW)**: 생성
    - `lib/mock-data.ts`의 `is_featured` 포트폴리오 아이템 3~6개 표시
    - 가로 스크롤 or 대형 카드 그리드
    - 호버 시 오버레이 + 상세 정보
  - **새 섹션: StatsSection (NEW)**: 생성
    - 실적 수치 (프로젝트 수, 파트너 수, 만족도 등)
    - 숫자 카운트업 애니메이션
    - dark 배경 (ink-900) 위 밝은 텍스트
    - `about/page.tsx`의 stats 패턴 참고 but 별도 데이터
  - **새 섹션: TestimonialsSection (NEW)**: 생성
    - 고객 후기 슬라이더/캐러셀
    - 인용문 스타일 카드
    - Framer Motion 기반 슬라이드 애니메이션 (추가 라이브러리 없이)
    - mock 후기 데이터 하드코딩
  - **app/page.tsx**: 섹션 구성 업데이트
    - 순서: Hero → Business → PortfolioHighlight → Values(dark) → Stats(dark) → Testimonials → News → CTA
    - 배경 교대: gradient hero → white → hanji → dark → dark → white → hanji → dark(CTA)

  **Must NOT do**:
  - `lib/mock-data.ts` 수정 금지 (포트폴리오 데이터 가져오기만)
  - 뉴스 섹션의 이미지 URL 제거 금지 (콘텐츠 이미지)
  - 새 API 라우트/Supabase 연동 추가 금지

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: 메인 페이지 — 가장 중요한 비주얼 임팩트. 히어로 모션, 새 섹션 디자인 포함
  - **Skills**: [`frontend-ui-ux`]
    - `frontend-ui-ux`: 모션 텍스트, 패럴랙스, 카드 인터랙션, 슬라이더 구현

  **Parallelization**:
  - **Can Run In Parallel**: NO (히어로는 Nav 변경 후 검증 필요)
  - **Parallel Group**: Wave 2 (Task 2 후 순차)
  - **Blocks**: Task 7
  - **Blocked By**: Tasks 1, 2

  **References**:

  **Pattern References**:
  - `components/main/hero-section.tsx:1-90` — 현재 히어로. 비디오 배경 패턴(L14-35), CTA 배치(L64-76) 참고. 비디오 코드 제거하고 CSS 배경으로 대체
  - `components/main/business-section.tsx:1-134` — 현재 사업영역. businesses 데이터 배열(L20-48) 구조 유지, 이미지 → 패턴 전환
  - `components/main/values-section.tsx:1-90` — 현재 가치 섹션. Unsplash 이미지(L13) 제거 → CSS 배경
  - `components/main/news-section.tsx:1-126` — 현재 뉴스. 카드 스타일(L94-118) 개선 대상. 이미지 URL은 유지
  - `app/about/page.tsx:33-38` — stats 배열 패턴. 새 StatsSection 데이터 구조 참고
  - `app/page.tsx:1-16` — 현재 메인 페이지 구성. 새 섹션 import 추가 대상
  - `lib/mock-data.ts` — 포트폴리오 mock 데이터. `is_featured` 필터로 하이라이트 섹션용 데이터 추출

  **External References**:
  - GDWEB: `gdweb-design-guide.md` § IT/테크 → "데모를 히어로에 배치", "가격 플랜 비교 테이블" 참고
  - GDWEB: `gdweb-design-system.md` § 핵심 트렌드 → "뉴트럴 베이스 + 브랜드 컬러 2-3개", "스켈레톤 로딩", "패럴랙스 효과"

  **Acceptance Criteria**:

  **Agent-Executed QA Scenarios:**

  ```
  Scenario: 메인 페이지 7개 섹션 렌더링
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running
    Steps:
      1. Navigate to: http://localhost:3000
      2. Wait for: page fully loaded (timeout: 10s)
      3. Assert: hero section visible (h1 with "나란히 걷다" or updated headline)
      4. Scroll down and assert: 사업영역 섹션 visible
      5. Scroll down and assert: 포트폴리오 하이라이트 섹션 visible
      6. Scroll down and assert: 가치 섹션 visible
      7. Scroll down and assert: 실적 수치 섹션 visible
      8. Scroll down and assert: 후기 섹션 visible
      9. Scroll down and assert: 소식 섹션 visible
      10. Screenshot at top: .sisyphus/evidence/task-3-hero.png
      11. Screenshot at bottom: .sisyphus/evidence/task-3-sections.png
    Expected Result: 7개 섹션이 순서대로 렌더링
    Evidence: .sisyphus/evidence/task-3-hero.png, task-3-sections.png

  Scenario: 히어로 비디오 없음 확인
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running
    Steps:
      1. Navigate to: http://localhost:3000
      2. Execute JS: document.querySelectorAll('video').length
      3. Assert: result === 0 (비디오 요소 없음)
      4. Assert: hero section has gradient or pattern background
    Expected Result: 비디오 제거됨, CSS 배경 적용
    Evidence: Console output

  Scenario: 반응형 메인 페이지 (3 viewport)
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running
    Steps:
      1. Set viewport: 375x812 → Navigate / → Screenshot: .sisyphus/evidence/task-3-mobile.png
      2. Set viewport: 768x1024 → Navigate / → Screenshot: .sisyphus/evidence/task-3-tablet.png
      3. Set viewport: 1440x900 → Navigate / → Screenshot: .sisyphus/evidence/task-3-desktop.png
      4. For each viewport: Assert no horizontal overflow (document.body.scrollWidth <= window.innerWidth)
    Expected Result: 3개 뷰포트에서 레이아웃 정상
    Evidence: 3개 스크린샷
  ```

  **Commit**: YES
  - Message: `style(main): redesign hero, sections, add portfolio highlight, stats, testimonials`
  - Files: `components/main/*.tsx`, `app/page.tsx`, 새 섹션 컴포넌트 파일들
  - Pre-commit: `npm run build`

---

- [x] 4. 서비스 페이지 리디자인 (3페이지 동시 처리)

  **What to do**:
  - **ServicePageLayout (`components/service-page-layout.tsx`)**: 스타일 전면 개선
    - 히어로 섹션: 더 모던한 dark 히어로 (gradient + pattern, 아이콘 뱃지 개선)
    - 프로세스 섹션: 타임라인 스타일 개선 (connector line, step 뱃지)
    - 서비스 유형 섹션: 카드 디자인 개선 (glassmorphism 또는 gradient border)
    - 가격 섹션: 가격 카드 리디자인 (더 강한 추천 카드 강조)
    - FAQ 섹션: Accordion 스타일 개선
    - 섹션 배경 교대: white → hanji → dark 패턴 적용
    - **절대 동결**: `ServicePageProps` 인터페이스(L39-49), `ServiceJsonLd`/`FaqJsonLd` 호출부
  - 3개 서비스 페이지 데이터(process/types/pricing/faqs)는 그대로:
    - `app/services/video/page.tsx` — 데이터만 있고 ServicePageLayout에 전달
    - `app/services/education/page.tsx` — 동일 패턴
    - `app/services/marketing/page.tsx` — 동일 패턴

  **Must NOT do**:
  - `ServicePageProps` 인터페이스 변경 금지 (prop 이름, 타입, 순서)
  - 서비스 페이지의 데이터 배열 변경 금지 (process, types, pricing, faqs 내용)
  - `ServiceJsonLd`, `FaqJsonLd` 호출 제거/변경 금지

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: 재사용 가능한 레이아웃 컴포넌트 리디자인 — 인터페이스 보존하면서 스타일만 개선
  - **Skills**: [`frontend-ui-ux`]
    - `frontend-ui-ux`: 타임라인, 가격 카드, Accordion 스타일링

  **Parallelization**:
  - **Can Run In Parallel**: YES (Task 5, 6과 병렬)
  - **Parallel Group**: Wave 3
  - **Blocks**: Task 7
  - **Blocked By**: Tasks 1, 2

  **References**:

  **Pattern References**:
  - `components/service-page-layout.tsx:15-49` — 인터페이스 정의. ProcessStep, ServiceType, PricingTier, FAQ, ServicePageProps — 모두 동결
  - `components/service-page-layout.tsx:72-95` — 히어로 섹션. className만 변경
  - `components/service-page-layout.tsx:97-119` — 프로세스 섹션. step 레이아웃 개선 대상
  - `components/service-page-layout.tsx:152-202` — 가격 섹션. 추천 카드(index===1) 강조 개선
  - `components/service-page-layout.tsx:204-223` — FAQ Accordion. 스타일만 개선
  - `app/services/video/page.tsx` — ServicePageLayout 사용 패턴 확인. 데이터 prop 전달 방식

  **Acceptance Criteria**:

  **Agent-Executed QA Scenarios:**

  ```
  Scenario: 3개 서비스 페이지 렌더링
    Tool: Bash (curl)
    Preconditions: Dev server running
    Steps:
      1. curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/services/video
      2. Assert: 200
      3. curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/services/education
      4. Assert: 200
      5. curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/services/marketing
      6. Assert: 200
    Expected Result: 3개 서비스 페이지 모두 200
    Evidence: curl output

  Scenario: 서비스 페이지 구조 보존 (섹션 존재 확인)
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running
    Steps:
      1. Navigate to: http://localhost:3000/services/video
      2. Assert: h1 contains "영상 제작" or "AI 영상"
      3. Scroll and assert: 프로세스 섹션 visible (step 번호 "01" or "1")
      4. Scroll and assert: 서비스 유형 섹션 visible
      5. Scroll and assert: 요금 카드 visible (3개 카드)
      6. Scroll and assert: FAQ 아코디언 visible
      7. Screenshot: .sisyphus/evidence/task-4-service-video.png
    Expected Result: 서비스 페이지 5개 섹션 정상 렌더링
    Evidence: .sisyphus/evidence/task-4-service-video.png
  ```

  **Commit**: YES
  - Message: `style(services): redesign ServicePageLayout with modern patterns`
  - Files: `components/service-page-layout.tsx`
  - Pre-commit: `npm run build`

---

- [x] 5. 콘텐츠 페이지 리디자인 (About, Business, Portfolio, News)

  **What to do**:
  - **About (`app/about/page.tsx`)**: 전면 리디자인
    - 히어로: Unsplash 이미지 → CSS 그라디언트/패턴 배경
    - Stats 카운터: 스타일 개선 (카운트업 애니메이션 보강)
    - Values: 카드 디자인 개선
    - Milestones 타임라인: 더 시각적인 디자인
    - Team 섹션: 프로필 카드 개선
    - Mission 배너: Unsplash 이미지 → CSS 배경
    - **동결**: stats/values/milestones/team 데이터 배열
  - **Business (`app/business/page.tsx`)**: 리디자인
    - 히어로: 스타일 개선
    - Services: 이미지+텍스트 교대 레이아웃 스타일 개선, Unsplash 이미지 → 패턴/아이콘 기반 or 유지
    - **동결**: services 데이터 배열, Metadata
  - **Portfolio 목록 (`app/portfolio/page.tsx` + `components/portfolio-list-with-filter.tsx` + `components/ui/portfolio-grid.tsx`)**: 리디자인
    - 히어로 스타일 개선
    - 필터 버튼 스타일 개선 (pill 형태, 애니메이션)
    - 그리드 카드 스타일 개선 (hover 효과 강화)
    - **동결**: 필터 로직(`setActive`, category state), mock 데이터
  - **Portfolio 상세 (`app/portfolio/[id]/page.tsx`)**: 스타일 개선
    - 상세 페이지 레이아웃 개선
    - **동결**: `generateMetadata`, `notFound()`, `portfolioItems` 맵
  - **News (`app/news/page.tsx`)**: 스타일 개선
    - 뉴스 목록 카드 스타일 개선

  **Must NOT do**:
  - 각 페이지의 데이터 배열 변경 금지
  - Portfolio 필터 로직 변경 금지
  - `generateMetadata` 변경 금지
  - `lib/mock-data.ts` 수정 금지

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: 다수 콘텐츠 페이지의 비주얼 개선 — 레이아웃, 카드, 타이포
  - **Skills**: [`frontend-ui-ux`]
    - `frontend-ui-ux`: 다양한 페이지 레이아웃, 필터 UI, 타임라인 디자인

  **Parallelization**:
  - **Can Run In Parallel**: YES (Task 4, 6과 병렬)
  - **Parallel Group**: Wave 3
  - **Blocks**: Task 7
  - **Blocked By**: Tasks 1, 2

  **References**:

  **Pattern References**:
  - `app/about/page.tsx:10-31` — values 데이터 배열 구조. 동결 대상
  - `app/about/page.tsx:33-38` — stats 데이터 배열. 동결 대상
  - `app/about/page.tsx:40-47` — milestones 배열. 동결 대상
  - `app/about/page.tsx:49-74` — team 배열. 동결 대상
  - `app/business/page.tsx:14-45` — services 배열. 동결 대상 (이미지 URL은 변경 가능)
  - `components/portfolio-list-with-filter.tsx` — 필터 로직. useState active state 보존
  - `components/ui/portfolio-grid.tsx` — 포트폴리오 그리드. 카드 스타일만 변경
  - `app/portfolio/[id]/page.tsx` — generateMetadata + notFound() + portfolioItems. 로직 동결

  **Acceptance Criteria**:

  **Agent-Executed QA Scenarios:**

  ```
  Scenario: 5개 콘텐츠 페이지 렌더링
    Tool: Bash (curl)
    Preconditions: Dev server running
    Steps:
      1. curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/about → Assert: 200
      2. curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/business → Assert: 200
      3. curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/portfolio → Assert: 200
      4. curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/portfolio/ai-brand-video → Assert: 200
      5. curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/news → Assert: 200
    Expected Result: 5개 페이지 모두 200
    Evidence: curl output

  Scenario: 포트폴리오 필터 기능 보존
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running
    Steps:
      1. Navigate to: http://localhost:3000/portfolio
      2. Wait for: portfolio grid visible (timeout: 5s)
      3. Count visible portfolio items → store as totalCount
      4. Click: "영상" filter button
      5. Wait: 500ms
      6. Count visible portfolio items → store as filteredCount
      7. Assert: filteredCount < totalCount (필터링 동작)
      8. Click: "전체" filter button
      9. Wait: 500ms
      10. Count visible items → Assert equals totalCount
      11. Screenshot: .sisyphus/evidence/task-5-portfolio-filter.png
    Expected Result: 포트폴리오 필터가 정상 동작
    Evidence: .sisyphus/evidence/task-5-portfolio-filter.png

  Scenario: About 페이지 섹션 확인
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running
    Steps:
      1. Navigate to: http://localhost:3000/about
      2. Assert: h1 visible (회사 소개 관련 텍스트)
      3. Scroll and assert: stats 수치 visible ("50+", "30+", "98%")
      4. Scroll and assert: values 섹션 visible
      5. Scroll and assert: milestones 타임라인 visible
      6. Scroll and assert: team 섹션 visible
      7. Screenshot: .sisyphus/evidence/task-5-about.png
    Expected Result: About 페이지 모든 섹션 렌더링
    Evidence: .sisyphus/evidence/task-5-about.png
  ```

  **Commit**: YES
  - Message: `style(pages): redesign About, Business, Portfolio, News pages`
  - Files: `app/about/page.tsx`, `app/business/page.tsx`, `app/portfolio/page.tsx`, `app/portfolio/[id]/page.tsx`, `app/news/page.tsx`, `components/portfolio-list-with-filter.tsx`, `components/ui/portfolio-grid.tsx`
  - Pre-commit: `npm run build`

---

- [x] 6. Contact 페이지 리디자인 (가장 신중하게)

  **What to do**:
  - **Contact (`app/contact/page.tsx`)**: 디자인만 변경, 폼 로직 100% 보존
    - 히어로 섹션: 스타일 개선 (gradient + pattern)
    - 연락처 정보 레이아웃: 아이콘 + 텍스트 카드 스타일 개선
    - 폼 영역: 입력 필드 스타일 개선, 레이아웃 개선
    - 성공 화면: 스타일 개선
    - **절대 동결 항목**:
      - `useForm<ContactFormData>({ resolver: zodResolver(contactFormSchema) })` — 폼 초기화
      - `register("name")`, `register("email")`, `register("phone")`, `register("company")`, `register("message")` — 필드 바인딩
      - `setValue("serviceType", val)`, `setValue("budget", val)` — Select 바인딩
      - `handleSubmit(onSubmit)` — 폼 제출
      - `onSubmit(data)` 함수 전체 — API 호출 로직
      - `submitted` state + `serverError` state — 상태 관리
      - 모든 form field의 `id`, `name` attribute
      - `contactFormSchema`, `ContactFormData`, `BUDGET_OPTIONS` import

  **Must NOT do**:
  - `register()` 호출 제거/변경 금지
  - `handleSubmit()` 제거/변경 금지
  - `setValue()` 호출 제거/변경 금지
  - form field id/name 변경 금지
  - `zodResolver` 교체 금지
  - `onSubmit` 함수 내 fetch() 로직 변경 금지
  - `submitted`/`serverError` state 로직 변경 금지
  - BUDGET_OPTIONS, contactFormSchema import 경로 변경 금지

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: 폼 로직 보존이 최우선인 고위험 리디자인 — 세심한 className 변경만
  - **Skills**: [`frontend-ui-ux`]
    - `frontend-ui-ux`: 폼 UI 디자인, 입력 필드 스타일링

  **Parallelization**:
  - **Can Run In Parallel**: YES (Task 4, 5와 병렬)
  - **Parallel Group**: Wave 3
  - **Blocks**: Task 7
  - **Blocked By**: Tasks 1, 2

  **References**:

  **Pattern References**:
  - `app/contact/page.tsx:22-32` — useForm + zodResolver 초기화. 한 글자도 변경 금지
  - `app/contact/page.tsx:34-52` — onSubmit 함수. fetch 로직 동결
  - `app/contact/page.tsx:54-78` — 성공 화면. className만 변경
  - `app/contact/page.tsx:164-305` — 폼 JSX. register/setValue 호출부 보존, className만 변경
  - `lib/validations.ts` — contactFormSchema 정의. 수정 금지

  **API/Type References**:
  - `lib/validations.ts:contactFormSchema` — Zod 스키마. Contact 폼 검증 규칙
  - `lib/constants.ts:BUDGET_OPTIONS` — 예산 옵션 배열. 수정 금지

  **Acceptance Criteria**:

  **Agent-Executed QA Scenarios:**

  ```
  Scenario: Contact 폼 전체 흐름 (가장 중요한 테스트)
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running on localhost:3000
    Steps:
      1. Navigate to: http://localhost:3000/contact
      2. Wait for: form visible (timeout: 5s)
      3. Fill: input#name → "테스트 사용자"
      4. Fill: input#email → "test@example.com"
      5. Fill: input#phone → "010-1234-5678"
      6. Fill: input#company → "테스트 회사"
      7. Click: select trigger for 서비스 유형
      8. Click: option "영상 제작"
      9. Click: select trigger for 예산 범위
      10. Click: first budget option
      11. Fill: textarea#message → "이것은 테스트 문의 메시지입니다. 열 글자를 넘는 충분한 내용입니다."
      12. Click: submit button ("무료 상담 신청")
      13. Wait: response (timeout: 10s)
      14. Assert: EITHER "문의가 접수되었습니다" visible (성공) OR error message visible (API 미연결 — but form attempted POST)
      15. Screenshot: .sisyphus/evidence/task-6-contact-submit.png
    Expected Result: 폼 제출이 시도되고 결과 표시
    Evidence: .sisyphus/evidence/task-6-contact-submit.png

  Scenario: Contact 폼 유효성 검증 동작
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running
    Steps:
      1. Navigate to: http://localhost:3000/contact
      2. Click: submit button without filling anything
      3. Wait: 500ms
      4. Assert: error messages visible (이름, 이메일, 서비스유형, 메시지 필수)
      5. Screenshot: .sisyphus/evidence/task-6-contact-validation.png
    Expected Result: 빈 폼 제출 시 유효성 에러 표시
    Evidence: .sisyphus/evidence/task-6-contact-validation.png

  Scenario: Contact 페이지 반응형
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running
    Steps:
      1. Set viewport: 375x812
      2. Navigate to: http://localhost:3000/contact
      3. Assert: form fields stacked vertically
      4. Assert: no horizontal overflow
      5. Screenshot: .sisyphus/evidence/task-6-contact-mobile.png
    Expected Result: 모바일에서 폼 레이아웃 정상
    Evidence: .sisyphus/evidence/task-6-contact-mobile.png
  ```

  **Commit**: YES
  - Message: `style(contact): redesign contact page preserving all form logic`
  - Files: `app/contact/page.tsx`
  - Pre-commit: `npm run build`

---

- [x] 7. 최종 통합 검증 + 정리

  **What to do**:
  - 전체 빌드 최종 확인 (`npm run build`)
  - 전 10개 라우트 HTTP 200 확인
  - 전체 페이지 Playwright 반응형 스크린샷 (375px, 768px, 1440px)
  - Contact 폼 기능 최종 확인
  - 포트폴리오 필터 최종 확인
  - Nav 동작 최종 확인
  - 코드 정리: 미사용 import 제거, console.log 제거
  - next.config 정리: 미사용 remotePatterns 제거 (제거된 stock 이미지 도메인)
  - 기존 `animate-on-scroll.tsx` 파일이 더 이상 사용되지 않으면 정리

  **Must NOT do**:
  - 새 기능 추가 금지
  - 디자인 추가 변경 금지 (검증만)

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: 최종 QA — 전체 페이지 검증 + Playwright 스크린샷 + 빌드 확인
  - **Skills**: [`frontend-ui-ux`, `playwright`]
    - `frontend-ui-ux`: 디자인 일관성 최종 확인
    - `playwright`: 전 페이지 자동화 검증, 스크린샷 촬영

  **Parallelization**:
  - **Can Run In Parallel**: NO (최종 검증)
  - **Parallel Group**: Wave 4 (final)
  - **Blocks**: None
  - **Blocked By**: Tasks 3, 4, 5, 6

  **References**:

  **Pattern References**:
  - 모든 이전 태스크의 Acceptance Criteria를 통합 실행
  - `next.config.mjs` 또는 `next.config.js` — remotePatterns 설정 확인/정리

  **Acceptance Criteria**:

  **Agent-Executed QA Scenarios:**

  ```
  Scenario: 전체 빌드 성공
    Tool: Bash
    Steps:
      1. npm run build
      2. Assert: exit code 0
      3. Assert: 0 errors in output
    Expected Result: 프로덕션 빌드 성공
    Evidence: Build output

  Scenario: 전 라우트 HTTP 200
    Tool: Bash (curl)
    Preconditions: Dev server running
    Steps:
      1. curl each of 10 routes: /, /about, /business, /services/video, /services/education, /services/marketing, /portfolio, /portfolio/ai-brand-video, /contact, /news
      2. Assert: ALL return HTTP 200
    Expected Result: 10개 라우트 전부 200
    Evidence: curl responses

  Scenario: 전체 반응형 스크린샷 (30장)
    Tool: Playwright (playwright skill)
    Preconditions: Dev server running
    Steps:
      1. For each of 10 pages × 3 viewports (375, 768, 1440px):
         - Navigate → Wait for load → Screenshot to .sisyphus/evidence/final-{page}-{viewport}.png
      2. For each: Assert no horizontal overflow
    Expected Result: 30개 스크린샷, 레이아웃 정상
    Evidence: .sisyphus/evidence/final-*.png

  Scenario: Pretendard 폰트 전체 확인
    Tool: Playwright (playwright skill)
    Steps:
      1. Navigate to 5 different pages
      2. For each: getComputedStyle(body).fontFamily contains "Pretendard"
    Expected Result: 전 페이지 Pretendard 적용
    Evidence: Console output

  Scenario: Contact 폼 최종 확인
    Tool: Playwright (playwright skill)
    Steps: (Task 6의 Scenario 1 재실행)
    Expected Result: 폼 동작 정상
    Evidence: .sisyphus/evidence/final-contact-form.png

  Scenario: Portfolio 필터 최종 확인
    Tool: Playwright (playwright skill)
    Steps: (Task 5의 Portfolio 필터 Scenario 재실행)
    Expected Result: 필터 동작 정상
    Evidence: .sisyphus/evidence/final-portfolio-filter.png
  ```

  **Commit**: YES
  - Message: `chore: final cleanup and verification after design redesign`
  - Files: cleanup된 파일들
  - Pre-commit: `npm run build`

---

## Commit Strategy

| After Task | Message | Key Files | Verification |
|------------|---------|-----------|--------------|
| 1 | `style(core): switch font to Pretendard and extend design tokens` | layout.tsx, tailwind.config.ts, globals.css | npm run build + Playwright font check |
| 2 | `style(components): redesign Nav, Footer, CTA, and SectionHeader` | nav.tsx, footer.tsx, cta-section.tsx, section-header.tsx | npm run build + Playwright Nav test |
| 3 | `style(main): redesign hero, sections, add portfolio highlight, stats, testimonials` | main/*.tsx, page.tsx, new section files | npm run build + Playwright sections |
| 4 | `style(services): redesign ServicePageLayout with modern patterns` | service-page-layout.tsx | npm run build + curl 3 routes |
| 5 | `style(pages): redesign About, Business, Portfolio, News pages` | about, business, portfolio, news pages | npm run build + Playwright filter |
| 6 | `style(contact): redesign contact page preserving all form logic` | contact/page.tsx | npm run build + Playwright form |
| 7 | `chore: final cleanup and verification after design redesign` | cleanup files | npm run build + full QA |

---

## Success Criteria

### Verification Commands
```bash
npm run build        # Expected: exit code 0, 0 errors
npm run dev          # Expected: dev server starts on :3000
# 10 routes all return HTTP 200
```

### Final Checklist
- [ ] Pretendard 폰트 전 페이지 적용
- [ ] 히어로 비디오 제거됨, CSS 배경 + 모션 텍스트 적용
- [ ] 메인 페이지 7개 섹션 렌더링 (포트폴리오 하이라이트, 실적, 후기 추가)
- [ ] 섹션 배경 교대 (white/hanji/dark) 적용
- [ ] stock 장식 이미지 → CSS 패턴/그래픽 전환
- [ ] 공통 컴포넌트(Nav, Footer, CTA) 리디자인
- [ ] 서비스 3종 페이지 리디자인
- [ ] About, Business, Portfolio, News 리디자인
- [ ] Contact 폼 기능 100% 보존
- [ ] 포트폴리오 필터 기능 보존
- [ ] Nav 스크롤 투명도 동작 보존
- [ ] 반응형 3 viewport 정상
- [ ] `npm run build` 성공
- [ ] 전 10개 라우트 HTTP 200
- [ ] brand/seal/ink/hanji 컬러 값 변경 없음 (유지)
- [ ] lib/ 디렉토리 미수정
- [ ] app/api/ 디렉토리 미수정
