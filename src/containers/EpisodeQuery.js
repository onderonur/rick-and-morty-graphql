// OK
import React from "react";
import { Query } from "react-apollo";
import { GET_EPISODE } from "app-graphql";

function EpisodeQuery({ episodeId, children }) {
  return (
    <Query query={GET_EPISODE} variables={{ id: episodeId }}>
      {({ data, loading, error }) => {
        if (error) {
          return error;
        }

        const { episode } = data;

        return children({ episode, loading });
      }}
    </Query>
  );
}

export default EpisodeQuery;
