// https://the-guild.dev/graphql/codegen/docs/guides/react-vue
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://rickandmortyapi.com/graphql',
  documents: ['src/**/*.{ts,tsx}'],
  generates: {
    './src/core/gql/': {
      preset: 'client',
    },
    './src/core/gql/introspection.json': {
      plugins: ['introspection'],
      config: {
        minify: true,
      },
    },
  },
};

export default config;
