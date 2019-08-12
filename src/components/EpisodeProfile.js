import React from "react";
import EpisodeCard from "./EpisodeCard";
import CharacterGridList from "./CharacterGridList";
import Profile from "./Profile";

function EpisodeProfile({ episode, loading }) {
  return (
    <Profile
      loading={loading}
      infoCard={<EpisodeCard episode={episode} />}
      fullWidthInfoCard
      mainSectionTitle="Characters"
      mainSection={
        episode && <CharacterGridList characters={episode.characters} />
      }
    />
  );
}

export default EpisodeProfile;
