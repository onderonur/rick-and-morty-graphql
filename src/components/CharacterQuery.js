// OK
import React from "react";
import { Query } from "react-apollo";
import { GET_CHARACTER } from "app-graphql";

function CharacterQuery({ characterId, children }) {
  return (
    <Query query={GET_CHARACTER} variables={{ id: characterId }}>
      {({ data, loading, error }) => {
        if (error) {
          return error;
        }

        const { character } = data;

        return children({ character, loading });
      }}
    </Query>
  );
}

export default CharacterQuery;
