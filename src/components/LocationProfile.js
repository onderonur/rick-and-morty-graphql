import React from "react";
import CharacterGridList from "./CharacterGridList";
import LocationCard from "./LocationCard";
import Profile from "./Profile";

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

export default LocationProfile;
