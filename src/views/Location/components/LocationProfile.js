import React from "react";
import LocationCard from "./LocationCard";
import Profile from "shared/components/Profile";
import CharacterGridList from "shared/components/CharacterGridList";
import gql from "graphql-tag";

function LocationProfile({ location, loading }) {
  return (
    <Profile
      loading={loading}
      infoCard={<LocationCard location={location} />}
      fullWidthInfoCard
      mainSectionTitle="Residents"
      mainSection={
        location && <CharacterGridList characters={location.residents} />
      }
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
  `
};

export default LocationProfile;
