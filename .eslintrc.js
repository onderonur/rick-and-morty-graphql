module.exports = {
  extends: ["react-app", "plugin:prettier/recommended"],
  plugins: ["graphql", "prettier"],
  rules: {
    "prettier/prettier": "warn",
    "no-console": "warn",
    "graphql/template-strings": [
      "error",
      {
        env: "apollo",
        schemaJson: require("./graphql.schema.json")
      }
    ]
  }
};
