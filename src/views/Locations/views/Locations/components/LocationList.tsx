import React from "react";
import LocationListItem from "./LocationListItem";
import BaseList from "@/components/BaseList";
import gql from "graphql-tag";
import { LocationList_LocationFragment, Maybe } from "@/generated/graphql";

type ListItem = Maybe<LocationList_LocationFragment>;

interface LocationListProps {
  locations: Maybe<Array<ListItem>>;
  loading: boolean;
}

function renderItem(location: ListItem) {
  if (location?.id) {
    return <LocationListItem key={location.id} location={location} />;
  }
}

function LocationList({ locations, loading }: LocationListProps) {
  return (
    <BaseList items={locations} loading={loading} renderItem={renderItem} />
  );
}

LocationList.fragments = {
  location: gql`
    fragment LocationList_location on Location {
      ...LocationListItem_location
    }
    ${LocationListItem.fragments.location}
  `,
};

export default LocationList;
