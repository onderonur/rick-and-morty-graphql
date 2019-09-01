import React from "react";
import ReactDOM from "react-dom";
import App from "components/App";
import * as serviceWorker from "./serviceWorker";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";
import { BrowserRouter } from "react-router-dom";
import typeDefs from "app-graphql/typeDefs";
import resolvers from "app-graphql/resolvers";

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  uri: "https://rickandmortyapi.com/graphql/",
  clientState: {
    typeDefs,
    resolvers
  }
});

cache.writeData({
  data: {
    showDrawer: false
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
