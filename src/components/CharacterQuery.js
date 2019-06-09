import React from "react";
import { Query } from "react-apollo";
import LoadingIndicator from "./LoadingIndicator";
import { GET_CHARACTER } from "app-graphql";

function CharacterQuery({ characterId, children }) {
  return (
    <Query query={GET_CHARACTER} variables={{ id: characterId }}>
      {({ data, loading, error }) => {
        if (error) {
          return error;
        }

        if (loading) {
          return <LoadingIndicator />;
        }

        const { character } = data;

        return children({ character, loading });
      }}
    </Query>
  );
}

export default CharacterQuery;
