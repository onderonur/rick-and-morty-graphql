// OK
import React from "react";
import LocationQuery from "containers/LocationQuery";
import LocationProfile from "components/LocationProfile";

function Location({
  match: {
    params: { locationId }
  }
}) {
  return (
    <LocationQuery locationId={locationId}>
      {({ location, loading }) => (
        <LocationProfile location={location} loading={loading} />
      )}
    </LocationQuery>
  );
}

export default Location;
