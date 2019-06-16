// OK
import React from "react";
import { Query } from "react-apollo";
import { GET_LOCATION } from "app-graphql";

function LocationQuery({ locationId, children }) {
  return (
    <Query query={GET_LOCATION} variables={{ id: locationId }}>
      {({ data, loading, error }) => {
        if (error) {
          return error;
        }

        const { location } = data;

        return children({ location, loading });
      }}
    </Query>
  );
}

export default LocationQuery;
