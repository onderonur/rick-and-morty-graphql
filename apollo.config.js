module.exports = {
  client: {
    service: {
      name: "rick-and-morty",
      localSchemaFile: "graphql.schema.json",
    },
    excludes: ["**/generated/**", "src/gql/typeDefs.ts"],
  },
};

// Or alternatively:
// module.exports = {
//   client: {
//     service: {
//       name: "rick-and-morty",
//       url: "https://rickandmortyapi.com/graphql"
//     },
//     excludes: ["**/generated/**", "graphql.schema.json"]
//   }
// };
