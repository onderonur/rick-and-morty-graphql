import React from "react";
import LocationListItem from "./LocationListItem";
import BaseList from "shared/components/BaseList";
import gql from "graphql-tag";
import {
  Scalars,
  LocationListItem_LocationFragment,
  Maybe
} from "generated/graphql";

interface LocationListProps {
  locations: Maybe<Maybe<LocationListItem_LocationFragment>[]> | undefined;
  loading: boolean;
}

function LocationList({ locations, loading }: LocationListProps) {
  return (
    <BaseList
      items={locations || []}
      loading={loading}
      renderItem={location => (
        <LocationListItem
          key={location.id as Scalars["ID"]}
          location={location}
        />
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
