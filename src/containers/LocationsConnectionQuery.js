// OK
import React from "react";
import { Query } from "react-apollo";
import { GET_LOCATIONS } from "app-graphql";
import { resolveConnectionResponse } from "utils";

function LocationsConnectionQuery({ children }) {
  return (
    <Query query={GET_LOCATIONS} notifyOnNetworkStatusChange>
      {({ data, loading, error, fetchMore }) => {
        if (error) {
          return error;
        }

        const { results, info } = resolveConnectionResponse(data.locations);

        return children({ results, pageInfo: info, loading, fetchMore });
      }}
    </Query>
  );
}

export default LocationsConnectionQuery;
