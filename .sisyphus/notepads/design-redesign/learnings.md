# Learnings: design-redesign

## Conventions & Patterns

_This file captures design patterns, coding conventions, and best practices discovered during task execution._

---


## Task 1: Pretendard Font Verification

### Finding
- Pretendard font is correctly configured in `app/layout.tsx` using `next/font/local`
- Font files are located in `public/fonts/` directory with 4 weights: Regular (400), Medium (500), SemiBold (600), Bold (700)
- Font is applied via CSS variable `--font-pretendard` and Tailwind's `font-sans` class
- Computed font family on body element: `__pretendard_bfa2e3, __pretendard_Fallback_bfa2e3, system-ui, sans-serif`
- The `__pretendard_*` prefix is Next.js's internal naming for local fonts

### Verification Method
1. Started dev server (runs on port 3001, not 3000 - port 3000 was already in use)
2. Navigated to homepage via Playwright
3. Executed JavaScript: `window.getComputedStyle(document.body).fontFamily`
4. Confirmed result contains "pretendard" (case-insensitive)
5. Captured full-page screenshot to `.sisyphus/evidence/task-1-font-check.png`

### Status
✅ VERIFIED - Pretendard font is correctly loaded and rendering on the homepage

