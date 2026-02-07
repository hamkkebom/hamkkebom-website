# 배포 가이드

## 1. Supabase 설정

1. [supabase.com](https://supabase.com)에서 프로젝트 생성
2. SQL Editor에서 아래 DDL 실행:

```sql
CREATE TABLE contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  service_type TEXT,
  budget TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE portfolio_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE,
  category TEXT NOT NULL,
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

3. Settings > API에서 URL과 anon key 복사

## 2. SendGrid 설정

1. [sendgrid.com](https://sendgrid.com)에서 계정 생성
2. Settings > API Keys에서 API 키 생성 (Mail Send 권한)
3. Settings > Sender Authentication에서 발신 이메일 인증

## 3. Vercel 배포

1. GitHub에 코드 push
2. [vercel.com](https://vercel.com)에서 Import Project
3. Environment Variables 설정:

| 변수 | 값 |
|------|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase 프로젝트 URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key |
| `SENDGRID_API_KEY` | SendGrid API 키 |
| `SENDGRID_FROM_EMAIL` | 인증된 발신 이메일 |
| `NOTIFICATION_EMAIL` | 알림 받을 이메일 |

4. Deploy 클릭

## 4. 도메인 연결

1. Vercel > Settings > Domains에서 `hamkkebom.com` 추가
2. DNS 설정: CNAME `cname.vercel-dns.com` 또는 A 레코드 `76.76.21.21`

## 5. GA4 연동

1. Google Analytics에서 GA4 속성 생성
2. 측정 ID (G-XXXXXXXXXX) 복사
3. `app/layout.tsx`에 Script 태그 추가 또는 Google Tag Manager 사용

## 6. Search Console 연동

1. [search.google.com/search-console](https://search.google.com/search-console)에서 속성 추가
2. DNS 또는 HTML 태그로 소유권 확인
3. sitemap 제출: `https://hamkkebom.com/sitemap.xml`
