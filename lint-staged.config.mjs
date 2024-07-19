// https://nextjs.org/docs/app/building-your-application/configuring/eslint#lint-staged
import path from 'node:path';

const buildEslintCommand = (filenames) =>
  `next lint --max-warnings 0 --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

const config = {
  '*': 'prettier --write --ignore-unknown',
  // `!src/gql` is added, since that folder is ignored in ESLint config
  // and `lint-staged` throws "File ignored because of a matching ignore pattern." warning
  // if we don't add this.
  '*.{js,jsx,ts,tsx},!src/gql': [buildEslintCommand],
};

export default config;
