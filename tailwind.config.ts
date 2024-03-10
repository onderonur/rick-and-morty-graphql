import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      const cssVariableKey = '--fixed-line-height';

      matchUtilities(
        {
          'fixed-leading': (val: string) => {
            let lineHeight = val;

            // Some `lineHeight` values does not end with `rem` like `normal: 1.5`.
            // To handle these values, we add `em` at the end of them
            // to calculate `lineHeight * fontSize` value of the current element.
            if (!lineHeight.endsWith('rem')) {
              lineHeight = `${lineHeight}em`;
            }

            return {
              [cssVariableKey]: lineHeight,
              lineHeight,
            };
          },
        },
        {
          values: theme('lineHeight'),
        },
      );

      matchUtilities(
        {
          'fixed-line-clamp': (val) => {
            return {
              minHeight: `calc(var(${cssVariableKey}) * ${val})`,
              // For line clamp
              overflow: 'hidden',
              display: '-webkit-box',
              '-webkit-box-orient': 'vertical',
              '-webkit-line-clamp': `${val}`,
            };
          },
        },
        {
          values: {
            '1': 1,
            '2': 2,
            '3': 3,
            '4': 4,
            '5': 5,
          },
        },
      );
    }),
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
