import React from "react";
import CharacterCard from "@/shared/components/CharacterCard";
import Profile from "@/shared/components/Profile";
import EpisodeList from "@/shared/components/EpisodeList";
import gql from "graphql-tag";
import { CharacterCard_CharacterFragment, Maybe } from "@/generated/graphql";

const MAX_VISIBLE_EPISODE_COUNT = 5;

interface CharacterProfileProps {
  character: Maybe<CharacterCard_CharacterFragment>;
  loading: boolean;
}

function CharacterProfile({ character, loading }: CharacterProfileProps) {
  const episode = character?.episode;
  return (
    <Profile
      loading={loading}
      infoCard={character && <CharacterCard character={character} />}
      mainSectionTitle="Episodes"
      mainSection={
        episode && (
          <EpisodeList
            episodes={episode}
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
      ...CharacterCard_characterWithSpecs
      episode {
        ...EpisodeList_episode
      }
    }
    ${CharacterCard.fragments.characterWithSpecs}
    ${EpisodeList.fragments.episode}
  `,
};

export default CharacterProfile;
