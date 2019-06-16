// OK
import React from "react";
import { Query } from "react-apollo";
import { GET_CHARACTERS } from "app-graphql";

function CharactersConnectionQuery({ filter, children }) {
  return (
    <Query
      query={GET_CHARACTERS}
      variables={filter}
      notifyOnNetworkStatusChange
    >
      {({ data, loading, error, fetchMore }) => {
        if (error) {
          return error;
        }

        const { characters } = data;

        const results = characters ? characters.results : [];
        const info = characters ? characters.info : null;

        return children({ results, pageInfo: info, loading, fetchMore });
      }}
    </Query>
  );
}

export default CharactersConnectionQuery;
