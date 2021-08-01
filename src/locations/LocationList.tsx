import React from "react";
import LocationListItem from "./LocationListItem";
import BaseList, { BaseListProps } from "@/common/BaseList";
import gql from "graphql-tag";
import { LocationList_LocationFragment, Maybe } from "@/generated/graphql";

type ListItem = Maybe<LocationList_LocationFragment>;

type LocationListProps = Pick<
  BaseListProps<ListItem>,
  "items" | "loading" | "loadingRef"
>;

function renderItem(location: ListItem) {
  if (location?.id) {
    return <LocationListItem key={location.id} location={location} />;
  }
}

function LocationList(props: LocationListProps) {
  return <BaseList renderItem={renderItem} {...props} />;
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
