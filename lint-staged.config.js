// https://nextjs.org/docs/pages/building-your-application/configuring/eslint#lint-staged
const path = require('node:path');

const buildEslintCommand = (filenames) =>
  `next lint --max-warnings 0 --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

module.exports = {
  '*': 'prettier --write --ignore-unknown',
  // `!src/gql` is added, since that folder is ignored in ESLint config
  // and `lint-staged` throws "File ignored because of a matching ignore pattern." warning
  // if we don't add this.
  '*.{js,jsx,ts,tsx},!src/gql': [buildEslintCommand],
};
