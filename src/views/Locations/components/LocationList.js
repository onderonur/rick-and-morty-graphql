import React from "react";
import LocationListItem from "./LocationListItem";
import BaseList from "shared/components/BaseList";
import gql from "graphql-tag";

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

LocationList.fragments = {
  location: gql`
    fragment LocationList_location on Location {
      ...LocationListItem_location
    }
    ${LocationListItem.fragments.location}
  `
};

export default LocationList;
