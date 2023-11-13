// For VSCode GraphQL: Language Feature Support extension:
// https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql
module.exports = {
  schema: './src/gql/introspection.json',
  documents: ['src/**/*.{ts,tsx}'],
};

// Or without introspection:
// module.exports = {
//   schema: 'https://rickandmortyapi.com/graphql',
//   documents: ['src/**/*.{ts,tsx}'],
// };
