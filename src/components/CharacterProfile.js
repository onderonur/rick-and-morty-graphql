// OK
import React from "react";
import CharacterCard from "./CharacterCard";
import EpisodeList from "./EpisodeList";
import Profile from "./Profile";

const MAX_VISIBLE_EPISODE_COUNT = 5;

function CharacterProfile({ character, loading }) {
  return (
    <Profile
      loading={loading}
      infoCard={<CharacterCard character={character} showSpecs />}
      mainSectionTitle="Episodes"
      mainSection={
        character && (
          <EpisodeList
            episodes={character.episode}
            maxVisibleItemCount={MAX_VISIBLE_EPISODE_COUNT}
          />
        )
      }
    />
  );
}

export default CharacterProfile;
