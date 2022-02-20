module.exports = {
  presets: ['next/babel'],
  plugins: [
    // To use component selectors:
    // https://mui.com/system/styled/#how-to-use-components-selector-api
    [
      '@emotion',
      {
        importMap: {
          '@mui/material': {
            styled: {
              canonicalImport: ['@emotion/styled', 'default'],
              styledBaseImport: ['@mui/material/styles', 'styled'],
            },
          },
        },
      },
    ],
  ],
};
