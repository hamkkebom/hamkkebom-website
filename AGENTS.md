# PROJECT KNOWLEDGE BASE

**Generated:** 2026-02-07
**Status:** Greenfield (no code yet)

## OVERVIEW

함께봄(hamkkebom.com) — AI 서비스 회사 홈페이지. 영상 제작, 교육, 마케팅 3종 서비스 소개 + 포트폴리오 + 문의 폼.
Next.js 14 App Router + Supabase + Vercel. 한국어 단일 언어.

## SPEC

`ZZ-홈페이지.md` — 전체 요구사항 문서. 페이지 구성, DB 스키마, API, 디자인 방향, SEO, 완료 기준 포함.

## PLANNED STRUCTURE

```
/
├── app/
│   ├── layout.tsx              # Root layout (nav + footer)
│   ├── page.tsx                # 메인 랜딩
│   ├── about/page.tsx          # 회사·팀 소개
│   ├── services/
│   │   ├── video/page.tsx      # 영상 제작
│   │   ├── education/page.tsx  # 교육
│   │   └── marketing/page.tsx  # 마케팅
│   ├── portfolio/
│   │   ├── page.tsx            # 포트폴리오 목록 (카테고리 필터)
│   │   └── [id]/page.tsx       # 포트폴리오 상세
│   ├── contact/page.tsx        # 문의·상담·견적
│   └── api/
│       ├── contact/route.ts    # POST 문의 접수 + SendGrid
│       └── portfolio/
│           ├── route.ts        # GET 목록
│           └── [slug]/route.ts # GET 상세
├── components/                 # 공유 UI 컴포넌트
├── lib/
│   ├── supabase.ts             # Supabase client
│   └── sendgrid.ts             # SendGrid helper
├── public/                     # 정적 에셋
├── ZZ-홈페이지.md              # 요구사항 스펙
└── AGENTS.md                   # 이 파일
```

## TECH STACK

| Area | Stack |
|------|-------|
| Framework | Next.js 14 App Router |
| UI | shadcn/ui + Tailwind CSS |
| DB/Storage | Supabase (PostgreSQL) |
| Form | React Hook Form + Zod |
| Email | SendGrid |
| Analytics | GA4 |
| Deploy | Vercel |

## DB SCHEMA

2 tables: `contacts`, `portfolio_items`. 전체 DDL은 `ZZ-홈페이지.md` 참조.

- `contacts` — 문의 폼 제출 저장. service_type: video | education | marketing | general
- `portfolio_items` — 포트폴리오. category: video | marketing. slug 기반 라우팅. is_featured로 메인 하이라이트 선별

## API ROUTES

| Method | Path | 역할 |
|--------|------|------|
| POST | /api/contact | 문의 접수 → Supabase insert + SendGrid 알림 |
| GET | /api/portfolio | 목록 (카테고리 필터 지원) |
| GET | /api/portfolio/[slug] | 상세 |

## CONVENTIONS (to establish)

- **언어**: UI 텍스트 전체 한국어. 코드/변수명은 영어
- **컴포넌트**: shadcn/ui 기반. 커스텀 컴포넌트는 `components/` 하위
- **스타일**: Tailwind only. 별도 CSS 파일 금지
- **폼 검증**: Zod 스키마 정의 → React Hook Form resolver 연결
- **서비스 페이지**: 3종 공통 구조 (프로세스, 유형/범위, 요금 가이드, FAQ, CTA)
- **모바일 우선**: 반응형 breakpoints — mobile first
- **브랜드**: 봄 느낌 그린/옐로 팔레트. 전문성 + 친근함

## ANTI-PATTERNS

- `pages/` 디렉토리 사용 금지 — App Router만 사용
- 인라인 스타일 금지 — Tailwind 클래스만
- API route에서 직접 DB 쿼리 외 ORM 사용 금지 — Supabase client 직접 사용
- 하드코딩 이메일/API 키 금지 — 환경변수(.env.local)만
- 서비스 페이지 간 구조 불일치 금지 — 공통 레이아웃 컴포넌트 추출

## SEO REQUIREMENTS

- 구조화 데이터: Organization, Service, FAQ (JSON-LD)
- 키워드: AI 영상 제작, AI 마케팅 대행, AI 교육, AI 사업자 교육
- GA4 이벤트: page_view, contact_submit, cta_click
- sitemap.xml 자동 생성 (Next.js metadata API)
- Search Console 연동

## USER FLOW

```
서비스 확인 → 포트폴리오 확인 → 문의 폼 작성 → 담당자 연락
```

CTA 동선: 모든 서비스 페이지 하단 → `/contact`

## COMMANDS (after setup)

```bash
npx create-next-app@14 . --typescript --tailwind --eslint --app --src-dir=no
npx shadcn-ui@latest init
npm install @supabase/supabase-js @sendgrid/mail react-hook-form zod @hookform/resolvers
npm run dev          # 개발 서버
npm run build        # 프로덕션 빌드
npm run lint         # ESLint
```

## COMPLETION CRITERIA

- [ ] 서비스 3종 페이지 라이브
- [ ] 포트폴리오 3개+ 등록, 필터 동작
- [ ] 문의 폼 → 이메일 알림 동작
- [ ] 모바일 반응형 정상
- [ ] Lighthouse 90+
- [ ] GA4 + Search Console 연동

## FUTURE (v0.1 이후)

서비스 8종 확장, 로그인, 결제(포트원), 클라이언트 대시보드, 영상 리뷰, 견적 자동화, CRM, 알림톡
