import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        fredoka: ['var(--font-fredoka)'],
      },
      colors: {
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        card: {
          DEFAULT: 'hsl(var(--card) / <alpha-value>)',
          foreground: 'hsl(var(--card-foreground) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
          foreground: 'hsl(var(--muted-foreground) / <alpha-value>)',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
          foreground: 'hsl(var(--primary-foreground) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
          foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)',
        },
        scrollbar: {
          track: 'hsl(var(--scrollbar-track) / <alpha-value>)',
          thumb: 'hsl(var(--scrollbar-thumb) / <alpha-value>)',
          'thumb-hover': 'hsl(var(--scrollbar-thumb-hover) / <alpha-value>)',
        },
        border: 'hsl(var(--border) / <alpha-value>)',
        ring: 'hsl(var(--ring) / <alpha-value>)',
      },
      boxShadow: {
        clay: '8px 8px 16px 0 rgba(0,0,0,.25), inset -8px -8px 16px 0 rgba(0,0,0,.25), inset 8px 8px 16px 0 hsla(0,0%,100%,.2)',
      },
      dropShadow: {
        clay: '0 .075em hsla(0 0 0 / 17%)',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/unbound-method
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animation-delay': (value: string) => {
            return {
              'animation-delay': value,
            };
          },
        },
        {
          values: theme('transitionDelay'),
        },
      );
    }),
  ],
} satisfies Config;
