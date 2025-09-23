/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          50: 'oklch(95.5% 0.020 30.2)',
          100: 'oklch(90.8% 0.043 30.2)',
          200: 'oklch(81.9% 0.086 30.2)',
          300: 'oklch(73.5% 0.128 30.2)',
          400: 'oklch(65.6% 0.165 30.2)',
          500: 'oklch(58.2% 0.196 30.2)', // #D97757
          600: 'oklch(51.4% 0.176 30.2)',
          700: 'oklch(44.1% 0.151 30.2)',
          800: 'oklch(37.5% 0.124 30.2)',
          900: 'oklch(31.8% 0.099 30.2)',
          DEFAULT: 'oklch(58.2% 0.196 30.2)',
          foreground: 'hsl(var(--accent-foreground))',
        },
        neutral: {
          50: 'oklch(98.0% 0.003 210)',
          100: 'oklch(95.9% 0.006 210)',
          200: 'oklch(91.9% 0.011 210)',
          300: 'oklch(87.4% 0.015 210)',
          400: 'oklch(71.8% 0.022 210)',
          500: 'oklch(56.5% 0.027 210)',
          600: 'oklch(45.3% 0.026 210)',
          700: 'oklch(35.9% 0.023 210)',
          800: 'oklch(28.4% 0.019 210)',
          900: 'oklch(21.8% 0.014 210)',
          950: 'oklch(14.2% 0.008 210)',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        'sans-jp': ['Noto Sans JP', 'Hiragino Kaku Gothic Pro', 'Meiryo', 'sans-serif'],
      },
      borderRadius: {
        'xs': '0.25rem',
        'sm': '0.375rem',
        DEFAULT: '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '1.75rem',
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
      lineHeight: {
        'relaxed': '1.6',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
