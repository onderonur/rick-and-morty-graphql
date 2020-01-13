import React from "react";
import Profile from "shared/components/Profile";
import CharacterGridList from "shared/components/CharacterGridList";
import EpisodeCard from "./EpisodeCard";
import gql from "graphql-tag";

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

EpisodeProfile.fragments = {
  episode: gql`
    fragment EpisodeProfile_episode on Episode {
      ...EpisodeCard_episode
      characters {
        ...CharacterGridList_character
      }
    }
    ${EpisodeCard.fragments.episode}
    ${CharacterGridList.fragments.character}
  `
};

export default EpisodeProfile;
