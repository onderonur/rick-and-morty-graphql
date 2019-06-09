import React from "react";
import { Query } from "react-apollo";
import LoadingIndicator from "./LoadingIndicator";
import { GET_CHARACTERS } from "app-graphql";

function CharactersQuery({ filter, children }) {
  return (
    <Query
      query={GET_CHARACTERS}
      variables={{ filter }}
      notifyOnNetworkStatusChange
    >
      {({ data, loading, error, fetchMore }) => {
        if (error) {
          return error;
        }

        if (loading && !data.characters) {
          return <LoadingIndicator />;
        }

        const { characters } = data;

        const results = characters.results || [];
        const info = characters.info || null;

        return children({ results, pageInfo: info, loading, fetchMore });
      }}
    </Query>
  );
}

export default CharactersQuery;
