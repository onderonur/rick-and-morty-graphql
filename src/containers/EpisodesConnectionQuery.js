// OK
import React from "react";
import { Query } from "react-apollo";
import { GET_EPISODES } from "app-graphql";
import { resolveConnectionResponse } from "utils";

function EpisodesConnectionQuery({ children }) {
  return (
    <Query query={GET_EPISODES} notifyOnNetworkStatusChange>
      {({ data, loading, error, fetchMore }) => {
        if (error) {
          return error;
        }

        const { results, info } = resolveConnectionResponse(data.episodes);

        return children({ results, pageInfo: info, loading, fetchMore });
      }}
    </Query>
  );
}

export default EpisodesConnectionQuery;
