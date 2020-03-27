module.exports = {
  extends: ["react-app", "prettier"],
  plugins: ["graphql", "prettier"],
  rules: {
    "prettier/prettier": "warn",
    "no-console": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
    "graphql/template-strings": [
      "error",
      {
        env: "apollo",
        schemaJson: require("./graphql.schema.json"),
      },
    ],
  },
};
