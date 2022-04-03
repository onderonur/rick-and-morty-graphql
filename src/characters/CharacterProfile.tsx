import React from 'react';
import CharacterCard from '@/characters/CharacterCard';
import Profile from '@/common/Profile';
import EpisodeList from '@/episodes/EpisodeList';
import gql from 'graphql-tag';
import { CharacterCard_CharacterFragment, Maybe } from '@/generated/graphql';

const maxVisibleEpisodeCount = 5;

interface CharacterProfileProps {
  character: Maybe<CharacterCard_CharacterFragment>;
  loading: boolean;
}

function CharacterProfile({ character, loading }: CharacterProfileProps) {
  const episode = character?.episode;
  return (
    <Profile
      loading={loading}
      infoCard={
        character && <CharacterCard titleAs="h1" character={character} />
      }
      mainSectionTitle="Episodes"
      mainSection={
        episode && (
          <EpisodeList
            items={episode}
            maxVisibleItemCount={maxVisibleEpisodeCount}
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
