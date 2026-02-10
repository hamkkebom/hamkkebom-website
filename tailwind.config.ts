import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	container: {
  		center: true,
  		padding: {
  			DEFAULT: '1rem',
  			sm: '2rem',
  			lg: '4rem',
  			xl: '5rem',
  			'2xl': '6rem',
  		},
  	},
  	extend: {
  		fontFamily: {
  			sans: ['var(--font-noto-sans-kr)', 'system-ui', 'sans-serif'],
  		},
  		colors: {
  			/* ── 봄의 정원 Brand Colors ────────────────── */
  			brand: {
  				DEFAULT: '#2D8F6F',  /* 새잎 초록 — Primary */
  				light: '#E8F5EE',    /* 연잎 — Background tint */
  				dark: '#1E6B52',     /* 깊은잎 — Hover state */
  				50: '#EDFAF4',
  				100: '#D1F2E3',
  				200: '#A3E5C7',
  				300: '#6BD4A6',
  				400: '#3BB882',
  				500: '#2D8F6F',
  				600: '#1E6B52',
  				700: '#175240',
  				800: '#12402F',
  				900: '#0D3020',
  			},
  			seal: {
  				DEFAULT: '#C94432',  /* 인장 주홍 — Accent */
  				light: '#FDF2F0',
  				dark: '#A33628',
  				50: '#FDF2F0',
  				100: '#FADDD8',
  				200: '#F3B5AC',
  				300: '#E88575',
  				400: '#D9594A',
  				500: '#C94432',
  				600: '#A33628',
  				700: '#7E2B20',
  				800: '#5C2118',
  				900: '#3D1610',
  			},
  			ink: {
  				DEFAULT: '#1A1F2E',  /* 먹빛 — Dark */
  				light: '#2A3040',
  				50: '#F4F5F7',
  				100: '#E2E4E9',
  				200: '#C5C9D3',
  				300: '#9CA3B3',
  				400: '#7A8496',
  				500: '#5C6477',
  				600: '#434B5E',
  				700: '#323848',
  				800: '#242938',
  				900: '#1A1F2E',
  				950: '#0F1219',
  			},
  			hanji: '#FAFAF7',        /* 한지 — Warm white background */

  			/* ── shadcn/ui System Colors ────────────────── */
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
