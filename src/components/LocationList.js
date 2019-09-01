import React from "react";
import BaseList from "./BaseList";
import LocationListItem from "./LocationListItem";

function LocationList({ locations, loading, maxVisibleItemCount }) {
  return (
    <BaseList
      items={locations}
      loading={loading}
      maxVisibleItemCount={maxVisibleItemCount}
      renderItem={location => (
        <LocationListItem key={location.id} location={location} />
      )}
    />
  );
}

export default LocationList;
