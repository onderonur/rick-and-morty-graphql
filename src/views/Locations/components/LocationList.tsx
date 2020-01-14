import React from "react";
import LocationListItem from "./LocationListItem";
import BaseList from "shared/components/BaseList";
import gql from "graphql-tag";
import { LocationList_LocationFragment } from "generated/graphql";
import Maybe from "graphql/tsutils/Maybe";

interface LocationListProps {
  locations: Maybe<Array<Maybe<LocationList_LocationFragment>>>;
  loading: boolean;
}

function LocationList({ locations, loading }: LocationListProps) {
  return (
    <BaseList
      items={locations}
      loading={loading}
      renderItem={location =>
        location.id && (
          <LocationListItem key={location.id} location={location} />
        )
      }
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
