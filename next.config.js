module.exports = {
  env: {
    BASE_URL:
      process.env.NODE_ENV === "production"
        ? "https://rick-and-morty-graphql.now.sh"
        : "http://localhost:3000",
    API_URL: "https://rickandmortyapi.com",
  },
};
