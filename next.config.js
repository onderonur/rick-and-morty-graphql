const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

// https://nextjs.org/docs/api-reference/next.config.js/introduction
module.exports = (phase) => {
  return {
    env: {
      BASE_URL:
        phase === PHASE_DEVELOPMENT_SERVER
          ? "http://localhost:3000"
          : "https://rick-and-morty-graphql.now.sh",
      API_URL: "https://rickandmortyapi.com",
    },
  };
};
