import React from "react";
import LocationCard from "./LocationCard";
import Profile from "@/modules/shared/Profile";
import CharacterGridList from "@/modules/characters/CharacterGridList";
import gql from "graphql-tag";
import { LocationProfile_LocationFragment, Maybe } from "@/generated/graphql";

interface LocationProfileProps {
  location: Maybe<LocationProfile_LocationFragment>;
  loading: boolean;
}

function LocationProfile({ location, loading }: LocationProfileProps) {
  const residents = location?.residents;
  return (
    <Profile
      loading={loading}
      infoCard={location && <LocationCard location={location} />}
      fullWidthInfoCard
      mainSectionTitle="Residents"
      mainSection={residents && <CharacterGridList characters={residents} />}
    />
  );
}

LocationProfile.fragments = {
  location: gql`
    fragment LocationProfile_location on Location {
      ...LocationCard_location
      residents {
        ...CharacterGridList_character
      }
    }
    ${LocationCard.fragments.location}
    ${CharacterGridList.fragments.character}
  `,
};

export default LocationProfile;
