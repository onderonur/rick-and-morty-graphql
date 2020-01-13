import React from "react";
import CharacterCard from "shared/components/CharacterCard";
import Profile from "shared/components/Profile";
import EpisodeList from "shared/components/EpisodeList";
import gql from "graphql-tag";

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

CharacterProfile.fragments = {
  character: gql`
    fragment CharacterProfile_character on Character {
      ...CharacterCard_character
      ...CharacterCard_characterSpecs
      episode {
        ...EpisodeList_episode
      }
    }
    ${CharacterCard.fragments.character}
    ${CharacterCard.fragments.characterSpecs}
    ${EpisodeList.fragments.episode}
  `
};

export default CharacterProfile;
