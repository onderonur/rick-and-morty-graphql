import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: ['https://rickandmortyapi.com/graphql', 'src/apollo/typeDefs.ts'],
  documents: ['src/**/*.{ts,tsx}'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    'src/gql/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        // https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-react-apollo
        'typescript-react-apollo',
      ],
      config: {
        // https://the-guild.dev/graphql/codegen/plugins/typescript/typescript#maybevalue-string-default-value-t--null
        maybeValue: 'T | null | undefined',
      },
    },
    'src/gql/graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
};

export default config;
