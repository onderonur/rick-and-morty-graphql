module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'next',
  ],
  plugins: ['graphql', '@typescript-eslint', 'prettier'],
  parser: '@typescript-eslint/parser',
  rules: {
    'prettier/prettier': 'warn',
    'no-console': 'warn',
    'object-shorthand': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-types': 'off',
    'graphql/template-strings': [
      'error',
      {
        env: 'apollo',
        schemaJson: require('./src/generated/graphql.schema.json'),
      },
    ],
  },
};
