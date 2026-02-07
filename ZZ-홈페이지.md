# ZZ. 함께봄 홈페이지 (경량)

> hamkkebom.com | Next.js 14 + Supabase + Vercel
> 핵심 3종: 영상 제작, 교육, 마케팅

---

## 페이지 (8개)

```
/                    메인 랜딩
/about               회사·팀 소개
/services/video      영상 제작
/services/education  교육
/services/marketing  마케팅
/portfolio           포트폴리오 목록
/portfolio/[id]      포트폴리오 상세
/contact             문의·상담·견적 (통합)
```

---

## 페이지별 구성

### 메인 (`/`)
- 히어로: "AI로 시작하는 당신의 사업"
- 서비스 3종 카드 + CTA
- 포트폴리오 하이라이트 (3~6개)
- 실적 수치 + 후기 슬라이더

### 서비스 상세 (3종 공통 구조)
- 프로세스 설명
- 유형/범위
- 요금 가이드
- FAQ
- CTA → `/contact`

### 포트폴리오
- 카테고리 필터 (영상/마케팅)
- 그리드 → 상세 (과제→솔루션→결과)

### 문의 (`/contact`)
- 폼: 이름, 이메일, 전화, 회사, 서비스유형, 예산, 메시지
- 제출 → SendGrid 이메일 알림

---

## 사용자 흐름

```
서비스 확인 → 포트폴리오 확인 → 문의 폼 작성 → 담당자 연락
```

---

## 기술

| 영역 | 스택 |
|------|------|
| Frontend | Next.js 14 App Router, shadcn/ui, Tailwind |
| DB/Storage | Supabase |
| 폼 검증 | React Hook Form + Zod |
| 이메일 | SendGrid |
| 분석 | GA4 |
| 배포 | Vercel |

---

## DB (2 테이블)

```sql
CREATE TABLE contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  service_type TEXT,  -- video, education, marketing, general
  budget TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE portfolio_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE,
  category TEXT NOT NULL,  -- video, marketing
  thumbnail_url TEXT,
  media_urls TEXT[],
  description TEXT,
  challenge TEXT,
  solution TEXT,
  result TEXT,
  client_name TEXT,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);
```

---

## API (3개)

| Method | Path | 설명 |
|--------|------|------|
| POST | /api/contact | 문의 접수 + 이메일 |
| GET | /api/portfolio | 목록 |
| GET | /api/portfolio/[slug] | 상세 |

---

## 디자인

- 모바일 우선 반응형
- 브랜드 컬러: 봄 느낌 (그린/옐로)
- 전문성 + 친근함

---

## SEO

- 키워드: AI 영상 제작, AI 마케팅 대행, AI 교육, AI 사업자 교육
- 구조화 데이터: Organization, Service, FAQ
- GA4 이벤트: 페이지뷰, 문의접수, CTA클릭
- sitemap.xml 자동 생성

---

## 완료 기준

- [ ] 서비스 3종 페이지 라이브
- [ ] 포트폴리오 3개+ 등록, 필터 동작
- [ ] 문의 폼 → 이메일 알림 동작
- [ ] 모바일 반응형 정상
- [ ] Lighthouse 90+
- [ ] GA4 + 서치콘솔 연동

---

## 향후 확장 (01 버전)

서비스 8종, 로그인, 결제(포트원), 클라이언트 대시보드, 영상 리뷰, 견적 자동화, CRM, 알림톡
