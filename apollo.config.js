module.exports = {
  client: {
    service: {
      name: "rick-and-morty",
      url: "https://rickandmortyapi.com/graphql"
    },
    excludes: ["**/generated/**", "graphql.schema.json"]
  }
};
